<?php

    try {
        $conn = new PDO('mysql:host=localhost;dbname=formulario', 'root', '');
        
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }


?>