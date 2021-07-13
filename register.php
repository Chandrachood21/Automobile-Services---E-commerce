<?php 
   
   $connection = mysqli_connect('localhost', 'root', '') or die("Unable to connect");
   $db = mysqli_select_db($connection, 'WTProject') or die("Unable to connect the database"); 
   $name = $_POST['name'];
   $email = $_POST['email'];
   $pwd = $_POST['password'];
   $sql = "INSERT INTO WTLogin (Name, Email, Password) VALUES ('$name','$email', '$pwd')";
   $rs = mysqli_query($connection, $sql);
   if($rs)
      {
         echo "<script>alert('Registered Successfully, Redirect back to Sign In Page');
               window.location='frontpage.html';</script>";
         /*$referer = $_SERVER['HTTP_REFERER'];
         header("Location: $referer");*/
      }
   /*$referer = $_SERVER['HTTP_REFERER'];
   header("Location: $referer");*/
   
?>