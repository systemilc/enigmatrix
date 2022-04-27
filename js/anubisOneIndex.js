var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("A é irmão de B. B é irmão de C. C é mãe de D. Qual é o parentesco entre D e A?. Digite o número da sua resposta: (1- Pai/Filho); (2- Tio/Sobrinho); (3- Avô/Neto).");
        if (resposta == 1) {
            window.location.href='../html/game-over.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/anubis-two.html'
            break
    }
    else if (resposta == 3) {
        window.location.href='../html/game-over.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("A é irmão de B. B é irmão de C. C é mãe de D. Qual é o parentesco entre D e A?. Digite o número da sua resposta: (1- Pai/Filho); (2- Tio/Sobrinho); (3- Avô/Neto).");
        break
    }
    }
}

