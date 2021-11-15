const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('questioncontainer')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('started')
    id_frase_inicial.style.display = 'none'
    alert('O jogo é muito simples! Para cada acerto, você ganha 10 pontos, mas se errar perde 5. Boa sorte!')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    });
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }
    else{
 
        pont_btn.style.display = 'block'
    }
}

function dashboard(){
    alert('TESTE')
    id_banner.style.display = 'none'
    id_social.style.display = 'block'
}


function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        console.log('Ponto')
        element.classList.add('correct')
        ponto()
    }
    else{
        element.classList.add('wrong')
        console.log('Perdeu')
        
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question:'Quantos titulos internacionais o flamengo tem até o momento (26/11)?',
        answers:[
            {text:'6',correct:true},
            {text:'7',correct:false},
            {text:'8',correct:false},
            {text:'9',correct:false},
        ]
    },

    {
        question:'Quem são os artilheiros do flamengo no seculo 21?',
        answers:[
            {text:'Gabigo,Bruno Henrique e Vagner Love',correct:false},
            {text:'Gabigol,Adriano e Vagner Love',correct:false},
            {text:'Gabigol,Renato Abreu e Adriano',correct:false},
            {text:'Gabigol,Bruno Henrique e Renato Abreu',correct:true},
        ]
    },

    {
        question:'Quem é o maior artilheiro do flamengo pela libertadores?',
        answers:[
            {text:'Zico',correct:false},
            {text:'Nunes',correct:false},
            {text:'Gaúcho',correct:false},
            {text:'Gabigol',correct:true},
        ]
    },

    {
        question:'Qual foi o placar da final do mundial de 1981?',
        answers:[
            {text:'Flamengo 3 x 1 Liverpool',correct:false},
            {text:'Flamengo 3 x 0 Liverpool',correct:true},
            {text:'Flamengo 1 x 2 Liverpool',correct:false},
            {text:'Flamengo 2 x 1 Liverpool',correct:false},
            
        ]
    },

    {
        question:'Em quantos jogos seguidos Gabigol marcou em 2019?',
        answers:[
            {text:'11',correct:false},
            {text:'10',correct:true},
            {text:'9',correct:false},
            {text:'8',correct:false},
        ]
    },

    {
        question:'Antes de Gabigol, quem foi o 9 mais decisivo pelo flamengo?',
        answers:[
            {text:'Guerrero',correct:false},
            {text:'Vagner Love',correct:false},
            {text:'Hernane',correct:true},
            {text:'Adriano',correct:false},
        ]
    },

    {
        question:'Quem foi o responsável pelo gol do titulo do brasileirao 2009?',
        answers:[
            {text:'Petkovic',correct:false},
            {text:'David Bras',correct:false},
            {text:'Ronaldo Angelim',correct:true},
            {text:'Adriano',correct:false},
        ]
    },

    {
        question:'Quem fez o gol do titulo copa do brasil 2013?',
        answers:[
            {text:'Hernane',correct:true},
            {text:'Léo Moura',correct:false},
            {text:'Elias',correct:false},
            {text:'Gabriel',correct:false},
        ]
    },

    {
        question:'Quantas vezes o flamengo foi rebaixado para a serie B?',
        answers:[
            {text:'0',correct:true},
            {text:'1',correct:false},
            {text:'2',correct:false},
            {text:'3',correct:false},
        ]
    },

    {
        question:'Qual jogador mais atuou pelo flamengo?',
        answers:[
            {text:'Zico',correct:false},
            {text:'Andrade',correct:false},
            {text:'Junior',correct:true},
            {text:'Gaúcho',correct:false},
        ]
    }
]

var pont_quiz = 0;
 
function ponto(){
    pont_quiz++
    cont.innerHTML = `${pont_quiz * 5}`

}


