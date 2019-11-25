const fetch = require('node-fetch');
require('dotenv').config();
const qs = require('query-string');
const base64 = require('base-64');

const { MC_USERNAME, MC_API_KEY, MC_AUDIENCE_ID, MC_URL } = process.env;

const API_ENDPOINT = `${MC_URL}/lists/${MC_AUDIENCE_ID}/members/`;

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'We only accept POST methods' };
  }

  const params = qs.parse(event.body);
  console.log(`From mailchimp-test ${params.email_address}`);

  return fetch(API_ENDPOINT, {
    headers: {
      Authorization: `Basic ${base64.encode(`${MC_USERNAME}:${MC_API_KEY}`)}`,
      Accept: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      email_address: params.email_address,
      status: `pending`,
    }),
  })
    .then(response => {
      console.warn('Response status',response.status);
      return [response.json(),response.status];
    })
    .then((json,status) => (
      console.log("json",json),
      console.log("status:",status),
      {
        statusCode: 200,
        body: JSON.stringify(data),
      }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
