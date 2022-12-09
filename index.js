$(document).ready(function () {
  verificar_session(); /** Inicializar la funcion */
  
  /**
   * EVENTO SUBMIT. REALIZA LA FUNCIÓN INICIAR SESIÓN.
   * Los datos son: el numero de identificación del usuario y la contraseña. 
   */
  $('#form-login').submit(e => {
    let ident = $('#ident').val();
    let pass = $('#pass').val();
    login(ident, pass);
    e.preventDefault();
  })

  /**
   * FUNCIÓN ASINCRONICA PARA INICIAR SESIÓN. SOLICITA DOS PARAMETROS OBLIGATORIOS
   * @param {int} ident = Se debe ingresar el numero de identificación del usuario. Este campo solo admite numeros.
   * @param {String} pass = Se debe ingresar la contraseña asignada al usuario. Este campo admite numeros y letras.
   */
  async function login(ident, pass) {
    let funcion = "login";
    let data = await fetch('/sgme_hys/Controllers/control_usuario.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'funcion=' + funcion + '&&ident=' + ident + '&&pass=' + pass
    })
    if (data.ok) {
      let response = await data.text();
      try {
        let respuesta = JSON.parse(response);
        if (respuesta.msg == 'success') {
          location.href = "/sgme_hys/Views/Admin/Dashboard.php"
        } else if (respuesta.msg == 'error') {
          toastr.error('Oh No! Credenciales incorrectas', 'Error!')
          $('#form-login').trigger('reset');
        }
      } catch (error) {
        console.error(error);
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: 'No puede inciar sesión, póngase en contacto con el administrador del sistema. Código: ' + data.status,
        })
        $('#form-login').trigger('reset');
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: data.statusText,
        text: 'No puede inciar sesión, póngase en contacto con el administrador del sistema. Código: ' + data.status,
      })
    }
  }

  /**
   * FUNCIÓN PARA VERIFICAR LA SESIÓN
   * Se verifica que los datos ingresados sean correctos. Si son correctos nos direcciona a la vista del dashboard.
   * Si hay algun error al iniciar sesión, el sistema nos enviara un error, el cual se vera reflejado en la pantalla.
   */
  async function verificar_session() {
    let funcion = "verificar_session";
    let data = await fetch('/sgme_hys/Controllers/control_usuario.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'funcion=' + funcion
    })
    if (data.ok) {
      let response = await data.text();
      try {
        let respuesta = JSON.parse(response);
        if (respuesta.length != 0) {
          location.href = "/sgme_hys/Views/Admin/Dashboard.php"
        }
      } catch (error) {
        console.error(error);
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error',
          text: 'Al inciar sesión, póngase en contacto con el administrador del sistema. Còdigo: ' + data.status,
        })
      }

    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: data.statusText,
        text: 'No puede inciar sesión, póngase en contacto con el administrador del sistema. Còdigo: ' + data.status,
      })


    }

  }
})