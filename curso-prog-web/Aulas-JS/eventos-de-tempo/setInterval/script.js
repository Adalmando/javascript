/* SetTimeout e SetInterval. 

setTimeout(function, tempo em milisegundos) - Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds) - É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

// setinterval funciona como um for, que executa no intervalo de tempo que eu escolher:
function iniciar(){
    temp = setInterval(function(){
        var tempo = document.getElementById('contagem');
        var cronometro = parseInt(tempo.innerText)+1;
        document.getElementById('contagem').innerHTML = cronometro;
    }, 1000);
}

// clearinterval interrompe o loop do setinterval mas sem zerar ele, apenas pausa, e caso eu clique no setinterval novamente ele continua de onde parou.
function parar(){
    clearInterval(temp)
}