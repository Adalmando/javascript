function verificar(){
    
    let valor = document.getElementById("entrada").value;
    let paragrafo = document.getElementById("paragrafo");
   
    if(valor == "" || valor == null){
        document.getElementById("botao").style.backgroundColor = "red";
        paragrafo.textContent = "Não aceitamos que esse campo seja nulo ou em branco!";
    } else{
        document.getElementById("botao").style.backgroundColor = "green";paragrafo.textContent = "Tudo certo!";
    }
}