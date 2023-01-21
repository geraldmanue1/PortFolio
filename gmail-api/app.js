const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = '815713110409-hahpg65a3j1b3cf468g2td4robveqg2d.apps.googleusercontent.com';
const CLEINT_SECRET = 'Fh_86JhvkuGs1uDuLSTGYlRq';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04snw8U0Bjsx7CgYIARAAGAQSNwF-L9Ir8qYG0WLUoG2pcCXhBhg7ASYC1MB3KExjNqqu9bxduXTEBGqh6j_1Dea2KbVktq4cD9c';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'geraldmanuel96@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'GERALD MANUEL “✉” <geraldmanuel96@gmail.com>',
      to: 'geraldmanuel96@gmail.com',
      subject: 'Bonjour de gmail en utilisant API',
      text: 'Bonjour de gmail en utilisant API',
      html: '<h1>Bonjour de gmail en utilisant API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

