var resposta;
function pergunta () {
    while (resposta != 1 || resposta != 2 || resposta != 3) {
        resposta = prompt ("Voltar ao menu incial? Digite o número correspondente: 1- SIM. 2- NÃO.");
        if (resposta == 1) {
            window.location.href='../index.html'
            break
        } else {
        alert('Comando inválido')
        resposta=prompt ("Voltar ao menu incial? Digite o número correspondente: 1- SIM. 2- NÃO.")
        break
    }
}
}