var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Quanto medirá um ângulo de 38º se o ampliarmos 10 vezes através de um microscópio? Digite o número da sua resposta: (1- 380 graus); (2- 3,8 graus); (3- 38 graus).");
        if (resposta == 1) {
            window.location.href='../html/game_over.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/game_over.html'
        break
    }
    else if (resposta == 3) {
        window.location.href='../html/anubis_three.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("Quanto medirá um ângulo de 38º se o ampliarmos 10 vezes através de um microscópio? Digite o número da sua resposta: (1- 380 graus); (2- 3,8 graus); (3- 38 graus).")
        break
    }
    }
}

