const axios = require("axios");
const config = require("../config/config.json");

async function send(testReport) {
  await axios.post(config.ipassURL, testReport, {
    headers: {
      token: config.ipassToken
    }
  });

  return true;
}

module.exports = { send };
