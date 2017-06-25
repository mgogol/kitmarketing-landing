<?php
	if($_POST)
	    {
	    // To whom send mail?
	    $to = "m.gogol.dev@gmail.com";

	    // From who?
	    $from = 'kitmarketing@gmail.com';

	    // Subject of mail
	    $subject = "Новий клієнт з Kit Marketing"; 

	    // Message in email
	    $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['phone'].';'.' E-mail: '.$_POST['email'].';';

	    // Headers
	    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
	    $headers .= "From: <kitmarketing@no-reply.com>\r\n";
	    $result = mail($to, $subject, $message, $headers);
	}
?>