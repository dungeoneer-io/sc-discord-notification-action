# sc-discord-notification-action

Github Action for sending Discord Notifications to Dungeoneer.io admins on the #the-small-council channel

## Usage
To add this Github Action to your Github workflow, "use" this repository and provide `webhook` and `message`. Example usage in a step:

```yml
name: Chirp on Commit

on:
  push:
    branches:
      - main

jobs: 
  lmbda: 
    runs-on: ubuntu-latest
    steps: 
      - name: "Send Notification"
        uses: dungeoneer-io/sc-discord-notification-action@v1.3
        with:
          webhook: "${{ secrets.DISCORD_NOTIFICATION_WEBHOOK }}"
          message: ":rocket: **dungeoneer-io/lmda-mythic-enum-scanner** lambda deployed\n```\n${{ github.event.head_commit.message }}\n```\n\n"
```

`webhook`: Provide the URL from Discord for sending a message as a bot. 
- Create a Discord Bot/Webhook with: `Integrations > Webhooks > New Webhook` then "Copy Webhook URL" once created
- Best practice would be to provide the value to your Workflow using Github Action Secrets so you don't expose the webhook to the interwebs

`message`: Provide the plain-text message to send to Discord
- It will recognize emojis like `:rocket:` for :rocket:
- Use `\n` for line breaks
- Can include variables inline with `${{ workflow_variable }}`
