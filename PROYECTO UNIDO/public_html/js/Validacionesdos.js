function validar() {

    limpiarErrores();

    var resultado = true;
    var txtJuego = document.getElementById("nombrejuego");
    var txtDireccion = document.getElementById("direccion");
    var checkGenero = document.getElementsByClassName("genero");
    var txtPostal = document.getElementById("postal");
    var selectEntrega = document.getElementById("tipoentrega");
    var radiosPlataforma = document.getElementsByName("plataforma");

    var letra = /^[a-z ,.'-]+$/i;

    if (txtJuego.value === '') {
        msgError("Ingrese el nombre de su juego ", txtJuego);
        resultado = false;
    } else if (letra.test(txtJuego.value) === false) {
        msgError("Por favor ingrese únicamente el título ", txtJuego);
        resultado = false;
    }
    
    if (txtDireccion.value === '') {
        msgError("Por favor ingrese su direccion ", txtDireccion);
        resultado = false;
    } else if (letra.test(txtDireccion.value) === false) {
        msgError("La direccion ingresada no es válida ", txtDireccion);
        resultado = false;
    }

    for(let i=1; i<checkGenero.length;i++){
         if(checkGenero[i].checked){
             opcionsi = true;
         }
     }
     if(!opcionsi){
        msgError("NO ha seleccionado ningún género ", checkGenero[1]);
        resultado = false;
     }

    if (txtPostal.value === '') {
        msgError("Ingrese el nombre de su juego ", txtPostal);
        resultado = false;
    } else if (letra.test(txtPostal.value) === false) {
        msgError("Por favor ingrese únicamente el título ", txtPostal);
        resultado = false;
    }

    if (selectEntrega.value === null && selectEntrega.value === '0') {
        msgError("Seleccionar el servicio de entrega de su producto es obligatorio", selectEntrega);
        resultado = false;
    }

    var seleccion = false;
    for (let i = 0; i < radiosPlataforma.length; i++) {
        if (radiosPlataforma[i].checked) {
            seleccion = true;
            break;
        }
    }
    if (!seleccion) {
        msgError("NO ha seleccionado la plataforma de su videojuego", radiosPlataforma[0]);
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