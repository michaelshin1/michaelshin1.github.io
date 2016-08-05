<?php
    $field_name = $_POST['name'];
    $field_contact = $_POST['contact'];
    $field_message = $_POST['message'];
    
    $mail_to = 'madmichael93@yahoo.com';
    $subject = 'Message from a site visitor '.$field_name;
    
    $body_message = 'From: '.$field_name."\n";
    $body_message .= 'E-mail: '.$field_contact."\n";
    $body_message .= 'Message: '.$field_message;
    
    $headers = 'From: '.$field_contact."\r\n";
    $headers .= 'Reply-To: '.$field_contact."\r\n";
    
    $mail_status = mail($mail_to, $subject, $body_message, $headers);
    
    if ($mail_status) { ?>
    	<script language="javascript" type="text/javascript">
    		alert('Thank you for the message. We will contact you shortly.');
    		window.location = 'contact.html';
    	</script>
    <?php
    }
    else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed.');
		window.location = 'contact.html';
	</script>
    <?php
    }
?>