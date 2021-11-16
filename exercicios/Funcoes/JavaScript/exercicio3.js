function calcularMeuLanche() {
    idade = Number(prompt("Insira a sua idade:"));
    lanches = Number(prompt("Quantos lanches você come por dia:"));
    idadeReal = (80 - idade)
    lanchesReal = (idadeReal * 365.25 * lanches)
    document.write("Você precisará de " + lanchesReal + " para viver até os 80 anos.<br>");
}

calcularMeuLanche()
calcularMeuLanche()
calcularMeuLanche()