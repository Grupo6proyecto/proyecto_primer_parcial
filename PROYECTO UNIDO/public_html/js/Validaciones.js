function validar() {

    limpiarErrores();

    var resultado = true;
    var txtApellidos = document.getElementById("apellidos");
    var txtNombres = document.getElementById("nombres");
    var txtCorreo = document.getElementById("correo");
    var txtUsuario = document.getElementById("usuario");
    var radiosPago = document.getElementsByName("formapago");
    var selectPersona = document.getElementById("tipopersona");
    var checkAcepta = document.getElementById("confirmar");

    var letra = /^[a-z ,.'-]+$/i;
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var usuario = /^[A-Z]+$/i;

    if (txtApellidos.value === '') {
        msgError("Ingrese un apellido ", txtApellidos);
        resultado = false;
    } else if (letra.test(txtApellidos.value) === false) {
        msgError("Nombre debe contener solo letras ", txtApellidos);
        resultado = false;
    }

    if (txtNombres.value === '') {
        msgError("Ingrese un nombre ", txtNombres);
        resultado = false;
    } else if (letra.test(txtNombres.value) === false) {
        msgError("Nombre debe contener solo letras ", txtNombres);
        resultado = false;
    }

    if (txtCorreo.value === '') {
        msgError("Ingrese un correo electrónico ", txtCorreo);
        resultado = false;
    } else if (!correo.test(txtCorreo.value)) {
        msgError("El correo ingresado no es correcto ", txtCorreo);
        resultado = false;
    }

    if (txtUsuario.value === '') {
        msgError("Ingrese un nombre de usuario ", txtUsuario);
        resultado = false;
    } else if (usuario.test(txtUsuario.value) === false) {
        msgError("El usuario debe contener solo letras ", txtUsuario);
        resultado = false;
    }

    var seleccion = false;
    for (let i = 0; i < radiosPago.length; i++) {
        if (radiosPago[i].checked) {
            seleccion = true;
            break;
        }
    }
    if (!seleccion) {
        msgError("NO ha seleccionado ninguna forma de pago", radiosPago[0]);
        resultado = false;
    }

    if (selectPersona.value === null && selectPersona.value === '0') {
        msgError("Por favor especifique su tipo de persona", selectPersona);
        resultado = false;
    }

    if (!checkAcepta.checked) {
        msgError("Debe aceptar nuestros términos y condiciones para continuar", checkAcepta);
        resultado = false;
    }

    return resultado;
}

function msgError(mensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("h6");
    nodoMensaje.style.color = "red";
    nodoMensaje.style.fontSize = "9px";
    nodoMensaje.innerHTML = mensaje;
    nodoMensaje.setAttribute("class", "error");
    var clase = nodoMensaje.getAttribute("class");
    nodoPadre.appendChild(nodoMensaje);
}

function limpiarErrores() {
    var mensajesDeError = document.querySelectorAll(".error"); // aqui cambie antes getElementsByClassName
    for (let i = 0; i < mensajesDeError.length; i++) {
        mensajesDeError[i].remove();
    }

}

