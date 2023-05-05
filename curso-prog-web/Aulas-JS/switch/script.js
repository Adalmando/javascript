function verificaCor(){
    let cor = document.getElementById("cor").value;
    switch(cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            document.body.style.color = "white";
            break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
            document.body.style.color = "white";
            break;

        case "branco":
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            break;

        case "preto":
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            break;

        case "verde":
            document.body.style.backgroundColor = "green";
            document.body.style.color = "white";
            break;

        default:
            document.getElementById("paragrafo").textContent = "Não temos essa cor!";
    }
}