<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica si el archivo de portada es una imagen
    if (isset($_FILES['portada']) && $_FILES['portada']['error'] === UPLOAD_ERR_OK) {
        $fileType = mime_content_type($_FILES['portada']['tmp_name']);
        if (strpos($fileType, 'image/') !== 0) {
            die('El archivo de portada debe ser una imagen.');
        }

        $uploadDirectory = "uploads/";
        $portadaPath = $uploadDirectory . basename($_FILES['portada']['name']);
        if (move_uploaded_file($_FILES['portada']['tmp_name'], $portadaPath)) {
            echo "Portada subida exitosamente.";
        } else {
            echo "Error al subir la portada.";
        }
    }

    // Verifica si los archivos fueron subidos
    if (!empty($_FILES['files']['name'][0])) {
        $uploadDirectory = "uploads/";

        foreach ($_FILES['files']['name'] as $key => $name) {
            $filePath = $uploadDirectory . basename($name);
            if (move_uploaded_file($_FILES['files']['tmp_name'][$key], $filePath)) {
                echo "Archivo $name subido exitosamente.";
            } else {
                echo "Error al subir el archivo $name.";
            }
        }
    } else {
        echo "No se recibieron archivos.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
