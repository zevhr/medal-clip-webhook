# An extra Medal webhook for Server Owners
This webhook (developed in PHP) will allow users to submit their clips to a server if the server owner adds the webhook to their server.
This can be especially useful to server owners who just want a quick way to allow their users to share clips.
# A disclaimer..
This is just a project I've made out of boredom. [MedalBot](https://medal.tv/medalbot) is obviously the better choice, however this webhook will be for server owners who just want a way for users to submit their clips, and nothing else (and/or if MedalBot doesn't work lmfao).
--
This script is not made to discourage your use of the MedalBot system OR Medal as a whole. I still recommend downloading [the Medal app](https://medal.tv/) for the best experience.

# Now, how do I use this??? (V1)
A Simple Explanation: You can head on over to [my Project site](https://site.plaguecraft.xyz/projects/medalclipwebhook/index.html), input your clip link & server owner-provided webhook link, and it'll be good to go!

A more detailed explanation (for server owners): You'll need a Discord server (obviously), and a Discord channel you'd like all clips to go to.
Head into the settings of that channel and click on the **Integrations** tab. 
![Discord Integrations](https://github.com/awexxx/medal-clip-webhook/blob/main/images/discord-integration-settings.png)

Then, click on **Webhooks** and **New Webhook**. You can name this whatever you'd like (it will not be the final name). 
![Discord Webhook Creation](https://github.com/awexxx/medal-clip-webhook/blob/main/images/create-webhook.png)

All you'll need is the webhook link. 
![Discord Webhook Creation](https://github.com/awexxx/medal-clip-webhook/blob/main/images/copy-webhk-url.png)

Copy that, head over to [my Project site](https://site.plaguecraft.xyz/projects/medalclipwebhook/index.html) and paste it into the Webhook Link box, along with the rest of the information, and you're good to go!

**Eventually** - I want this to have the ability to store Guild IDs in a database with their webhook links. However, atm, this is only a page that can trigger a webhook POST request.
