var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Digite o número do personagem que deseja escolher.")
        if (resposta == 1) {
            window.location.href='../anubis-one.html'
            break
    }
    else if (resposta == 2) {
        window.location.href='../html/horus-one.html'
            break
    }
    else if (resposta == 3) {
        window.location.href='../html/bastet-one.html'
            break
    }
    else {
        alert('Comando inválido')
        resposta=prompt ("Digite o número do personagem que deseja escolher.")
        break
    }
    }
}




