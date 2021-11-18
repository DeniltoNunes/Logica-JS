let contador = 100;
let total = 0;
let numeros = 85;

while (contador >= 15) {
    total += contador;
    contador -= 1;
}

let resultado = total / numeros
alert('O resultado é: ' + resultado.toFixed(2));