<?php
   
   $webhookURL = $_POST["webhookURL"];
   $medalUsername  =  $_POST["medalUsername"];
   $clipLink  =  $_POST["clipLink"];

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
            "description" => "A user has submitted a clip! View it [here]($clipLink)!",

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
    <meta http-equiv="refresh" content="0;url=../testforms/sent.html" />
</head>
<body>

</body>
</html>
