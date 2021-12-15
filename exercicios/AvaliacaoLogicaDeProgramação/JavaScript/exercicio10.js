alert('Seja bem vindo!😃');
let valor = parseInt(prompt("Informe um valor positivo maior que zero:"));
let contador = 1;
let letra = isNaN(valor);

while (valor < 0 || letra == true) {
    valor = parseInt(prompt("Valor inválido. \nInforme um valor positivo maior que zero:"));
    letra = isNaN(valor);
}

while (contador <= valor) {
    alert(contador);
    contador += 1;
}