const querystring = require('querystring');
const axios = require('axios');

const api_key = '5ba01361154fa5d6149464eda695563143c60626e092f424';
const api_token = '8d5005d9ea63d28dd362ca68e5619d0860443840a955c0b6';
const account_sid = 'ispirt2';

const host = 'api.exotel.com';
const endpoint = '/v1/Accounts/'+ account_sid+ '/Sms/send';

// const smsData = {
//   From: '08047192303',
//   To: '9757147940',
//   Body: 'You have been assigned a voucher for a coronavirus immunity test. Your voucher details are - Name: Abhav Kedia, Phone: 1234, DOB: 29/03/1995. Please wait for further instructions from your employer. Call 6789 for further information.',
//   Priority: 'high'
// };

async function send({to, body, priority}) {
  const smsData = {
    To: to,
    From: '08047192303',
    Body: body,
    Priority: priority
  };
  return await axios.post(`https://${host}${endpoint}`, querystring.stringify(smsData), {
    auth: {
      username: api_key,
      password: api_token
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

module.exports = {send};
