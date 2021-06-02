const request = new XMLHttpRequest();

async function postEmbed() {
    const link = document.getElementById("cliplink").value
    console.log('Link:', link)
    const webhook = document.getElementById("webhookURL").value
    console.log('Webhook:', webhook)
    const caption = document.getElementById("caption").value
    console.log('Caption:', caption)
    const username = document.getElementById("medalUsername").value
    console.log('Username:', username)

    const { response } = await fetch(`http://localhost/clip-check?clipLink=${link}&webhookURL=${webhook}&medalUsername=${username}&caption=${caption}`).then(response => response.json());

    window.location.replace("public/success.html");
}