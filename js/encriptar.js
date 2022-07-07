/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

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
    let textoAEnviar = document.querySelector("#input-mensaje");
    let textoEncriptado = encriptar(textoAEncriptar);

    textoAEnviar.value = textoEncriptado;
});
