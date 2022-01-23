/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function convertir(letra) {
    var codigo = letra

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
    var textoEncriptado = ""; 
    
    for(var i = 0; i < texto.length; i++) {
        textoEncriptado += convertir(texto[i]);
    }

    return textoEncriptado;
}


var buttonEncriptar = document.querySelector("#button-encriptar");

buttonEncriptar.addEventListener("click", function() {

    var textoAEncriptar = document.querySelector("#input_text").value;
    var textoAEnviar = document.querySelector("#input-mensaje");
    var textoEncriptado = encriptar(textoAEncriptar);

    textoAEnviar.value = textoEncriptado;
});
