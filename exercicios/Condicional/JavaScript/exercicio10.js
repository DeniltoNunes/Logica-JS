let contador = 1;
let total = 0
let ins = 0

while (contador <= 4) {
    let numero = Number(prompt("Digite o " + contador + "º valor"));
    contador += 1;

    if (numero >= 0 && numero <= 10) {
        total += numero;
        ins += 1;
    }
}

let med = (total / ins)

switch (true) {
    case (med >= 5):
        alert("Você passou no teste");
        break;
    default:
        alert("Tente novamente");
        break;
}