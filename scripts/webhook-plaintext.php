<?php

   $webhookURL = $_POST["webhookURL"];
   $clipLink = $_POST["clipLink"];
   $clipCaption = $_POST["caption"];
   $medalUsername  =  $_POST["medalUsername"];

//Discord Webhook Message
$webhookurl = "$webhookURL";

$timestamp = date("c", strtotime("now"));

$json_data = json_encode([
    // Message
    "content" => "Woah! $medalUsername just submitted a clip! Check it out!
:speech_left: $clipCaption
$clipLink",
    
    // Username
    "username" => "Medal Clip Submission",

    // Avatar URL.
    // Uncoment to replace image set in webhook
    "avatar_url" => "https://media.pocketgamer.biz/2019/10/100695/medal-logo-r225x.png",

    // Text-to-speech
    "tts" => false,

    // File upload
    // "file" => "",

], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );


$ch = curl_init( $webhookurl );
curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );
// If you need to debug, or find out why you can't send messages, uncomment the line below, and execute tge script.
// echo $response;
//curl_close( $ch );

?>

<style>
<?php include '../assets/css/main.css' ?>
</style>
<!DOCTYPE html>
<html>
<head>
  <title>Medal.tv Clip Webhook Test</title>
    <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->  
  <link rel="icon" type="image/png" href="../assets/images/icons/favicon.ico"/>
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../assets/vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../assets/fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../assets/vendor/animate/animate.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="../assets/vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../assets/vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../assets/vendor/select2/select2.min.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="../assets/vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="../assets/css/util.css">
  <link rel="stylesheet" type="text/css" href="../assets/css/css/main.css">
<!--===============================================================================================-->
</head>
<body>
        <div class="limiter">
    <div class="container-login100" style="background-image: url('../assets/images/bg-02.jpg');">
      <div class="wrap-login100" style="text-align:center;">
        <h2>You did it!</h2>
        <br /><p style="color:black; font-size:20px;">You shared a clip to a server! Poggers!<br />
        Check the server for <a style="color:white;" href="<?php echo $clipLink ?>">the clip you shared ;)</a></p>
        <p><a style="color:white; font-size:20px;" href="#" onclick="history.back()">Head Back</a></p>

        <hr>

        <p style="color:black;"><i>Have problems? <a href="https://github.com/awexxx/medal-clip-webhook/issues">Open an issue!</i></p>
        <p style="color:black;"><i><a href="https://github.com/awexxx/medal-clip-webhook">Fork this project!</a></p>

      </div>
    </div>
  </div>
</body>
</html>

<style type="text/css">
  a{
    color:white;
  }

  a:hover{
    color:black;
  }

  hr{
    border-color:white;
  }
</style>
