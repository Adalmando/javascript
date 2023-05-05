let paragrafo = document.getElementById("paragrafo");

for(let i = 1; i < 10001; i++){
    paragrafo.textContent += `${i}, `;
}