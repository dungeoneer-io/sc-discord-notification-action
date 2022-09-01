const core = require('@actions/core');
const axios = require('axios');


async function doAction() {
  try {
    const message = core.getInput('message');

    const url = secrets.DISCORD_NOTIFICATION_WEBHOOK;
    await axios({ url, method: 'POST', data: message });

  } catch (error) {
    core.setFailed(error.message);
  }
}

doAction();
