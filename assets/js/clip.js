async function sendClip() {
    var username = document.getElementById(`username`)
    var cliplink = document.getElementById(`cliplink`)   
    var caption = document.getElementById(`caption`)   
    var discordurl = document.getElementById(`discordurl`)      

    if(username.value === '' || cliplink.value === '' || caption.value === '' || discordurl.value === '') {
        document.getElementById(`noti`).innerHTML = `<p>No value was provided for one of the fields.</p>`
    } else if (!discordurl.value.toLowerCase().startsWith(`https://discord.com/api/webhooks`) || !cliplink.value.toLowerCase().startsWith(`https://medal.tv/clips/`)) {
        document.getElementById(`noti`).innerHTML = `<p>An incorrect URL for either Discord Webhook URL or the Clip Link was provided.</p>`
    } else {

        const url = `https://developers.medal.tv/v1/search?text=${caption.value}&limit=1`

        const medal = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': "pub_HTIQnwR16xnrkTeaDEkNhZRbgYcfjS8m" }
        }).then(response => response.json())

        var timestamp = Math.round(medal.contentObjects[0].createdTimestamp / 1000)

        const embedData = {
            "username": "Medal Clip Webhook",
            "avatar_url": "https://miro.medium.com/fit/c/1360/1360/1*7qBUic4ynNz5XtnTe4IWAw.png",
            "content": `**${username.value}** just submitted a clip via the Medal Clip Webhook!`,
            "embeds": [
                {
                    "author": {
                        "name": `Credits to ${username.value} on Medal.tv`,
                        "url": `https://medal.tv/${username.value}`
                    },
                    "title": `${caption.value}`,
                    "color": 16776960,
                    "description": `[This clip](${cliplink.value}) was created on <t:${timestamp}:d> by [${username.value}](https://medal.tv/${username.value}).`,
                    "image": {
                        "url": `${medal.contentObjects[0].contentThumbnail}`
                    }
                }
            ]
        }

        try {
            await fetch(`${discordurl.value}`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(embedData)
            })

            document.getElementById(`noti`).innerHTML = `<p>Success!</p>`
        }
        catch(error) {
            document.getElementById(`noti`).innerHTML = `<p>Something went wrong while trying to send your clip to Discord!<br>${error.message}</p>`
            console.log(error)
        }
    }
}