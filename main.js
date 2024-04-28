// NÃO ALTERAR ESTAS FUNÇÕES
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

// Insira aqui sua função de Alert ao clicar no botão Enviar

$(document).ready( function() {
    console.log("teste");
    $(".enviar").click(function() {
        var inputNome = document.getElementById("name");
        var inputEmail = document.getElementById("email");
        var inputMensagem = document.getElementById("mensagem");
        var textoNome = inputNome.value;
        var textoEmail = inputEmail.value;
        var textoMensagem = inputMensagem.value;

        if (textoNome === "" || textoEmail === "") {
            alert("Você precisa preencher seu nome e email.");
        } else if (textoMensagem === "") {
            alert("Sua mensagem não pode estar vazia");
        } else {
            alert("Email enviado com sucesso!");
        }
        // alert("Botão clicado");
    })
});