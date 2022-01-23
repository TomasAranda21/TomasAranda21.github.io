<?php


error_reporting(0);
header('Content-type: application/json; charset=utf-8');


$nombre = htmlspecialchars($_POST['nombre']);
$email = htmlspecialchars($_POST['email']);
$mensaje = htmlspecialchars($_POST['mensaje']);

filter_var($nombre, FILTER_SANITIZE_STRING);
filter_var($email, FILTER_VALIDATE_EMAIL);
filter_var($mensaje, FILTER_SANITIZE_STRING);

// $nombre = $_POST['nombre'];

echo "Tu nombre es: $nombre";


$destinatario = 'tomasaranda17@gmail.com';
$asunto = 'Contacto desde mi web';

$carta = "De: $nombre \n";
$carta .= "Correo: $email \n";
$carta .= "Mensaje: $mensaje \n";

// mail($destinatario, $asunto, $carta);
// Enviar mensaje
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(!empty($nombre) && !empty($email) && !empty($mensaje)){
        
        $mail = mail($destinatario, $asunto, $carta); 
        if($mail){
        }
    }
}



?>

