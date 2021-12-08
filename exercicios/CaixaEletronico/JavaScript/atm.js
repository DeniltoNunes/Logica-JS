nome = prompt("Olá, qual o seu nome mesmo?");
alert("Olá " + nome + " é um prazer ter você aqui! 😃");

let saldo = 100.5;
var extrato = ['Pizzaria 3 irmãos: -R$99.99 ', '\nPadaria Alcino: -R$84.98 ', '\nApple Music: -R$8 '];
function inicio() {

    var escolha = parseInt(prompt('Selecione uma opção \n1 - Saldo \n2 - Extrato \n3 - Saque \n4 - Depósito \n5 - Transferência \n6 - Sair'));

    switch (escolha) {
        case 1: ver_saldo(); break;
        case 2: ver_extrato(); break;
        case 3: fazer_saque(); break;
        case 4: fazer_deposito(); break;
        case 5: fazer_transferencia(); break;
        case 6: sair(); break;
        default: erro(); break;
    }
}

function ver_saldo() {
    if (senha() == true) {
        window.close
    } else {
        alert('Seu saldo atual é: ' + saldo); inicio();
    }
}

function ver_extrato() {
    if (senha() == true) {
        window.close
    } else {
        alert(extrato); inicio();
    }
}

function fazer_saque() {
    if (senha() == true) {
        window.close
    } else {

        let saque = parseFloat(prompt('Qual o valor para saque?'));
        if (isNaN(saque) || saque === '') {
            alert('Por favor, informe um número:'); fazer_saque();
        } else if (saque <= 0 || saque > saldo) {
            alert('Operação não autorizada, tente novamente.'); fazer_saque();
        } else {
            saldo -= saque; var adicionar = extrato.push('\nSaque: -R$' + saque); ver_saldo();
        }
    }
}

function fazer_deposito() {
    if (senha() == true) {
        window.close
    } else {

        var deposito = parseFloat(prompt('Qual o valor para depósito?'));
        if (isNaN(deposito) || deposito === '') {
            alert('Por favor, informe um número:'); fazer_deposito();
        } else if (deposito <= 0) {
            alert('Operação não autorizada, tente novamente.'); fazer_deposito();
        } else {
            saldo += deposito; var adicionar = extrato.push('\nDeposito: +R$' + deposito); ver_saldo();
        }
    }
}

function fazer_transferencia() {
    if (senha() == true) {
        window.close
    } else {
        var transferencia = parseFloat(prompt('Insira o número da conta para a transferencia:'));
        if (isNaN(transferencia) || transferencia === '' || transferencia < 0) {
            alert('Por favor, informe o número da conta:'); fazer_transferencia();
        } else {
            function transferir() {
                var valor = parseFloat(prompt('Qual valor será transferido?'));
                if (isNaN(valor) || valor === '') {
                    alert('Por favor, informe um número:'); transferir();
                } else if (valor <= 0 || valor > saldo) {
                    alert('Operação não autorizada, tente novamente.'); transferir();
                } else {
                    saldo -= valor; var adicionar = extrato.push('\nTranferencia para ' + transferencia + ': -R$' + valor); ver_saldo();
                }
            }
            transferir()
        }
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6'); inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(nome + ', foi um prazer ter você por aqui!😃'); window.close();
    } else {
        inicio();
    }
}

function senha() {
    tentativas = 0; numero = Number(prompt("Insira a senha:")); tentativas += 1;

    while (numero != 3589 && tentativas <= 3) {
        numero = Number(prompt('Senha incorreta!\nRestam mais ' + (3 - tentativas) + ' antes do bloqueio da conta.\nInsira a senha novamente:')); tentativas += 1;
    } if (tentativas == 4 && numero != 3589) {
        alert("Bloqueio da conta"); window.close; return true;
    }
}

inicio();
