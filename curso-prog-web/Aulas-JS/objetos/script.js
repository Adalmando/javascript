// Objeto literal: ja é criado com os valores setados:
const carro = {
    marca: "ford",
    modelo: "Ká",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){alert("biiiiiiii")},
    info: function(){
        return `A marca do carro é ${this.marca} e o modelo é ${this.modelo}`;
    }
};

carro.buzina();
console.log(carro.info()); 