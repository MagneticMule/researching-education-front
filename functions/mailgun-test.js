const Mailgun = require('mailgun-js');

const sendThankYouEmail = async () =>
  new Promise((resolve, reject) => {
    console.log('Sending the email');

    // const apiKey = 'key-dbb6b82b3939d99f842052389829d27d';
    const apiKey = process.env.MAILGUN_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const host = process.env.MAILGUN_HOST;

    const mailgun = Mailgun({
      apiKey,
      domain,
      host,
    });

    const mailData = {
      from: 'Researching Education <admin@mail.researchingeducation.com>',
      to: 'skywriter@gmail.com',
      subject: 'Thank you for subscribing to Researching Education',
      text: 'Do not respond to this email directly.',
    };

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err);
      resolve();
    });
  });

exports.handler = async event => {
  try {
    // const data = JSON.parse(event.body);

    await sendThankYouEmail();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message sent successfully.',
      }),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};
