<?php

function thankyou($buffer) {
// buffer the call to the Thank You message
return ("<hr><p>&nbsp;</p><h2>Thank You for your interest in the Defiance County Genealogical Society! You will be receiving an email shortly, confirming receipt of your question/suggestion.</h2> <hr> <h2>Return to <a href=\"http://www.defiancecountygenealogy.org/index.html\">Home Page</a></h2> <p>&nbsp;</p> <h2>Return to <a href=\"http://www.defiancecountygenealogy.org/contactus.php\">Contact Us</a></h2>");
}

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<!-- DW6 -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Contact Us</title>
<link rel="stylesheet" href="2col_leftNav.css" type="text/css">
<style type="text/css">
<!--style1 {color: #333333}-->
</style>
</head>
<!-- The structure of this file is exactly the same as 2col_rightNav.html;
     the only difference between the two is the stylesheet they use -->
<body> 
<div id="masthead"> 
  <h1 id="siteName"><img src="images/masthead.png" alt="Defiance County" width="701" height="60" longdesc="http://defiancecountygenealogy.com"></h1> 
</div> 
<!-- end masthead --> 
<div id="content"> 
  <h2 id="pageName">Defiance County Genealogical Society Contact Form</h2> 
  <div class="feature">
    <p> 
    Please use this form to contact us for information or to offer suggestions or comments.
    </p> 
  </div> 
  <div class="story"> 
<H1>Contact Us</H1>
              <p>
<?php # contact_us.php

if (isset($_POST['submit'])) { // Handle the form.

	$message = NULL;
	
	// Check for a name.
	if (strlen($_POST['name']) > 0) {
		$na = TRUE;
	} else {
		$na = FALSE;
		$message .= '<p>You forgot to enter your name!</p>';
	}
	
	// Check for spam, which often uses full email address in the name field
	if ( strstr( $_POST['name'], "@" ) ) {
		$na = FALSE;
	}
	
	// Check for an email address.
	if (strlen($_POST['email']) > 0) {
		$em = TRUE;
	} else {
		$em = FALSE;
		$message .= '<p>You forgot to enter your email address!</p>';
	}

	// Check for an street address.
	if (strlen($_POST['street1']) > 0 && ($_POST['street1'] == 'FAMILY')) {
		$str = TRUE;
	} else {
		$str = FALSE;
		$message .= '<p>You forgot to enter the secret word!</p>';
	}
	

	if ($na && $em && $str) { // If everything's okay, send the information to the requester and to Jim Rebar.

		// Send an email
		$body = "Thank you for your interest in the Defiance County Genealogical Society!\n\nThe following information applies to your email:\n\nName: {$_POST['name']}\nEmail address: {$_POST['email']}\nCompany name: {$_POST['company']}\nStreet address: {$_POST['street']}\nStreet Address 1: {$_POST['street1']}\nCity: {$_POST['city']}\nState:  {$_POST['state']}\nZip Code: {$_POST['zip']}\nPhone: {$_POST['phone']}\nFax:  {$_POST['fax']}\nMessage: {$_POST['textfield']}";
		$whoto = $_POST['email'];
		mail ( $whoto, "Thank you for your interest!", $body, "From: defiancegenealogy2002@yahoo.com\nX-Mailer: PHP/" . phpversion());
		mail ( "defiancegenealogy2002@yahoo.com", "Response Sent to Contact", $body, "From: defiancegenealogy2002@yahoo.com\nX-Mailer: PHP/" . phpversion());
		ob_start("thankyou");
		ob_end_flush();
		exit();		
	} else {
		$message .= '<p>Please fill in the missing information below and re-submit.</p>';		
	}
}

// Set the page title and include the HTML header.
$page_title = 'Contact Form';

// Print the error message if there is one.
if (isset($message)) {
	echo '<font color="red">', $message, '</font>';
}
?>

<form action="<?php echo $_SERVER['../hosting/PHP_SELF']; ?>" method="post">
<table border="0" cellspacing="0" cellpadding="5" align="center">
	<tr>
	<td width="587">
<fieldset>
        <legend class="style1"><font face="Arial, Helvetica, sans-serif">Enter your information 
        in the form below (items marked <font color="#FF0000">in red</font> are 
        required):</font></legend>
        <span class="style1"><br>
        </span>
        <table border="0" style="border-collapse: collapse" cellpadding="2" width="573">
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Name:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #f64e4e; float:left" name="name" size="30" maxlength="40" value="<?php if (isset ($_POST['name'])) echo $_POST['name']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Email 
              Address:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #f64e4e; float:left" name="email" size="40" maxlength="60" value="<?php if (isset ($_POST['email'])) echo $_POST['email']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Company:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #ccccff; float:left" name="company" size="30" maxlength="40" value="<?php if (isset ($_POST['company'])) echo $_POST['company']; ?>" />
</tr>
<tr>	
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Street Addr:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #ccccff; float:left" name="street" size="30" maxlength="40" value="<?php if (isset ($_POST['street'])) echo $_POST['street']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Secret Word:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #f64e4e; float:left" name="street1" size="30" maxlength="40" value="<?php if (isset ($_POST['street1'])) echo $_POST['street1']; ?>" />
You must type the word FAMILY here.
</tr>
<tr></tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">City:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #ccccff; float:left" name="city" size="20" maxlength="40" value="<?php if (isset ($_POST['city'])) echo $_POST['city']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">State:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #ccccff; float:left" name="state" size="3" maxlength="40" value="<?php if (isset ($_POST['state'])) echo $_POST['state']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Zip Code:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #ccccff; float:left" name="zip" size="12" maxlength="40" value="<?php if (isset ($_POST['zip'])) echo $_POST['zip']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Phone number:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #ccccff; float:left" name="phone" size="15" maxlength="40" value="<?php if (isset ($_POST['phone'])) echo $_POST['phone']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Fax:</font></td>
            <td width="468" align="right" class="style1">
<input type="text" style="border: 1px solid #ccccff; float:left" name="fax" size="15" maxlength="40" value="<?php if (isset ($_POST['fax'])) echo $_POST['fax']; ?>" />
</tr>
<tr>
            <td width="91" class="style1"><font face="Arial, Helvetica, sans-serif">Message:</font></td>
            <td width="468" align="left" class="style1"> 
          <textarea name="textfield" style="border: 1px solid #f64e4e";cols="35" rows="6"></textarea></td>
</tr>

</table>
<div align="center"><input type="submit" name="submit" value="Submit Information" /></div>
</fieldset>
</td>
</tr>
</table>
</form><!-- End of Form -->
<?php
//	ob_end_flush();
?>
    <p> 
    </p> 
  </div>
</div> 
<!--end content --> 
<div id="navBar"> 
  <div id="search"> 
    <form action="sphider/search.php" method="get">
    <label>search</label> 
	<input type="text" name="query" maxlength="255"/ size="15">
	<input type="hidden" name="search" value="1"/>
	<input type="submit" value="Go"/>
</form>
  </div> 
  <div id="sectionLinks"> 
    <ul> 
      <li><a href="index.html">Home</a></li> 
      <li><a href="research.html">Research Aids</a></li>
      <li><a href="newsletter.html">Newsletter</a></li>
      <li><a href="programs.html">Programs</a></li>
      <li><a href="pubs.html">Publications</a></li> 
      <li><a href="photos.html">Photo Gallery</a></li> 
      <li><a href="schools.html">Schools & Businesses</a></li> 
      <li><a href="newspaper.html">Newspaper Excerpts</a></li> 
      <li><a href="military.html">Military</a></li>
      <li><a href="churches.html">Churches</a></li>
      <li><a href="cemeteries.html">Cemeteries</a></li>
      <li><a href="historical.html">Defiance County History</a></li>
      <li><!--<a href="mailto:defiancegenealogy2002@yahoo.com">Contact Us</a>--><a href="contactus.php">Contact Us</a></li> 
    </ul> 
  </div> 
  
  <div class="relatedLinks">
  <h3>Administrative</h3>
  <ul>
      <li><a href="about.html">About Us</a></li> 
      <li><a href="history.html">Our History</a></li> 
      <li><a href="board.html">Board/Committees</a></li> 
      <li><a href="bylaws.html">By-Laws</a></li>
      <li><a href="charts.html">Charts and Forms</a></li>
      <li><a href="join.html">Join Our Society</a></li>
      <li><a href="lost.html">Lost and Found</a></li> 
      <li><a href="queries.html">Queries</a></li> 
      <li><a href="volunteer.html">Volunteering</a></li> 
  </ul>
  </div>
  <div class="relatedLinks"> 
    <h3>Genealogical Links</h3> 
    <ul> 
      <li><a href="http://www.ogs.org/">Ohio Genealogical Society</a></li> 
      <li><a href="http://www.bgsu.edu/colleges/library/cac/">Center Archival Collections</a></li> 
      <li><a href="http://www.familysearch.com">Family History Library</a></li> 
      <li><a href="http://www.acpl.lib.in.us/genealogy/">Allen Co. (IN) Library</a></li> 
      <li><a href="http://www.defiance.lib.oh.us/">Defiance County Library</a></li> 
	  <li><a href="http://www.defiance-county.com/">Defiance County</a></li>
	  <li><a href="links.html">Other Links</a></li>
    </ul> 
  </div> 
  <div id="advert"> 
    <p align="center">&nbsp;</p>
  </div> 
</div> 
<!--end navbar --> 
<div id="siteInfo"> 
  <img src="images/courthouse_sm1.jpg" width="40" height="27">  | <a href="contactus.html">Contact Us</a> | <a href="mission.html">Mission</a> | <a href="history.html">History</a> | <span class="style1">&copy;2011
  Defiance County Chapter of OGS</span></div> 
<br> 
</body>
</html>
