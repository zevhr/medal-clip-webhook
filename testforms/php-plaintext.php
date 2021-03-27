<?php
include 'style.css';
?>

<!DOCTYPE html>
<html>
<head>
  <title>Medal.tv Clip Webhook Test</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

    <h2 style="color:white;">Test the Medal.tv Clip Webhook - developed by Awex / Notch</h2>
  <form method="POST" action="../scripts/webhook-plaintext.php"> <!-- Change this URL if it's in a different folder. ../ brings you to the folder up one level, ../../ = two etc etc -->

        <div class="panel">
    <div class="state"><br><h1 style="padding-top:20px;">Medal.tv Clip Hook</h1></div>
    <div class="form">
      <input placeholder='Webhook URL' type="text" name="webhookURL">
      <input placeholder='Medal Username' type="text" name="medalUsername">
      <input placeholder='Caption' type="text" name="caption">
      <input placeholder='Clip Link' type="text" name="clipLink">
      <button class="login">Share!</button>
    </div>
    <div class="fack"><a href="https://github.com/awexxx/medal-clip-webhook" target="_blank"><i class="fa fa-code-fork" aria-hidden="true"></i>Fork this project!</a><span style="color:white;"> -- </span><a href="php-index.php">Embed Webhook</a></div>
  </div>
</form>
</body>
</html>

 <!--<style>
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
</style>-->