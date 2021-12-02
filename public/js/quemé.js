var contador = 0
var errou = -1
var acertou = +1
var contador_errou = contador + errou
var contador_acertou = contador + acertou

function corrigir_arao(){
    if (id_arao.value.toUpperCase() == 'ARÃO' || id_arao.value.toUpperCase() == 'WILLIAM ARÃO' ||
    id_arao.value.toUpperCase() == 'ARAO' || id_arao.value.toUpperCase() == 'WILLIAM ARAO') {

        pontuacao.innerHTML = `${contador = contador + acertou}/6`
        document.getElementById("id_arao").disabled = true
        document.getElementById("botao_arao").disabled = true
        contador_acertou++
    } else {
        pontuacao.innerHTML = `${contador = contador + errou}/6`
        document.getElementById("id_arao").disabled = true
        document.getElementById("botao_arao").disabled = true
        contador_errou--
    }
}

function corrigir_diego(){
    if (id_diego.value.toUpperCase() == 'DIEGO' || id_diego.value.toUpperCase() == 'DIEGO RIBAS') {
        
        pontuacao.innerHTML = `${contador = contador + acertou}/6`
        document.getElementById("id_diego").disabled = true
        document.getElementById("botao_diego").disabled = true
        contador_acertou++
    } else {
        pontuacao.innerHTML = `${contador = contador + errou}/6`
        document.getElementById("id_diego").disabled = true
        document.getElementById("botao_diego").disabled = true
        contador_errou--

    }
}

function corrigir_everton(){
    if (id_everton.value.toUpperCase() == 'EVERTON RIBEIRO') {
        
        pontuacao.innerHTML = `${contador = contador + acertou}/6`
        document.getElementById("id_everton").disabled = true
        document.getElementById("botao_everton").disabled = true
        contador_acertou++
    } else {
        pontuacao.innerHTML = `${contador = contador + errou}/6`
        document.getElementById("id_everton").disabled = true
        document.getElementById("botao_everton").disabled = true
        contador_errou--
    }
}

function corrigir_micha(){
    if (id_micha.value.toUpperCase() == 'MICHAEL'|| id_micha.value.toUpperCase() == 'ROBOZINHO') {
        
        pontuacao.innerHTML = `${contador = contador + acertou}/6`
        document.getElementById("id_micha").disabled = true
        document.getElementById("botao_micha").disabled = true
        contador_acertou++
    } else {
        pontuacao.innerHTML = `${contador = contador + errou}/6`
        document.getElementById("id_micha").disabled = true
        document.getElementById("botao_micha").disabled = true
        contador_errou--
    }
}

function corrigir_vittinho(){
    if (id_vittinho.value.toUpperCase() == 'VITINHO' || id_vittinho.value.toUpperCase() == 'VITTINHO'){
        
        pontuacao.innerHTML = `${contador = contador + acertou}/6`
        document.getElementById("id_vittinho").disabled = true
        document.getElementById("botao_vitinho").disabled = true
        contador_acertou++
    } else {
        pontuacao.innerHTML = `${contador = contador + errou}/6`
        document.getElementById("id_vittinho").disabled = true
        document.getElementById("botao_vitinho").disabled = true
        contador_errou--
    }
}

function corrigir_rodi(){
    if (id_rodi.value.toUpperCase() == 'RODILINDO' || id_rodi.value.toUpperCase() == 'RODINEY') {
        
        pontuacao.innerHTML = `${contador = contador + acertou}/6`
        document.getElementById("id_rodi").disabled = true
        document.getElementById("botao_rodi").disabled = true
        contador_acertou++
    } else {
        pontuacao.innerHTML = `${contador = contador + errou}/6`
        document.getElementById("id_rodi").disabled = true
        document.getElementById("botao_rodi").disabled = true
        contador_errou--
    }
}

function dashboard_quem(){
    div_scroll.style.display = 'none'
    ver_pontuacao.style.display = 'none'
    id_titulo.style.display = 'none'
    id_dashboard_quem.style.display = 'block'

    var ctxBar = document.getElementById("chartBar").getContext("2d");
  var rotulosBar = ["ERROU", "ACERTOU", "TOTAL"];
  var dataBar = [contador_errou + 1, contador_acertou - 1, contador];
  var configBar = {
    type: 'bar',
    data: {
      labels: rotulosBar, // referenciando a variável de rótulos (labels) para o gráfico de barras
      datasets: [
        {
          label: 'Pontos',
          data: dataBar, // referenciando a variável de dados para o gráfico de barras
          backgroundColor: [
            '#FFFFF',
            '#000',
            '#cccbcb',
            '#00FFFF22',
            '#99009922',
            '#99990022',
            '#F0F00022',
            '#65002222',
          ],
          borderColor: [
            '#FF0000',
            '#FFFF00',
            '#FF00FF',
            '#00FFFF',
            '#990099',
            '#999900',
            '#F0F000',
            '#650022',
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      // por padrão, vem como 'true', e faz com que o gráfico se 'mantenha com o mesmo aspecto de proporção', não ficando responsivo
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    }
  }
  var ax_chartBar = new Chart(ctxBar, configBar); // criando o gráfico, chamando o new Chart da biblioteca, passando o contexto e as configurações

  setTimeout(() =>alert(`${sessionStorage.NOME_USUARIO}, aqui está a sua pontuação!`), 1000 );
  
}

function voltar_jogo(){
  window.location.href = './Quemé_log.html'
    
}