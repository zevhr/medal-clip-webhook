function valid(url) {  
    var p = /^(?:http?:\/\/)?(?:www\.)? (?:medal.tv\/)?$/;   
    return (url.match(p)) ? RegExp.$1 : false;   
    }