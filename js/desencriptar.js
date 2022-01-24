/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function desencriptar(textoEncriptado) {
    var textoDesencriptado = "";
    
    for(var i = 0; i < textoEncriptado.length; i++) {
        textoDesencriptado+= textoEncriptado[i];
        i += convertir(textoEncriptado[i]).length - 1;
    }

    return textoDesencriptado;
}


var buttonDesencriptar = document.querySelector("#button-desencriptar");

buttonDesencriptar.addEventListener("click", function(event) {
    event.preventDefault();
    var textoADesencriptar = document.querySelector("#input-text").value;
    var textoDesencriptado = desencriptar(textoADesencriptar);
    var textoAEnviar = document.querySelector("#input-mensaje");

    textoAEnviar.value = textoDesencriptado;
});
