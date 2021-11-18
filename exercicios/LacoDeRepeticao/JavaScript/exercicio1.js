let contador = 1;
let valor = 0;
let numero = 0;

while (contador <= 2) {
    numero = Number(prompt("Insira o " + contador + "º valor para a divisão:"));
    if (contador == 1) {
        valor += numero;
    }
    contador += 1;
}

while (numero <= 0) {
    numero = Number(prompt('Valor inválido!\nO valor não deve ser zero e nem negativo.\nInsira um novo valor:'));
}

let resultado = (valor / numero)

alert("O resultado da divisão é: " + resultado.toFixed(2))