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

if (media >= 7) {
    document.write("Aprovado sua média é: " + media)
} else {
    document.write("Reprovado sua média é: " + media)
}