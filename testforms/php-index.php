<?php
//This will soon contain possible MYSQL statements to store guild id's in a database to link their servers (hopefully)
?>

<!DOCTYPE html>
<html>
<head>
  <title>Medal.tv Clip Webhook Test</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

    <h2>Test the Medal.tv Clip Webhook - developed by Awex / Notch</h2>
  <div class="container">
  <form method="POST" action="../scripts/webhook.php">
    <div><label>Discord Webhook URL</label></div>
    <div><input type="text" name="webhookURL" class="form-control" required /></div> 
    <!-- Input box names should not be changed without the variable in the init script being changed as well, otherwise it will break the script. -->
    <div><label>Medal Username</label></div>
    <div><input type="text" name="medalUsername" class="form-control" /></div>
        <div><label>Clip Link</label></div>
    <div><input type="text" name="clipLink" class="form-control" /></div><br>

      <input type="submit" value="Send" class="btn btn-primary" />

        <p><i>Note: This webhook is not directly affiliated with the Medal.tv team in any way. This was just a fun little project I picked up.</i></p>
</body>
</html>