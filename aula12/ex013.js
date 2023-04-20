// USANDO O SWITCH CASE:

var agora = new Date()

// Esse método retorna um number, e não string, então temos que passar os dias da semana para string 
// Domingo = 0 segunda = 1 .....
var diaSemana = agora.getDay()

switch(diaSemana){
    // SEMPRE LEMBRAR DE USAR O BREAK NO FIM DE CADA CASO!
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
        break
}