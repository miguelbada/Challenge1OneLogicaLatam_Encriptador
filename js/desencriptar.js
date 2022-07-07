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
    let textoDesencriptado = desencriptar(textoADesencriptar);
    let textoAEnviar = document.querySelector("#input-mensaje");

    textoAEnviar.value = textoDesencriptado;
});
