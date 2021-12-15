var valor = 0
let contador = 1;
while (contador <= 10) {
    var numero = Number(prompt("Insira o valor " + contador + ":"));
    valor += numero
    contador += 1;
}
document.write("A soma de todos os valores \u00e9: " + valor);