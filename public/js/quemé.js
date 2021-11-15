var contador = 0

function corrigir_arao(){
    if (id_arao.value.toUpperCase() == 'ARÃO' || id_arao.value.toUpperCase() == 'WILLIAM ARÃO' ||
    id_arao.value.toUpperCase() == 'ARAO' || id_arao.value.toUpperCase() == 'WILLIAM ARAO') {
        contador++
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_arao").disabled = true;
    } else {
        contador--
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_arao").disabled = true;

    }
}

function corrigir_diego(){
    if (id_diego.value.toUpperCase() == 'DIEGO' || id_diego.value.toUpperCase() == 'DIEGO RIBAS') {
        
        contador++
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_diego").disabled = true;
    } else {
        contador--
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_diego").disabled = true;

    }
}

function corrigir_everton(){
    if (id_everton.value.toUpperCase() == 'EVERTON RIBEIRO') {
        
        contador++
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_everton").disabled = true;
    } else {
        contador--
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_everton").disabled = true;
    }
}

function corrigir_micha(){
    if (id_micha.value.toUpperCase() == 'MICHAEL'|| id_micha.value.toUpperCase() == 'ROBOZINHO') {
        
        contador++
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_micha").disabled = true;
    } else {
        contador--
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_micha").disabled = true;
    }
}

function corrigir_vittinho(){
    if (id_vittinho.value.toUpperCase() == 'VITINHO' || id_vittinho.value.toUpperCase() == 'VITTINHO'){
        
        contador++
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_vitinho").disabled = true;
    } else {
        contador--
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_vitinho").disabled = true;
    }
}

function corrigir_rodi(){
    if (id_rodi.value.toUpperCase() == 'RODILINDO' || id_rodi.value.toUpperCase() == 'RODINEY') {
        
        contador++
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_rodi").disabled = true;
    } else {
        contador--
        pontuacao.innerHTML = `${contador}/6`
        document.getElementById("botao_rodi").disabled = true;
    }
}

function dashboard_quem(){
    div_scroll.style.display = 'none'
}