$(document).ready(function() {
    // Función para actualizar el contador de archivos
    function updateFileCount() {
        var fileCount = $('#fileInputsContainer .file-input-wrapper input[type="file"]').filter(function() {
            return this.files.length > 0 && (this.accept === '' || this.accept === 'application/pdf');
        }).length;
        $('#fileCount').text(fileCount);
    }

    // Agregar un nuevo campo de archivo
    $('#addFileInput').on('click', function() {
        $('#fileInputsContainer').append(`
            <div class="mt-4 file-input-wrapper">
                <input type="file" name="files[]" class="form-control" accept="application/pdf">
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

    // Manejar el evento de cambio en los campos de entrada de archivos
    $(document).on('change', '#fileInputsContainer input[type="file"]', function() {
        updateFileCount(); // Actualizar el contador de archivos
    });

    // Inicializar el contador de archivos
    updateFileCount();
});
