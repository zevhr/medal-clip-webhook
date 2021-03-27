var i = 1;
setInterval(function() { 
    e = document.getElementById('container-login100');
    switch (i) {
        case 0:
            e.style.backgroundPosition = 'center top, center top, center top';
            break;
        case 1:
            e.style.backgroundPosition = window.innerWidth + 'px top, center top, center top';
            break;
        case 2:
            e.style.backgroundPosition = window.innerWidth + 'px top, ' + window.innerWidth + 'px top, center top';
            break;
    }
    i++;    
    if (i > 2) i = 0;   
}, 3000);