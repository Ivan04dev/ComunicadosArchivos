<?php
    include "config/_db.php";
    include "includes/header.php";
?>

<div class="container">
    <div class="row">
        <div class="col-md-10 offset-2">
            <h1>Detalle del Comunicado</h1>

            <form class="mt-5" id="uploadForm" method="post" enctype="multipart/form-data">
                <div id="fileInputsContainer">
                    <div class="mt-4">
                        <label for="portada">Portada: </label>
                        <input type="file" name="portada" id="portada" class="form-control" accept="image/*">
                    </div>
                    <div class="mt-4 file-input-wrapper">
                        <label for="archivo">Archivo: </label>
                        <input type="file" name="files[]" class="form-control">
                    </div>
                </div>
                <div class="mt-4">
                    <button type="button" id="addFileInput" class="btn btn-success"> + </button>
                </div>
                <div class="mt-4">
                    <button type="submit" class="btn btn-primary">Subir</button>
                </div>
                <div class="mt-4">
                    <span>Archivos a enviar: <span id="fileCount">1</span></span>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include "includes/footer.php"; ?>
