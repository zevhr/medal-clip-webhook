const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');
const { Webhook, MessageBuilder } = require('discord-webhook-node');

const app = express();

app.use(bodyParser.json());
app.use(cors());

///////////////////
//   ENDPOINTS   //
///////////////////

// No-path (/) endpoint, Embed HTML Endpoint

app.get('/', (req, res) => {
    res.send(JSON.stringify({"message": "Welcome! If you're new here, check out awexxx.xyz/mcw for info on how to use this API."}))
});

app.get('/clip-check', (req, res) => { // Embed backend (sends the embed)
    const cliplink = req.query.clipLink;
    const user = req.query.medalUsername;
    const webhook = req.query.webhookURL;
    const caption = req.query.caption;
    if(cliplink) {
        const Hook = new Webhook(`${webhook}`)
        Hook.setUsername('Medal Clip Webhook')
        Hook.setAvatar('https://media.pocketgamer.biz/2019/10/100695/medal-logo-r225x.png')
        
        const embed = new MessageBuilder()
        .setTitle(`[UNOFFICIAL!] Medal Clip Webhook`)
        .setAuthor('Awex', 'https://avatars.githubusercontent.com/u/68027680?v=4')
        .setURL(`${cliplink}`)
        .setColor('#c49300')
        .setDescription(`${user} submitted a clip!\nCaption: ${caption}`)
        .setFooter('MCW')
        .setTimestamp();

        Hook.send(embed)
        Hook.send(cliplink)

        res.send(JSON.stringify({"success": "yay!", "message": "Successfully sent your clip :)"}))

    } else if (!cliplink || !user || !webhook || !caption ||  error || UnhandledPromiseRejectionWarning) {
        res.send(JSON.stringify({"error": "POST FAILED", "message": "Hey sailor! Sadly, your POST failed. Please double check you have all the fields!"}))
    }
});

app.get('/clip-check-pt', (req, res) => { // Plain-Text Checkpoint - Sends the plaintext vers message
    const cliplink = req.query.clipLink;
    const user = req.query.medalUsername;
    const webhook = req.query.webhookURL;
    const caption = req.query.caption;
    if(cliplink) {
        const Hook = new Webhook(`${webhook}`)
        Hook.setUsername('[UNOFFICIAL] Medal Clip Webhook')
        Hook.setAvatar('https://media.pocketgamer.biz/2019/10/100695/medal-logo-r225x.png')

        Hook.send(`${user} just sent a clip! Check it out; ${cliplink}\n> ${caption}`)

        res.send(JSON.stringify({"success": "yay!", "message": "Successfully sent your clip :)"}))

    } else if (!cliplink || !user || !webhook || !caption) {
        res.send(JSON.stringify({"error": "POST FAILED", "message": "Hey sailor! Sadly, your POST failed. Please double check you have all the fields!"}))
    }
});

            /////////////////////////
            //  HTTP SERVER START  //
            /////////////////////////

            const httpServer = http.createServer(app);

            httpServer.listen(80, () => {
              console.log('Done!');
            });  


