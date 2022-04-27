var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Um casal tem 6 filhas. Cada filha tem um irmão. Quantas pessoas tem nessa família? Digite o número da sua resposta: (1- 7 pessoas); (2- 9 pessoas); (3- 8 pessoas).");
        if (resposta == 1) {
            window.location.href='../html/game_over.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/bastet_three.html'
        break
    }
    else if (resposta == 3) {
        window.location.href='../html/game_over.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("Um casal tem 6 filhas. Cada filha tem um irmão. Quantas pessoas tem nessa família? Digite o número da sua resposta: (1- 7 pessoas); (2- 9 pessoas); (3- 8 pessoas).")
        break
    }
    }
}

