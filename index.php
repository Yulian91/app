<!-- Eqtiquetas php para la sesión activa -->
<?php
session_start();
?>


<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title><!-- Este es el titulo del login -->
  
  <!-- Estas son las rutas de los archivos estilos.css -->
  <link rel="icon" href="/sgme_hys/Assets/Util/img/tools_web.png">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css " href="/sgme_hys/Assets/Util/css/login.css">
  <link rel="stylesheet" type="text/css " href="/sgme_hys/Assets/Util/css/css/all.min.css">
  <link rel="stylesheet" type="text/css " href="/sgme_hys/Assets/Util/css/sweetalert2.min.css">
  <link rel="stylesheet" type="text/css " href="/sgme_hys/Assets/Util/css/toastr.min.css">
</head>

<body>
  <img class="wave" src="/sgme_hys/Assets/Util/img/wave.png" alt=""><!-- Esta es la ruta de la imagen lateral de color morado -->
  <div class="contenedor">
    <div class="img">
      <img src="/sgme_hys/Assets/Util/img/avatar_1.png" alt=""><!-- Esta es la ruta del logo principal del software -->
    </div>
    <div class="contenido-login">
      <form id="form-login"><!-- id = Es el identificador del formulario de login -->
        <img src="/sgme_hys/Assets/Util/img/tools.png" alt=""><!-- Esta es la ruta de la imagen que se encuentra arriba de los campos identificación y contraseña -->
        <h2>sgme h&s</h2>
        <div class="input-div dni">
          <div class="i">
            <i class="fas fa-user"></i>
          </div>
          <div class="div">
            <h5>Identificación</h5>
            <input type="text" name="ident" id="ident" class="input" required><!-- Este input envia el numero de identificación del usuario al archivo index.php -->
          </div>
        </div>
        <div class="input-div pass">
          <div class="i">
            <i class="fas fa-lock"></i>
          </div>
          <div class="div">
            <h5>Contraseña</h5>
            <input type="password" name="pass" id="pass" class="input" required><!-- Este input envia la contraseña del usuario al archivo index.php -->
          </div>
        </div>
        <a href="Views/recuperar_password.php">!Olvide la contraseña¡</a><!-- Esta ruta es para recuperar la contraseña del usuario -->
        <input type="submit" class="btn" value="iniciar Sesión"><!-- Este es el boton para iniciar sesión -->
      </form>
    </div>
  </div>
</body>

<!-- Estas son las rutas de los archivos JaveScript -->
<!-- jQuery -->
<script src="/sgme_hys/Assets/Util/js/jquery.min.js"></script>
<script src="/sgme_hys/Assets/Util/js/login.js"></script>
<script src="/sgme_hys/index.js"></script><!-- Esta es la conexión del archivo index.php con el archivo index.js -->
<!-- SweetAlert 2 -->
<script src="/sgme_hys/Assets/Util/js/sweetalert2.min.js"></script>
<!-- Toastr -->
<script src="/sgme_hys/Assets/Util/js/toastr.min.js"></script>

</html>