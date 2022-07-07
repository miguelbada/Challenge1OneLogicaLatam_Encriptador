let buttonCopiar = document.querySelector("#button-copiar");

buttonCopiar.addEventListener("click", function() {
    let textoACopiar = document.querySelector("#input-mensaje");

    textoACopiar.select();
    document.execCommand("copy");
});
  