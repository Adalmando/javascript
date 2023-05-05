let mensagem = document.getElementById("mensagem");

function eventoClique() {
    mensagem.textContent = "Clicou";
}

function eventoDbClique() {
    mensagem.textContent = "Default";
}

function viraVermelho(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'red';
}

function viraAzul(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'blue';
}

function adicionaTexto(){
    let div = document.getElementById('teste');
    mensagem.append('Mouse movendo!<br>');
}