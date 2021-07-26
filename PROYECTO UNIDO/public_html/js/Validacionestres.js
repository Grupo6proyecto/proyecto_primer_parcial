function validar() {

    limpiarErrores();

    var resultado = true;
    var radiosTarjeta = document.getElementsByName("tipotarjeta");
    var txtNumtarjeta = document.getElementById("numerotarjeta");
    var txtPropietario = document.getElementById("duenotarjeta");
    var txtCodtarjeta = document.getElementById("codigotarjeta");
    var selectMes = document.getElementById("mes");
    var selectAnio = document.getElementById("anio");
    var checkConfirma = document.getElementById("confirmar");

    var letra = /^[a-z ,.'-]+$/i;
    var codigo = /^[0-9]{4}$/g;

    var seleccion = false;
    for (let i = 0; i < radiosTarjeta.length; i++) {
        if (radiosTarjeta[i].checked) {
            seleccion = true;
            break;
        }
    }
    if (!seleccion) {
        msgError("Debe seleccionar un genero", radiosTarjeta[0]);
        resultado = false;
    }

    if (txtNumtarjeta.value === '') {
        msgError("Nombre es requerido ", txtNumtarjeta);
        resultado = false;
    } else if (letra.test(txtNumtarjeta.value) === false) {
        msgError("Nombre debe contener solo letras ", txtNumtarjeta);
        resultado = false;
    }

    if (txtPropietario.value === '') {
        msgError("Nombre es requerido ", txtPropietario);
        resultado = false;
    } else if (letra.test(txtPropietario.value) === false) {
        msgError("Nombre debe contener solo letras ", txtPropietario);
        resultado = false;
    }

    if (txtCodtarjeta.value === '') {
        msgError("Nombre es requerido ", txtCodtarjeta);
        resultado = false;
    } else if (codigo.test(txtCodtarjeta.value) === false) {
        msgError("Nombre debe contener solo letras ", txtCodtarjeta);
        resultado = false;
    }

    if (selectMes.value === null && selectMes.value === '0') {
        msgError("Debe seleccionar un esctado civil", selectMes);
        resultado = false;
    }

    if (selectAnio.value === null && selectAnio.value === '0') {
        msgError("Debe seleccionar un esctado civil", selectAnio);
        resultado = false;
    }

    if (!checkConfirma.checked) {
        mensajeError("Debe seleccionar un la suscripcion", checkConfirma);
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


