async function findClip() {
    var offset = document.getElementById(`offset`).value;
    var cid = document.getElementById(`categoryid`).value;
    var medalid = document.getElementById(`username`).value;

    if(offset === '' || cid === '' || medalid === '') {
        document.getElementById(`noti`).innerHTML = `<p>No value was provided for one of the fields.</p>`
    }

    var url = `https://developers.medal.tv/v1/latest?userId=${medalid}&categoryId=${cid}&limit=1&offset=${offset}`

    try {
        data = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': 'pub_HTIQnwR16xnrkTeaDEkNhZRbgYcfjS8m' } 
        }).then(response => response.json());

        document.getElementById(`title`).innerHTML = `Clip Title: <strong>${data.contentObjects[0].contentTitle}</strong>`
        document.getElementById(`url`).innerHTML = `<a href="${data.contentObjects[0].directClipUrl}" target="_blank">Clip Link</a>`

    }
    catch(error) {
        if(error.name === 'SyntaxError') {
            document.getElementById(`noti`).innerHTML = `<p>No clip is at offset of ${offset}. Make it shorter!</p>`
        } else if (error.message.includes('Cannot read properties')) {
            document.getElementById(`noti`).innerHTML = `<p>A clip at offset ${offset} in category ${cid} doesn't exist!</p>`
        }
    }
}

function showForm() {
    document.getElementById(`share`).style.display = `none`
    document.getElementById(`share-form`).style.display = `block`
}

async function shareClip() {
    var discordurl = document.getElementById(`webhook`).value;

    if (!discordurl.toLowerCase().startsWith(`https://discord.com/api/webhooks`)) {
        document.getElementById(`share-noti`).innerHTML = `<p>An incorrect URL for either Discord Webhook URL or the Clip Link was provided.</p>`
    } else {
        var timestamp = Math.round(data.contentObjects[0].createdTimestamp / 1000)

        const embedData = {
            "username": "Medal Clip Webhook",
            "avatar_url": "https://cdn.medal.tv/assets/img/new-medal-logo.png",
            "content": `A user just submitted a clip via the [Medal Clip Webhook](https://github.com/awexxx/medal-clip-webhook)!`,
            "embeds": [
                {
                    "author": {
                        "name": `${this.data.contentObjects[0].credits}`,
                        "url": `${this.data.contentObjects[0].directClipUrl}`
                    },
                    "title": `${this.data.contentObjects[0].contentTitle}`,
                    "color": 16776960,
                    "description": `[This clip](${this.data.contentObjects[0].directClipUrl}) was created on <t:${timestamp}:d>.`,
                    "image": {
                        "url": `${this.data.contentObjects[0].contentThumbnail}`
                    }
                }
            ]
        }

        await fetch(`${discordurl}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(embedData)
        }).then(function(response) {
            console.log(response.status)

            if(response.status === 400) {
                document.getElementById(`share-noti`).innerHTML = `<p>Something went wrong while trying to send your clip to Discord!<br>${error.message}</p>`
            } else {
                document.getElementById(`share-noti`).innerHTML = `<p>Success!</p>`
            }
        });
    }
}