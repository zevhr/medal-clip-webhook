// const errorDiv = document.getElementById('')
// async function findClip() {
    // var offset = document.getElementById(`offset`).value;
    // var cid = document.getElementById(`categoryid`).value;
    // var medalid = document.getElementById(`username`).value;

    // if(!offset || !cid || !medalid) {
    //     document.getElementById(`noti`).innerHTML = `<p>No value was provided for one of the fields.</p>`
    // }

//     // Find appropriate category that matches the slug
//     var data = await axios.get(`https://developers.medal.tv/v1/categories`, {
//         headers: { "Content-Type": "application/json", "authorization": `pub_HTIQnwR16xnrkTeaDEkNhZRbgYcfjS8m`}
//     })

//     var ind = data.data.findIndex(x => x.slug === cid);
//     if (ind !== -1) clipData = data.data[ind];
//     else 
//     console.log(this)

//     var url = `https://developers.medal.tv/v1/latest?userId=${medalid}&categoryId=${cid}&limit=1&offset=${offset}`

//     try {
//         data = await fetch(url, {
//             method: 'GET',
//             headers: { 'Authorization': 'pub_HTIQnwR16xnrkTeaDEkNhZRbgYcfjS8m' } 
//         }).then(response => response.json());

        // document.getElementById(`title`).innerHTML = `Clip Title: <strong>${data.contentObjects[0].contentTitle}</strong>`
        // document.getElementById(`url`).innerHTML = `<a href="${data.contentObjects[0].directClipUrl}" target="_blank">Clip Link</a>`

//     }
//     catch(error) {
//         if(error.name === 'SyntaxError') {
//             document.getElementById(`noti`).innerHTML = `<p>No clip is at offset of ${offset}. Make it shorter!</p>`
//         } else if (error.message.includes('Cannot read properties')) {
//             document.getElementById(`noti`).innerHTML = `<p>A clip at offset ${offset} in category ${cid} doesn't exist!</p>`
//         }
//     }
// }

// function showForm() {
//     document.getElementById(`share`).style.display = `none`
//     document.getElementById(`share-form`).style.display = `block`
// }

// async function shareClip() {
    // var discordUrl = document.getElementById(`webhook`).value;
    // let validWebhook = /(https?):\/\/((?:ptb\.|canary\.)?discord(?:app)?\.com)\/api(?:\/)?(v\d{1,2})?\/webhooks\/(\d{17,19})\/([\w\-]{68})/

    // if (!validWebhook.test(discordUrl)) {
    //     document.getElementById(`share-noti`).innerHTML = `<p>An incorrect Discord Webhook URL or Clip Link was provided.</p>`
    // } else {
    //     var timestamp = Math.round(data.contentObjects[0].createdTimestamp / 1000)

    //     const embedData = {
    //         "username": "Medal Clip Webhook",
    //         "avatar_url": "https://cdn.medal.tv/assets/img/new-medal-logo.png",
    //         "content": `A user just submitted a clip via the [Medal Clip Webhook](https://github.com/awexxx/medal-clip-webhook)!`,
    //         "embeds": [
    //             {
    //                 "author": {
    //                     "name": `${this.data.contentObjects[0].credits}`,
    //                     "url": `${this.data.contentObjects[0].directClipUrl}`
    //                 },
    //                 "title": `${this.data.contentObjects[0].contentTitle}`,
    //                 "color": 16776960,
    //                 "description": `[This clip](${this.data.contentObjects[0].directClipUrl}) was created on <t:${timestamp}:d>.`,
    //                 "image": {
    //                     "url": `${this.data.contentObjects[0].contentThumbnail}`
    //                 }
    //             }
    //         ]
    //     }

    //     await fetch(`${discordurl}`, {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(embedData)
    //     }).then(function(response) {
    //         console.log(response.status)

    //         if(response.status === 400) {
    //             document.getElementById(`share-noti`).innerHTML = `<p>Something went wrong while trying to send your clip to Discord!<br>${error.message}</p>`
    //         } else {
    //             document.getElementById(`share-noti`).innerHTML = `<p>Success!</p>`
    //         }
    //     });
    // }
// }

// global variables
const apiKey = `pub_HTIQnwR16xnrkTeaDEkNhZRbgYcfjS8m`
const errorDiv = document.getElementById('noti');
const clipDiv = document.getElementById('clipInfo');

async function findClip() {
    var offset = document.getElementById(`offset`).value;
    var cid = document.getElementById(`categoryid`).value;
    var medalid = document.getElementById(`username`).value;

    // basic checks
    if(!offset || !cid || !medalid) {
        document.getElementById(`noti`).innerHTML = `<p>No value was provided for one of the fields.</p>`
    } else if (cid > 1000) {
        errorDiv.innerHTML = `<p>You cannot use an offset greater than 1000.</p>`
    }

    // Find category in data by slug
    var data = await fetch(`https://developers.medal.tv/v1/categories`, {
        headers: { "Content-Type": "application/json", "authorization": apiKey}
    }).then(response => response.json());

    var index = data.findIndex(x => x.slug === cid.toLowerCase());
    if (index !== -1) categoryData = data[index]
    else errorDiv.innerHTML = `<p>Game <strong>${cid}</strong> does not exist in Medal's database.</p>`

    // Find-the-clip logic 
    try {
        clipData = await fetch(`https://developers.medal.tv/v1/latest?userId=${medalid}&categoryId=${this.categoryData.categoryId}&limit=1&offset=${offset}`, {
            headers: { "Content-Type": "application/json", "authorization": apiKey }
        }).then(response => response.json())

        if(!clipData.contentObjects[0]) {
            clipDiv.style.display = `none`;
            errorDiv.style.display = `block`;
            errorDiv.innerHTML = `<p>Sorry, there's not a clip at the ${offset} offset.</p>`
        } else {
            errorDiv.style.display = `none`;
            clipDiv.style.display = `block`
            document.getElementById(`title`).innerHTML = `Clip Title: <strong>${clipData.contentObjects[0].contentTitle}</strong>`
            document.getElementById(`url`).innerHTML = `<a href="${clipData.contentObjects[0].directClipUrl}" target="_blank">Clip Link</a>`
        }
    } catch (err) {
        clipDiv.style.display = `none`;
        errorDiv.style.display = `block`;
        errorDiv.innerHTML = `<p>Sorry, something went wrong when fetching that clip.</p>`
    }
}