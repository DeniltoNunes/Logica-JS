function calcularIdadePet() {
    anos = Number(prompt("Insira quantos anos humanos seu pet tem:"));
    meses = Number(prompt("Insira quantos meses humanos seu pet tem:"));
    mesesreal = (anos * 12);
    anoreal = (mesesreal + meses) / 12;
    cachorro = (anoreal * 7)

    document.write("Seu cachorro teria tipo " + cachorro.toFixed(2) + " anos se fosse um humano.</br>");
}

calcularIdadePet()
calcularIdadePet()
calcularIdadePet()