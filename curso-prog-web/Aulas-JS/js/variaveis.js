// Diferença de var let e const

// DECLARAÇÃO DE VARIAVEIS:
var a, b, c, d; 

// ATRIBUIÇÃO DE VALORES AS VARIAVEIS:
a=1; b=2; c=a+b;

console.log(c);

// Retorna que o valor de D é undefined, pois eu declarei e não atribui valor:
console.log(d);

let e = 10;

{
    // dentro do scopo, a let e muda o valor, pois se trata de outro contexto
    let e = 5;
    console.log(e)
}

// no contexto geral, e continua valendo 10, pois ta no mesmo escopo que foi declarada
console.log(e);

// dentro desse escopo onde foi declarada, nao posso mais alterar o valor de x
const x = 8;

{
    // como aqui é outro contexto eu posso criar outra const x e atribuir o que quiser
    const x = 18;
    console.log(x);
}

console.log(x);