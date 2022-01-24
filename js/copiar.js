var buttonCopiar = document.querySelector("#button-copiar");

buttonCopiar.addEventListener("click", function() {
    var textoACopiar = document.querySelector("#input-mensaje");

    textoACopiar.select();
    document.execCommand("copy");
});
  