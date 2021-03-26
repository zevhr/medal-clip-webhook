<?php

   $webhookURL = $_POST["webhookURL"];
   $medalUsername  =  $_POST["medalUsername"];
   $clipLink  =  $_POST["clipLink"];
   $caption = $_POST["caption"];

//Discord Webhook Message
$webhookurl = "$webhookURL";

$timestamp = date("c", strtotime("now"));

$json_data = json_encode([
    // Message
    "content" => "",
    
    // Username
    "username" => "Medal Clip Submission",

    // Avatar URL.
    // Uncoment to replace image set in webhook
    "avatar_url" => "https://media.pocketgamer.biz/2019/10/100695/medal-logo-r225x.png",

    // Text-to-speech
    "tts" => false,

    // File upload
    // "file" => "",

    // Embeds Array
    "embeds" => [
        [
            // Embed Title
            "title" => "Woah! $medalUsername just submitted a clip!",

            // Embed Type
            "type" => "rich",

            // Embed Description
            "description" => "A user has submitted a clip with the caption: $caption! 
            View it [here]($clipLink)!",

            // URL of title link
            "url" => "",

            // Timestamp of embed must be formatted as ISO8601
            "timestamp" => $timestamp,

            // Embed left border color in HEX
            "color" => hexdec( "3366ff" ),

            // Footer
            "footer" => [
                "text" => "Medal.tv Clip Webhook",
            ],

            // Image to send
            //"image" => [
              //  "url" => "https://storage.plaguecraft.xyz/web-assets/logos/pc-logo.png"
            //],

            // Thumbnail
            "thumbnail" => [
                "url" => "https://media.pocketgamer.biz/2019/10/100695/medal-logo-r225x.png"
            ],

            // Author
            "author" => [
                "name" => "Medal.tv Clip Webhook",
                "url" => "https://github.com/awexxx/medal-clip-webhook"
            ],

            // Additional Fields array
            "fields" => [
                // Field 1
               /* [
                    "name" => "Medal Username",
                    "value" => "$medalUsername",
                    "inline" => true
                ],
                // Field 2
                [
                    "name" => "Discord",
                    "value" => "$clipLink",
                    "inline" => true
                ] */
                // Etc..
            ]
        ]
    ]

], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );


$ch = curl_init( $webhookurl );
curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );
// If you need to debug, or find out why you can't send message uncomment line below, and execute script.
// echo $response;
curl_close( $ch );
@hungaryck

?>

<!DOCTYPE html>
<html>
<head>
  <title>Medal.tv Clip Webhook Test</title>
</head>
<body>

<h2>Your clip test has been sent!</h2>
  <p>Check your server where you had the webhook created!<br>
    <a href="#" onclick="history.back()">Back</a></p>
    <p><a href="<?php echo $clipLink ?>">View the clip you shared here!</a></p>
</body>
</html>

  <style>
/*Universal*/

#logo{
  float:center;
}

hr{
  width:100px;
  border-color:black;

}

.center {
  display:block;
  margin:0 auto;
  margin-left: auto;
  margin-right: auto;
  width:20%;
  padding-top:20px;
}

#center {
  display:block;
  margin:0 auto;
  margin-left: auto;
  margin-right: auto;
  width:30%;
}

body{
  background-color:#e0e0e0;
  text-align:center;
  padding-top:150px;
}

  h1{
    text-align:center;
    color:#6b6b6b;
  }

  h2{
    text-align:center;
    color:#6b6b6b;
  }

  h3{
    text-align:center;
    color:#6b6b6b;
  }

  i{
    font-size:20px;
  }

  body p{
  text-align:center;
  color:#6b6b6b;
  font-size:20px;
}

a{
  color:black;
}

a:hover{
  color:white;
}

/*Home*/
#welcome{
  background-color:#474747;
  padding-top:20px;
  padding-bottom:15px;
}

#welcome h2{
  color:#c2c2c2;
}

#welcome p{
  color:#c2c2c2;
}

/*Socials Color Changing*/
#medal a{
  color:orange;
  text-decoration:none;
  font-size:28px;
  padding-right:15px;
  text-align:center;
}

#medal a:hover{
  color:white;
}

#twitter a{
  color:#467175;
  text-decoration:none;
  font-size:28px;
  padding-right:15px;
  padding-bottom:20px;
  text-align:center;
}

#twitter a:hover{
  color:white;
}

/*Navbar Attributes*/
#navbar{
  background-color:#e0e0e0;
  color:#333;
}

#navbar ul{
  padding:0px;
  list-style:none;
  text-align:center;
}

#navbar li{
  display:inline;
  text-align:center;
}

#navbar a{
  color:#333;
  text-decoration:none;
  font-size:18px;
  padding-right:15px;
  text-align:center;
}


/*Footer Attributes*/
.footer-p{
  color:white;
}
.footer-basic {
  padding:40px 0;
  background-color:#bfbfbf;
  color:#4b4c4d;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:black;
  margin-bottom:0;
}
</style>