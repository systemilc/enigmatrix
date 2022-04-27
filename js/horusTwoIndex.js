var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Se chove à meia-noite, é provável que em 72 horas faça sol? Digite o número da sua resposta: (1- Sim); (2- Talvez); (3- Não).");
        if (resposta == 1) {
            window.location.href='../html/game_over.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/game_over.html'
        break
    }
    else if (resposta == 3) {
        window.location.href='../html/horus_three.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("Se chove à meia-noite, é provável que em 72 horas faça sol? Digite o número da sua resposta: 1- (Sim0; (2- Talvez); (3- Não).")
        break
    }
    }
}

