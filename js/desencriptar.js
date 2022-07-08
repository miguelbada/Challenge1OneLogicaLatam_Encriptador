import { convertir } from "./encriptar.js"
import { isValidWord } from "./validacion.js";

function desencriptar(textoEncriptado) {
    let textoDesencriptado = "";
    
    for(let i = 0; i < textoEncriptado.length; i++) {
        textoDesencriptado+= textoEncriptado[i];
        i += convertir(textoEncriptado[i]).length - 1;
    }

    return textoDesencriptado;
}


let buttonDesencriptar = document.querySelector("#button-desencriptar");

buttonDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    let textoADesencriptar = document.querySelector("#input-text").value;

    if(isValidWord(textoADesencriptar)) {
        let textoDesencriptado = desencriptar(textoADesencriptar);
        let textoAEnviar = document.querySelector("#input-mensaje");

        textoAEnviar.value = textoDesencriptado;
    } else {
        alert("Debe escribir solo letras en minúsculas y sin palabras acentuadas ni caracteres especiales");
    }
    
});




/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
