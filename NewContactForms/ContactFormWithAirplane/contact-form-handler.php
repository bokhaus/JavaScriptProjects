<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'EasyTutorial';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name. \n". 
                    "user Email: $visitor_email.\n".
                    "User message: $message.\n";

    $to = "brian.bokusmc@gmail.com";

    $headers = "From: $email_from \r\n";

    $header .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
    
?>