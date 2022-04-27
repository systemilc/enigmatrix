var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Uma esfera tem 3, um círculo tem 2 e um ponto tem 1. Do que estamos falando? Digite o número da sua resposta: (1- Dimensões); (2- Ângulos); (3- Lados).");
        if (resposta == 1) {
            window.location.href='../html/anubis_vic.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/game_over.html'
        break
    }
    else if (resposta == 3) {
        window.location.href='../html/game_over.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("Uma esfera tem 3, um círculo tem 2 e um ponto tem 1. Do que estamos falando? Digite o número da sua resposta: (1- Dimensões); (2- Ângulos); (3- Lados).")
        break
    }
    }
}

