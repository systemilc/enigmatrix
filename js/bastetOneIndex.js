var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("5 sapos estavam na ponte e 3 pensaram em pular na água. Quantos sapos restam na ponte? Digite o número da sua resposta: (1- 3 sapos); (2- 5 sapos); (3- 2 sapos).");
        if (resposta == 1) {
            window.location.href='../html/game_over.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/bastet_two.html'
            break
    }
    else if (resposta == 3) {
        window.location.href='../html/game_over.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("5 sapos estavam na ponte e 3 pensaram em pular na água. Quantos sapos restam na ponte? Digite o número da sua resposta: (1- 3 sapos); (2- 5 sapos); (3- 2 sapos).")
        break
    }
    }
}

