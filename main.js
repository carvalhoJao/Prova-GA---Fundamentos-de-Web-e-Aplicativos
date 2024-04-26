// NÃO ALTERAR ESTAS FUNÇÕES
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

// Insira aqui sua função de Alert ao clicar no botão Enviar