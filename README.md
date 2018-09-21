
Backend: NodeJs, Express,
Frontend: React, Readux, Redux-thunk, Redux-Form


###
Biling: sprite
Emails: sendgrid
DB: mlab (mongodb)
Auth: GoogleAuth

https://app.sendgrid.com/
https://mlab.com/

Survey.findOne({
  id: surveyId,
  recipient: {
    $elemMatch: {email: props.email, responded: false}
  }
})

Survey.updateOne({
  id: surveyId,
  recipient: {
    $elemMatch: {email: props.email, responded: false}
  }
}, {...})

-----

survey = Survey.findById(...)
recipient = survey.recipient.find( r => r.email === props.email && !r.responded)
recipient (update if found)
