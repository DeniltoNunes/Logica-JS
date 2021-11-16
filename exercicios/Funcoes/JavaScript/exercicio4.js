function calcularCircunferencia() {
    raio = Number(prompt("Insira o raio do círculo:"));
    circunferencia = (2 * Math.PI * raio);
    document.write("A circunferencia do circulo é: " + circunferencia.toFixed(2) + "<br>");
}
function calcularArea() {
    area = Math.PI * Math.pow(raio, 2);
    document.write("A area do circulo é: " + area.toFixed(2) + "<br>");
}

calcularCircunferencia()
calcularArea()
calcularCircunferencia()
calcularArea()
calcularCircunferencia()
calcularArea()