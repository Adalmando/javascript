// PEGANDO A HORA ATUAL DO MEU COMPUTADOR:
var horaAtual = new Date().getHours()
var hora = 1

console.log(`Agora são exatamente ${horaAtual} horas.`)

if(horaAtual < 5){
    console.log('Boa madrugada')
} 
else if(horaAtual <= 12){
    console.log('Bom dia')
}
else if(horaAtual < 18){
    console.log('Boa tarde')
}
else{
    console.log('Boa noite')
}