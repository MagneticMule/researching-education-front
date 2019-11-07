// const Mailgun = require('mailgun-js');
const fetch = require('node-fetch');

const sendThankYouEmail = async () =>
  new Promise((resolve, reject) => {
    console.log('Sending the email');

    // const apiKey = 'key-dbb6b82b3939d99f842052389829d27d';
    const apiKey = process.env.MAILGUN_KEY;
    const domain = process.env.MAILGUN_DOMAIN;
    const host = process.env.MAILGUN_HOST;

    const headers = { "api":"key-aeccc08aef9515134aa69fb50ec96d4d","":""};


    const mailData = {
      from: 'Researching Education <admin@mail.researchingeducation.com>',
      to: 'skywriter@gmail.com',
      subject: 'Thank you for subscribing to Researching Education',
      text: 'Do not respond to this email directly.',
    };

    fetch('https://api.eu.mailgun.net/mail.researchingeducation'){
      .then(response=>response.json()
      then(data=>{

      })
    }

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
