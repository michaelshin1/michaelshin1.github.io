<?php $name = $_POST['name'];
    $contact = $_POST['contact'];
    $message = $_POST['message'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "madmichael93@yahoo.com";
    $subject = "Contact Form";
    $mailheader = "From: $contact \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";
?>