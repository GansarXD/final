<?php
	$login = "asd";
	$pass = "123";

	$login1 = $_GET["login"];
	$pass1 = $_GET["password"];

	if($login1 == $login && $pass1 == $pass){
		echo "true";
	}
	else
		echo "false";	
?>