<?php
if(isset($_POST['submit'])) {

	$to = "brian.bokusmc@gmail.com"; 
	$subject = "Inquiry Form";
	$name_field = $_POST['name'];
	$email_field = $_POST['email'];
	$company = $_POST['company'];
    $street = $_POST['street'];
    $street1 = $_POST['street1'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $phone = $_POST['phone'];
    $fax = $_POST['fax'];
    $textfield = $_POST['textfield'];
    

	foreach($_POST['check'] as $value) {
		$check_msg .= "Checked: $value\n";
	}
	
    $body = 
    "From: $name_field\n 
    E-Mail: $email_field\n $check_msg 
    Subject: $subject\n 
    Name: $name_field\n 
    Company:\n $company\n
    Street:\n $street\n
    Street1:\n $street1\n
    City:\n $city\n
    State:\n $state\n
    Zip:\n $state\n
    Phone:\n $phone\n
    Fax:\n $fax\n
    Message:\n $textfield\n";

	echo "Data has been submitted to $to!";
    mail($to, $subject, $body);
    //done. redirect to thank-you page.
    header('Location: thank-you.html');

} else {
	echo "Form Failed Submission";
}
?>