<?php
    require 'assets/db/db.php';

    if (isset($_POST['enviar'])){
        $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $mensaje = filter_var($_POST['mensaje'], FILTER_SANITIZE_STRING);

        if (!empty($nombre) && !empty($email)){
           
            // $sql = "INSERT INTO datos_usuarios (nombre, email,mensaje) VALUES (:nombre, :email, :mensaje)";
            // $stmt = $conn->prepare($sql);
            // $stmt->bindParam(':nombre', $nombre);
            // $stmt->bindParam(':email', $email);
            // $stmt->bindParam(':mensaje', $mensaje);
            // $stmt->execute();
            $destino = 'tomasaranda17@gmail.com';
            $desde = "Correo enviado desde Formulario_prueba";
            $Mensaje_preparado = "De: $nombre \n";
            $Mensaje_preparado .= "Correo: $email \n";
            $Mensaje_preparado .= "Mensaje: $mensaje";
            
            $mail = mail($destino,$desde, $Mensaje_preparado);

            if ($mail){
                echo '<h4>Enviado exitosamente</h4>';
            }

        }else{
          
        }





    }










?>