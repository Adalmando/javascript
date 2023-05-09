/*
Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.
Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no Javascript usam um método chamado constructor() para fabricar os objetos.  
*/

// Dessa forma eu crio um objeto ja preenchido, porém eu quero criar um 'molde' de carro, onde eu possa chamar ele em outras partes do codigo e criar um carro novo apartir dele, com as características que eu quiser. 

const Astra = {
    marca: "Chevrolet",
    modelo: "Astra",
    ano: 2023
}

// Aqui eu criei um objeto carro que pode ser instanciado quantas vezes eu quiser, passando os valores que quiser em cada atributo previamente descrtos:
//OBS: esse objeto tem atributos e métodos:
class carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    //Métodos
    buzina(){
        return this.modelo + " buzinou: biiiiiiii";
    }
}

const uno = new carro('Fiat', 'Uno', 2020);
const palio = new carro('Fiat', 'Palio', 2016);

console.log(Astra);
console.log(uno);
uno.marca = "Chevrolet";
console.log(uno);
console.log(palio.buzina());