<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

//DATABASE CONNECTION
$host="localhost";
$dbusername="kostastz_tzallas";
$dbpassword="16062014Kk@@";
$dbname="kostastz_test";

// Create connection
$conn = new mysqli($host,$dbusername,$dbpassword,$dbname);

// Check connection
if($conn->connect_error){
	echo "$conn->connect_error";
	die("Connection failed : ".$conn->connect_error);
  }

?>


