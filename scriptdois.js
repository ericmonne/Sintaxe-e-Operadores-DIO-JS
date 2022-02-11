function comparaNumeros(num1, num2){
    if(!num1 || !num2){
        return "erro, parâmetros inválidos"
    }
    const PRIMEIRA_FRASE = criaPrimeiraFrase(num1, num2);
    const SEGUNDA_FRASE = criaSegundaFrase(num1, num2);
    return `${PRIMEIRA_FRASE} ${SEGUNDA_FRASE}`
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';
    if(num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    const SOMA = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const COMPARA10 = SOMA>10;
    const COMPARA20 = SOMA>20;

    if(COMPARA10){
        resultado10 = 'maior';
    }
    if(COMPARA20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${SOMA}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumeros(2,2));