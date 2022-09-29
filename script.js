const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
const ningunMensaje = document.querySelector("#ningunMensaje");
const ingresaTexto = document.querySelector("#ingresaTexto");


//ENCRIPTAR

function btnEncriptar () {
    const textoEncriptado = encriptar (inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.getElementsByClassName.backgroundImage = "none";
    inputTexto.value = "";
    ningunMensaje.style.display = "none";
    ingresaTexto.style.display = "none";
    copiar.style.display = "block";
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase ();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes (matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo [i][0], matrizCodigo [i][1]);
        }
    }
    return stringEncriptada;
}


//DESENCRIPTAR

function btnDesencriptar() {
    const textoEncriptado = desencriptar (inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.getElementsByClassName.backgroundImage = "none";
    inputTexto.value = "";
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["a", "ai"],["e", "enter"],["i", "imes"],["o", "ober"],["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase ();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes (matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo [i][1], matrizCodigo [i][0]);
        }
    }
    return stringDesencriptada;
}

function btncopiar () {
    mensaje.select ();
    navigator.clipboard.writeText (mensaje.value);
    mensaje.value = "";
    alert ("Texto copiado");
}
