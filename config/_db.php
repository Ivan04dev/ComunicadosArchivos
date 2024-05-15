<?php
    // Datos de conexión a la base de datos
    $host = "127.0.0.1";
    $usuario = "root";
    $password = "root"; 
    $base_datos = "comunicados"; 

    // Crear una conexión a la base de datos
    $conn = new mysqli($host, $usuario, $password, $base_datos);

    // Verificar la conexión
    if ($conn->connect_error) {
        die("Error en la conexión: " . $conn->connect_error);
    } 

    #echo "Conexión exitosa";