var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Um pato recebeu R$ 9, uma aranha R$ 36 e uma abelha R$ 27. Quanto recebe um gato? Digite o número da sua resposta: (1- R$18,00); (2- R$32,00); (3- R$54,00).");
        if (resposta == 1) {
            window.location.href='../html/horus-vic.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/game-over.html'
         break
    }
    else if (resposta == 3) {
        window.location.href='../html/game-over.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("Um pato recebeu R$ 9, uma aranha R$ 36 e uma abelha R$ 27. Quanto recebe um gato? Digite o número da sua resposta: (1- R$18,00); (2- R$32,00); (3- R$54,00).")
        break
    }
    }
}

