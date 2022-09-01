const core = require('@actions/core');
const axios = require('axios');


async function doAction() {
  try {
    const message = core.getInput('message');

    const url = core.getInput('webhook');
    await axios({ url, method: 'POST', data: { content: message } });

  } catch (error) {
    core.setFailed(error.message);

  }
}

doAction();
