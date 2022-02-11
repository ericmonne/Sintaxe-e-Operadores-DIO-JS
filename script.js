function principal() {

    let numero1 = Number(prompt("Insira o primeiro número: "));

    let numero2 = Number(prompt("Insira o segundo número: "));

    let soma = numero1 + numero2;
    if (!numero1 || !numero2) {
        alert("ERRO - PARÂMETROS INVÁLIDOS! Tente novamente.");
        principal();
    }
    else {
        if (numero1 == numero2) {
            if (soma > 20) {
                alert(`${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
                repetir();
            } else if (soma == 20){
                alert(`${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é maior que 10`);
                repetir();
            }        
            else if (soma > 10) {
                alert(`${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
                repetir();
            } 
            else if (soma == 10){
                alert(`${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é menor que 20`);
                repetir();
            }      else {
                alert(`${numero1} e ${numero2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
                repetir();
            }
        } else {
            if (soma > 20) {
                alert(`${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
                repetir();
            } else if (soma == 20){
                alert(`${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é maior que 10`);
                repetir();
            }else if (soma > 10) {
                alert(`${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
                repetir();
            } else if (soma == 10){
                alert(`${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é menor que 20`);
                repetir();
            }      else {
                alert(`${numero1} e ${numero2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
                repetir();
            }

        }
    }
    function repetir() {
        let opcao = Number(prompt("Deseja tentar novamente? \n 1- Sim \n 2- Não "));

        switch (opcao) {
            case 1:
                principal();
                break;
            case 2:
                alert("Estarei aqui se precisar novamente.");
                break;
            default:
                alert("Digite uma opção válida");
                repetir();
        }
    }

}

principal();