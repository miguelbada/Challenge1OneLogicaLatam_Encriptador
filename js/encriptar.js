import { isValidWord } from "./validacion.js";

function convertir(letra) {
    let codigo = letra

    switch(letra) {
        case "a":
            codigo = "ai";
            break;

        case "e":
            codigo = "enter";
            break;

        case "i":
            codigo = "imes";
            break;

        case "o":
            codigo = "ober";
            break;

        case "u":
            codigo = "ufat"
            break;
    }

    return codigo;
}


function encriptar(texto) {
    let textoEncriptado = ""; 
    
    for(let i = 0; i < texto.length; i++) {
        textoEncriptado += convertir(texto[i]);
    }

    return textoEncriptado;
}


let buttonEncriptar = document.querySelector("#button-encriptar");

buttonEncriptar.addEventListener("click", function() {

    let textoAEncriptar = document.querySelector("#input-text").value;

    if(isValidWord(textoAEncriptar)) {
        let textoAEnviar = document.querySelector("#input-mensaje");
        let textoEncriptado = encriptar(textoAEncriptar.toLowerCase());

    textoAEnviar.value = textoEncriptado;
    } else {
        alert("Debe escribir solo letras en minúsculas y sin palabras acentuadas ni caracteres especiales");
    }
    
});

export {convertir};


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
