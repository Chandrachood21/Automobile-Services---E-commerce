<?php 
   
   $connection = mysqli_connect('localhost', 'root', '') or die("Unable to connect");
   $db = mysqli_select_db($connection, 'WTProject') or die("Unable to connect the database"); 
   $name = $_POST['name'];
   $email = $_POST['email'];
   $pwd = $_POST['password'];
   $checkexists = "SELECT Name, Email from WTLogin where Email='$email'";
   $checkres = mysqli_query($connection, $checkexists);
   if(mysqli_num_rows($checkres)>0)
   {
      echo "<script>alert('Already a registered user, Please Login');
               window.location='frontpage.html';</script>";
   }
   else
   {
   $sql = "INSERT INTO WTLogin (Name, Email, Password) VALUES ('$name','$email', '$pwd')";
   $rs = mysqli_query($connection, $sql);
   if($rs)
      {
         echo "<script>alert('Registered Successfully, Redirect back to Sign In Page');
               window.location='frontpage.html';</script>";
      }
   }

?>