require("dotenv").config();

const axios = require('node-fetch');
const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
const mailChimpAudienceID = process.env.MAILCHIMP_AUDIENCE_ID;
console.log(`${process.env.MAILCHIMP_API_KEY} mailchimp api key and Audience ID ${process.env.MAILCHIMP_AUDIENCE_ID}`);

async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

exports.handler = function(event, context, callback) {

  callback(null, {
    statusCode: 200,
    body: 'No worries, all is working fine!',
  });
};
