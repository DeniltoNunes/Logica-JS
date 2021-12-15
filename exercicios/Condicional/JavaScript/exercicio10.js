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

if (med >= 5) {
    document.write("Você passou no teste")
} else {
    document.write("Tente novamente")
}