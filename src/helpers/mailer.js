const nodeMailer = require('nodemailer')
const path = require('path');
const hbs = require('nodemailer-express-handlebars')

const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve(appRoot + '/views'),
        defaultLayout: false,
    },
    viewPath: path.resolve(appRoot + '/views'),
};

const sendMail = async (to, subject, data) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.SHOP_EMAIL,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken: process.env.OAUTH_ACCESS_TOKEN
        }
    })
    // Use template inside views
    transporter.use('compile', hbs(handlebarOptions))

    const content = {
        from: process.env.SHOP_EMAIL,
        to: to,
        subject: subject,
        template: 'email',
        context: {
            url: data
        }
    }
    return transporter.sendMail(content)
}

const forgotPasswordMail = async (to, subject, newPassword, url) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.SHOP_EMAIL,
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken: process.env.OAUTH_ACCESS_TOKEN
        }
    })
    // Use template inside views
    transporter.use('compile', hbs(handlebarOptions))

    const content = {
        from: process.env.SHOP_EMAIL,
        to: to,
        subject: subject,
        template: 'email_password',
        context: {
            newPassword: newPassword,
            url: url
        }
    }
    return transporter.sendMail(content)
}


module.exports = { sendMail, forgotPasswordMail }