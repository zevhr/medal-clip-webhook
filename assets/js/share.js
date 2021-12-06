async function shareOldClip() {
    const shareDiv = document.getElementById(`share-noti`)
    var discordUrl = document.getElementById(`webhook`).value;

    if(!this.clipData) {
        shareDiv.innerHTML = `<p>You need to request a clip above before trying to share a clip.</p>`
    } else {
        let validWebhook = /(https?):\/\/((?:ptb\.|canary\.)?discord(?:app)?\.com)\/api(?:\/)?(v\d{1,2})?\/webhooks\/(\d{17,19})\/([\w\-]{68})/
        if (!validWebhook.test(discordUrl)) {
            document.getElementById(`share-noti`).innerHTML = `<p>An incorrect Discord Webhook URL or Clip Link was provided.</p>`
        } else {
            var timestamp = Math.round(this.clipData.contentObjects[0].createdTimestamp / 1000)
    
            const embedData = {
                "username": "Medal Clip Webhook",
                "avatar_url": "https://miro.medium.com/fit/c/1360/1360/1*7qBUic4ynNz5XtnTe4IWAw.png",
                "content": `A user just submitted a clip via the [Medal Clip Webhook](https://github.com/awexxx/medal-clip-webhook)!`,
                "embeds": [
                    {
                        "author": {
                            "name": `${this.clipData.contentObjects[0].credits}`,
                            "url": `${this.clipData.contentObjects[0].directClipUrl}`
                        },
                        "title": `${this.clipData.contentObjects[0].contentTitle}`,
                        "color": 16776960,
                        "description": `[This clip](${this.clipData.contentObjects[0].directClipUrl}) was created on <t:${timestamp}:d>.`,
                        "image": {
                            "url": `${this.clipData.contentObjects[0].contentThumbnail}`
                        }
                    }
                ]
            }
    
            await fetch(`${discordUrl}`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(embedData)
            }).then(function(response) {    
                if(response.status === 400) {
                    document.getElementById(`share-noti`).innerHTML = `<p>Something went wrong while trying to send your clip to Discord!<br>${error.message}</p>`
                } else {
                    document.getElementById(`share-noti`).innerHTML = `<p>Success!</p>`
                }
            });
        }
    }
}

function showForm() {
    document.getElementById(`share`).style.display = `none`
    document.getElementById(`share-form`).style.display = `block`
}