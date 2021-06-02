function checkparam() {
    const params = new URLSearchParams(window.location.search)
    // console.log(params) Only uncomment this for testing purposes.

    if (params.get('status') === 'success') {
        document.querySelector("#notification").innerHTML = "<br><h3>Hey sailor!</h3><br><p>Dropping in to let you know that you've been redirected here from a site that doesn't have an active domain on it.<br>If you have any questions, hit the big white <strong>Contact</strong> button on the top!<hr>"
    }
}