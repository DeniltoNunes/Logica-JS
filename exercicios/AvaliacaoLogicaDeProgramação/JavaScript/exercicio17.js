alert('Seja bem vindo(a)!😃');
let idade = 7
let idadefinal = 0;

switch (true) {
    case (idade == 1):
        idadefinal = (15);
        break;
    case (idade == 2):
        idadefinal = (15 + 10);
        break;
    case (idade > 2):
        idadefinal = (15 + 10 + 4 * (idade - 2));
        break;
}

alert('A idade humana do seu gatinho é: ' + idadefinal)