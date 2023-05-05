const pessoa = ["Adalmando", "Sistemas de informação", 20190091030];

// MÉTODO QUE APAGA O ULTIMO INDICE DE UM ARRAY:
pessoa.pop();

// MÉTODO QUE ADICIONA UM ELEMENTO AO FIM DO ARRAY:
pessoa.push(20190091030);

// MÉTODO QUE REMOVE O PRIMEIRO ELEMENTO DO ARRAY:
pessoa.shift(); // com isso os indices 1 passa a ser 0 e assim vai...

// MÉTODO QUE ADICIONA UM ELEMENTO AO PRIMEIRO INDICE DO ARRAY:
pessoa.unshift("Adalmando"); // com isso os indices 1 passa a ser 2 e assim vai...

// MÉTODO QUE "APAGA" UM INDICE DE UM ARRAY, NA VERDADE O INDICE PASSA A SER undefined!
//delete pessoa [0];

// MÉTODO QUE ADICIONA UM ITEM A UM INDICE ESPECIFICO DO ARRAY, O PRIMEIRO VALOR É O INDICE QUE VOU INSERIR O VALOR NOVO, O SEGUNDO VALOR É A QUANTIDADE DE INDICES DEPOIS DELE QUE EU VOU APAGAR, E O TERCEIRO VALOR É O QUE EU QUERO COLOCAR NAQUELE INDICE, INCLUSIVE POSSO ADICIONAR MAIS DE UM ELEMENTO:
pessoa.splice(0,0, "adicionei isso agora", "isso também");

const listaDois = ["moto", "carro", "bike"];

// MÉTODO QUE CONCATENA DUAS LISTAS, OBS: ELE TEM QUE SER FEITO EM OUTRA LISTA NOVA E POSSO CONCATENAR MAIS DE 2 LISTAS:
const superLista = pessoa.concat(listaDois);
console.log(superLista);

// MÉTODO JOIN PERMITE ADICIONAR UM SEPARADOR ENTRE OS ELEMENTOS DO ARRAY:
document.getElementById("paragrafo").innerHTML = pessoa.join(" | ");

