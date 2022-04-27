var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Uma mulher tem 30 reais para dividir entre suas duas filhas. Que horas são? Digite o número da sua resposta: (1- 02:30am); (2- 13:45pm); (3- 15:30pm).");
        if (resposta == 1) {
            window.location.href='../html/game-over.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/horus-two.html'
            break
    }
    else if (resposta == 3) {
        window.location.href='../html/game-over.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("Uma mulher tem 30 reais para dividir entre suas duas filhas. Que horas são? Digite o número da sua resposta: (1- 02:30am); (2- 13:45pm); (3- 15:30pm).")
        break
    }
    }
}

