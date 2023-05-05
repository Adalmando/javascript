var idade = 50
console.log(`Você tem ${idade} anos.`)

if(idade < 16){
    console.log('Você é muito novo para votar!')
} else if(idade < 18 || idade > 65){
    console.log('Você vota se quiser!')
} else {
    console.log('Você é obrigado a votar!')
}