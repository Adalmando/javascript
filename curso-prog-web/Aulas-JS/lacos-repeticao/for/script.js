// esse comando pega o ano corrente, então se virar o ano para 2024, essa variavel atualizará automaticamente.
var ano = new Date().getFullYear();


// com esse for, eu estou inserindo a cada loop, um option dentro do select, e cada option desses é um ano++ e o value é o marcador da tag option que eu esotu inserindo.
for(let i = ano; i>=1900; i--){
    document.getElementById("select")
    .innerHTML +="<option value'"+i+"'>"+i+"</option>";
} 