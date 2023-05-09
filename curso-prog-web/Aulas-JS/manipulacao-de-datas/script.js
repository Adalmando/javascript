// instanciando a data de hoje:
let data = new Date();

// alguns meétodos de data:
console.log(data);
console.log(data.getFullYear());


// transformando o getMonth em string:
const meses=['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
console.log(meses[data.getMonth()]);

// transformando o getDay em string:
const dias=['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
// método que pega o dia da semana, em inteiro:
console.log(dias[data.getDay()]);

// Método que pega o dia do mês: 1 a 31:
console.log('Dia do mês: '+ data.getDate());

// pegar os minutos 0 a 59:
console.log('Minutos ' + data.getMinutes());

// pegar os segundos 0 a 59:
console.log('Segundos ' + data.getSeconds());

// pegar os milisegundos 0 a 999:
console.log('milisegundos ' + data.getMilliseconds());

// interpolação de datas:
console.log(`${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}, ${dias[data.getDay()]} dia ${data.getDate()}`);

// Pega data no formato pt-BR: 00/00/0000,  00:00:00:
console.log(data.toLocaleString('pt-BR'));

// Pega data no formato pt-BR: 00/00/0000 formato curto <:
console.log(data.toLocaleString('pt-BR', {dateStyle: 'short'}));

