var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Meu avô tem 4 filhos e cada filho tem 4 filhos. Quantos primos eu tenho? Digite o número da sua resposta: (1- 12 primos); (2- 16 primos); (3- 14 primos).");
        if (resposta == 1) {
            window.location.href='../html/bastet_vic.html'
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
        resposta=prompt ("Meu avô tem 4 filhos e cada filho tem 4 filhos. Quantos primos eu tenho? Digite o número da sua resposta: (1- 12 primos); (2- 16 primos); (3- 14 primos).")
        break
    }
    }
}

