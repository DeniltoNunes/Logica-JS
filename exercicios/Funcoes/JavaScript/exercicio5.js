temperatura = Number(prompt("Insira a temperatura para ser convertida:"))
tipo = (prompt("Qual o tipo de temperátura?\nF - Fahrenheit\nC - Celsius").toUpperCase())

while (tipo !== 'C' && tipo !== 'F') {
    tipo = (prompt("VALOR INVALIDO!\nQual o tipo de temperátura?\nF - Fahrenheit\nC - Celsius").toUpperCase())
}

function converterCelsiusFahrenheit() {
    fahrenheit = (temperatura * 9 / 5) + 32
    document.write("A temperatura é de " + fahrenheit.toFixed(1) + "°F<br>");
}
function converterFahrenheitCelsius() {
    celsius = (temperatura - 32) * 5 / 9
    document.write("A temperatura é de " + celsius.toFixed(1) + "°C<br>");
}

if (tipo == 'F') {
    converterFahrenheitCelsius()
} else if (tipo == 'C') {
    converterCelsiusFahrenheit()
}