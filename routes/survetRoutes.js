const Survey = require('../models/Survey').Survey;
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const emailTemplate = require('../services/emailTemplate');

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
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
};
