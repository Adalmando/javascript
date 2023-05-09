
// DATA ATUAL:
var hoje = new Date();

// DATA DO VENCIMENTO: lembrar que janeiro = 0, fevereiro = 1....
var vencimento = new Date(2023, 4, 8);

if( hoje > vencimento){
    console.log('Esta fatura já venceu, não aceitaremos o pagamento!');
} else{
    console.log('Esta fatura ainda não venceu, pode pagá-la agora, se quiser!');
}
    