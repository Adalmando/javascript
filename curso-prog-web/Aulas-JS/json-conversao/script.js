// Objeto carro:

const carro = {
    marca: 'Chevrolet',
    modelo: 'Civic',
    ano: 2023,
    motor: ['1.8', '2.0', '3.0']
}

// tentando passar o objeto para uma tag html, desta forma da errado, pois não passa as informações do objeto para a tag:
document.getElementById('area').innerHTML = carro;

// JSON.stringfy transforma um objeto em uma string, porém ela para de ser um objeto e vira apenas texto:
let texto = JSON.stringify(carro);
document.getElementById('area2').innerHTML = texto;

// JSON.parese transforma uma string em um objeto novamente, dessa forma a tag não recebe as informações do objeto, apenas diz que ele é um object:
let objeto = JSON.parse(texto);
document.getElementById('area3').innerHTML = objeto;