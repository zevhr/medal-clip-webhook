<?php
   
   $webhookURL = $_POST["webhookURL"];
   $medalUsername  =  $_POST["medalUsername"];
   $clipLink  =  $_POST["clipLink"];

	require 'webhook-send.php';
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="refresh" content="0;url=../testforms/sent.html" />
</head>
<body>

</body>
</html>
