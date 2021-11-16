function calcularIdadePet() {

    nome = String(prompt("Insira o nome do seu pet:"));
    especie = String(prompt("Insira a espécie do seu pet:"));
    anos = Number(prompt("Insira quantos anos humanos seu pet tem:"));
    meses = Number(prompt("Insira quantos meses humanos seu pet tem:"));

    mesesreal = (anos * 12);
    anoreal = (mesesreal + meses) / 12;
    cachorro = (anoreal * 7)
    dias = (anoreal * 12 * 30)

    if (dias >= 360) {
        hamster = (dias - 360) / 17 + 30
    } else if (dias >= 180) {
        hamster = (dias - 180) / 11 + 18
    } else if (dias > 0) {
        hamster = (dias / 10)
    }


    document.write(nome + " tem " + cachorro.toFixed(2) + " anos de verdade! Se fosse um hamster ele teria " + hamster.toFixed(2) + " anos de verdade!<br>");
}

calcularIdadePet()
calcularIdadePet()
calcularIdadePet()