function isValidWord(word) {

    return /^[a-z ]+$/gm.test(word);/*  && evento.keyCode >= 65 && evento.keyCode <= 90; */ 
}

function verificarPalabra(palabra) {

    return palabra.toLowerCase();
}

export {isValidWord, verificarPalabra};