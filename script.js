let botao = document.getElementById('botao')
var texto = document.getElementById('titulo')
let titulo = document.getElementById('inpute')

botao.addEventListener("click", function(){
    texto.innerHTML = titulo.value
})