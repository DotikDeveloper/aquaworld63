<?php
$_POST = json_decode(file_get_contents("php://input"), true);

$method = $_SERVER['REQUEST_METHOD'];
$c = true;

$admin_email  = trim($_POST["admin_email"]);
$email = trim($_POST["email"]);
$form_subject = trim($_POST["form_subject"]);
$message = trim($_POST["message"]);
$name = trim($_POST["name"]);
$project_name = trim($_POST["project_name"]);
$subject = trim($_POST["subject"]);
$tel = trim($_POST["tel"]);

//  foreach ( $_POST as $key => $value ) {
//    if ( is_array($value) ) {
//      $value = implode(", ", $value);
//    }
//    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
//      $message .= "
//      " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
//        <td style='padding: 10px; border: #e2dddd 1px solid;'><b>$key</b></td>
//        <td style='padding: 10px; border: #e2dddd 1px solid;'>$value</td>
//      </tr>
//      ";
//    }
//  }

//  $message = "<table style='width: 100%;'>$message</table>";
$message = "Тип формы: $form_subject" . PHP_EOL .
	"Тема: $subject" . PHP_EOL .
	"Имя: $name" . PHP_EOL .
	"email: $email" . PHP_EOL .
	"Телефон: $tel" . PHP_EOL .
	"Сообщение: $message" . PHP_EOL;


function adopt($text)
{
	return '=?UTF-8?B?' . Base64_encode($text) . '?=';
}

$project = adopt($project_name);

$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	"From: $project <$admin_email>" . PHP_EOL .
	"Reply-To: $admin_email" . PHP_EOL;

if (mail($admin_email, adopt($form_subject), $message, $headers)) {
	http_response_code(200);
	echo "Данные отправлены.";
} else {
	http_response_code(400);
	echo "Ошибка. Данные не отправлены.";
};

  // $content    = "Получен новый запрос на обратный звонок с сайта $url \n Имя: $name \n Email: $email \n Телефон: $email \n Сообщение: $message";
  // $recipient  = "dotikdeveloper@gmail.com";

  // $mailheader = array(
  //   'From' => $email,
  //   'Content-Type' => 'text/html;charset=UTF-8',
  // );
  // mail($recipient, $subject, $content, $mailheader) or die("Error!");
  // $response =  json_encode(array(
  //   'message' => 'Мы получили ваш запрос и в ближайшее время с вами свяжемся',
  //   'code' => 1
  // ));
  // die($response);
