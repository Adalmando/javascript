const lista = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5", "elemento6", "elemento7"];
console.log(lista[0]);
console.log(lista[lista.length-1]); // printando a ultima pessoa da lista
console.log(lista.length);

// DIFERENÇA DE UM ARRAY PARA UM OBJETO:

const pessoa = ["Adalmando", "Sistemas", 20190091030]; // ARRAY <<
pessoa.push("Sexto periodo"); // ADIOCINANDO VALORES A UM ARRAY QUE JA FOI CRIADO <<
pessoa[pessoa.length] = "testando" // OUTRA FORMA DE FAZER UM ADD <<
console.log(pessoa);

const pessoaUm = { // OBJETO <<
    nome: "Adalmando",
    curso: "Sistemas",
    matricula: 20190091030
};