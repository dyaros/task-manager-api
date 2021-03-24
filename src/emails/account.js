// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// console.log(process.env.sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    // sgMail.send({
    //     to: email,
    //     from: 'dy19@att.net',
    //     subject: 'Thanks for joining in!',
    //     text: 'Welcome to the app, $(name). Let me know how you get along with the app.'
    // })
    //console.log('welcome email sent')
}


const sendCancelationEmail = (email, name) => {
    // sgMail.semd({
    //     to: email,
    //     from: 'dy19@att.net',
    //     subject: 'Sorry to see you go!',
    //     text: 'Goodbye, $(name). I hope to see you back soon.'
    // })
    //console.log('cancelation email sent')
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}