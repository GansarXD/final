<?php
    if(isset($_GET['username'])){
        $username = $_GET['username'];
        $password = $_GET['password'];
        if(!empty($username)){
            echo $username;
            echo $password;
            $db = mysql_connect("localhost","root","");
            mysql_select_db("user",$db);
            $result = mysql_query("SELECT * FROM user WHERE username='$username'",$db) or die(mysql_error());
            $myrow = mysql_fetch_array($result);
            if(empty($myrow['password'])){
                exit ("FALSE:this is user unregistr");
            }
            else {
                if ($myrow['password']==$password) {
                    echo "true";
                }
                else{
                    echo "false";
                }
            }
        }
    }
?>