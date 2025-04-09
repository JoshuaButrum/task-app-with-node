const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jlb135190@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jlb135190@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}