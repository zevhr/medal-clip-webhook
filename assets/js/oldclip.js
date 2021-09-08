async function findClip() {
    var offset = document.getElementById(`offset`).value;
    var cid = document.getElementById(`categoryid`).value;
    var medalid = document.getElementById(`username`).value;

    if(offset === '' || cid === '' || medalid === '') {
        return document.getElementById(`noti`).innerHTML = `<p>No value was provided for one of the fields.</p>`
    }


    var url = `https://developers.medal.tv/v1/latest?userId=${medalid}&categoryId=${cid}&limit=1&offset=${offset}`

    try {
        var data = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': 'pub_HTIQnwR16xnrkTeaDEkNhZRbgYcfjS8m' } 
        }).then(response => response.json());
        console.log(data.contentObjects[0])

        const noti = document.getElementById(`noti`);

        noti.innerHTML = `<p>Clip Title: <strong>${data.contentObjects[0].contentTitle}</strong><br><a href="${data.contentObjects[0].directClipUrl}" target="_blank">Clip Link</p>`

    }
    catch(error) {
        if(error.name === 'SyntaxError') {
            document.getElementById(`noti`).innerHTML = `<p>No clip is at offset of ${offset}. Make it shorter!</p>`
        } else {
            document.getElementById(`noti`).innerHTML = `<p>Something went wrong trying to get your clip.</p>`
        }
    }
}