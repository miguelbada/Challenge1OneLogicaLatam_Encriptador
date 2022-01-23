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
