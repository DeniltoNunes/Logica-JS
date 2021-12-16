let contador = 1;
let total = 0
let ins = 0

while (contador <= 2) {
    let numero = Number(prompt("Digite a " + contador + "º nota"));
    contador += 1;

    if (numero >= 0 && numero <= 10) {
        total += numero;
        ins += 1;
    }
}

let media = (total / ins)

switch (true) {
    case (media >= 7):
        alert("Aprovado sua média foi de: " + media);
        break;
    default:
        alert("Reprovado sua média é foi de: " + media);
        break;
}