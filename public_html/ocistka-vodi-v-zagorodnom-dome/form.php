<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

// validation
$errors = array();
if(empty($name))
{
    $errors[] = 'Имя обязательно к заполнению';
}
if(empty($phone))
{
    $errors[] = 'Телефон обязателен к заполнению';
}

$result = array();

if(count($errors) > 0)
{
    $result['status'] = 'error';
    $result['errors'] = $errors;
}
else
{
    $emailsToSend = array(
        'info@aquaworld63.ru'
		//'delightalmighty@gmail.com'
    );

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

    $subject = '';

    $emailCode = "Имя: $name, Телефон: $phone";
    $subject = 'Просьба перезвонить с сайта';

    foreach($emailsToSend as $emailToSend)
    {
        mail($emailToSend, $subject, $emailCode, $headers);
    }

    $result['status'] = 'success';
    $result['message'] = 'Спасибо за ваше сообщение!<br>Мы перезвоним Вам в ближайшее время.';
}

header('Content-type: application/json');
echo json_encode($result);