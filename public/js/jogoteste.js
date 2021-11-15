function enviar_diegoal(){
    if (id_diegoal.value.toUpperCase() == 'DIEGO ALVES') {
        form_message1.innerHTML = "PARABÉNS!! "    
    }
    else{
        form_message1.innerHTML = "ERRADO"
    }

    chamada()
}

function enviar_bh(){
    if (id_bh.value.toUpperCase() == 'BRUNO HENRIQUE') {
        form_message2.innerHTML = "PARABÉNS!! "    
    }
    else{
        form_message2.innerHTML = "ERRADO"
    }

    chamada()
}

function chamada(){
    if (id_diegoal.value.toUpperCase() == 'DIEGO ALVES' && id_bh.value.toUpperCase() == 'BRUNO HENRIQUE') {
        alert('Parabéns!!! A continuação desse jogo está logo após o Login, você terá mais 6 jogadores para adivinhar quem é, além de um quiz sobre o Flamengo. Topa o desafio?')   
    }
}