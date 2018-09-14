const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const Survey = require('../models/Survey').Survey;
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const emailTemplate = require('../services/emailTemplate');

module.exports = app => {
  app.get('/api/surveys/', requireLogin, async (req, res) => {
    const user = await Survey.find({ _user: req.user.id }).select({ recipients: false });
    res.json(user);
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks from voting!');
  });

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      const mailer = new Mailer(survey, emailTemplate(survey));
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(422).send(error);
    }
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(event => {
        const pathname = new URL(event.url).pathname;
        const match = p.test(pathname); //{surveyId: data, choice: data} || null

        if (match) {
          return {
            email: event.email,
            surveyId: match.surveyId,
            choice: match.choice
          };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(event => {
        Survey.updateOne(
          {
            _id: event.surveyId,
            recipient: {
              $elemMatch: { email: event.email, responded: false }
            }
          },
          {
            $inc: { [event.choice]: 1 },
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
        ).exec();
      })
      .value();
  });
};
