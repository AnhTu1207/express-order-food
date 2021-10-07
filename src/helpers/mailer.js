const nodeMailer = require('nodemailer')

const mailHost = 'smtp.gmail.com'
const mailPort = 465

const sendMail = async (to, subject, data) => {
    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
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
    const content = {
        from: process.env.SHOP_EMAIL,
        to: to,
        subject: subject,
        html: `<a href="${data}"><H2>Click on this</H2></a>`
    }
    return transporter.sendMail(content)
}

module.exports = { sendMail }