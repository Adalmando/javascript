/* SetTimeout e SetInterval. 

setTimeout(function, tempo em milisegundos) - Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds) - É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

function iniciar(){
    // esse comando eu posso colocar antes do setimeout e ele iniciará na hora:
    document.getElementById('contagem').textContent = "Iniciando contagem..."
    // aqui o comando que eu colocar so iniciará quando passar o tempo que eu setei e temp é uma variavel global, pode ser acessada de fora do escopo da função:
    temp = setTimeout(function(){
        document.getElementById('contagem').textContent = "Contagem finalizada.";
    }, 3000)
}

// o clearTimeOut serve para interromper o setTimeOut antes que o tempo acabe e ele faça o que foi programado para fazer, é como um break (mas pode ser executado mesmo depois que o tempo passar e o codigo do setimeout for executado).
function parar(){
    clearTimeout(temp);
    document.getElementById('contagem').textContent = "0";
}