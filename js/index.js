$(document).ready(function() {
    // Función para actualizar el contador de archivos
    function updateFileCount() {
        var fileCount = $('#fileInputsContainer .file-input-wrapper').length;
        $('#fileCount').text(fileCount);
    }

    // Agregar un nuevo campo de archivo
    $('#addFileInput').on('click', function() {
        $('#fileInputsContainer').append(`
            <div class="mt-4 file-input-wrapper">
                <input type="file" name="files[]" class="form-control">
                <button type="button" class="btn btn-danger btn-sm remove-file-input">X</button>
            </div>
        `);
        updateFileCount(); // Actualizar el contador de archivos
    });

    // Eliminar un campo de archivo (solo los agregados dinámicamente)
    $(document).on('click', '.remove-file-input', function() {
        $(this).closest('.file-input-wrapper').remove();
        updateFileCount(); // Actualizar el contador de archivos
    });

    // Manejar el envío del formulario
    $('#uploadForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Validar que el archivo de portada sea una imagen
        var portadaInput = $('#portada')[0];
        if (portadaInput.files.length > 0) {
            var fileType = portadaInput.files[0].type;
            if (!fileType.startsWith('image/')) {
                alert('El archivo de portada debe ser una imagen.');
                return;
            }
        }

        // Crear un FormData object con los datos del formulario
        var formData = new FormData(this);

        $.ajax({
            url: 'procesarDatos.php', // Reemplaza con tu script de procesamiento
            type: 'POST',
            data: formData,
            contentType: false, // Importante para el envío de archivos
            processData: false, // Importante para el envío de archivos
            success: function(response) {
                // Maneja la respuesta exitosa aquí
                alert('Archivos subidos exitosamente.');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Maneja los errores aquí
                console.log(textStatus, errorThrown);
                alert('Error al subir los archivos.');
            }
        });
    });

    // Inicializar el contador de archivos
    updateFileCount();
});
