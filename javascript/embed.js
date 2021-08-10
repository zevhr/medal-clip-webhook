async function postEmbed() {
    const link = document.getElementById("cliplink").value
    console.log('Link:', link)
    const webhook = document.getElementById("webhookURL").value
    console.log('Webhook:', webhook)
    const caption = document.getElementById("caption").value
    console.log('Caption:', caption)
    const username = document.getElementById("medalUsername").value
    console.log('Username:', username)

    const data = {
        "clipLink": `${link}`,
        "webhook": `${webhook}`,
        "caption": `${caption}`,
        "username": `${medalUsername}`
    }

    console.log(data)

    const data = await fetch(`https://api.awexxx.xyz/tools/mcw/clip`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    window.location.replace("https://mcw.awexxx.xyz/success");

    console.log(response);
}