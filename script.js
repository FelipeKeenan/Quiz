//Inicial Data
let currentQuestion = 0;
let correctAnswer = 0

//Actions
document.querySelector('.try-again-btn').addEventListener('click', resetQuiz)
document.querySelector('.start-btn').addEventListener('click', startGame);


//Functions

//Start Game
function startGame() {
    document.querySelector(".hidden-container").style.display = 'block'
    document.querySelector(".start-game").style.display = 'none'

    //Variável que contém o nível que o usuário selecionou
    let gameDificult = document.querySelector('.hidden-select').value

    //Criando variáveis que vão conter o nível selecionado pelo usuário
    let easyDificult = questions.slice(0, 10)
    let mediumDificult = questions.slice(10, 20)
    let hardDificult = questions.slice(20)

    if (gameDificult === 'easy') {
        questions = easyDificult
    }
    if (gameDificult === 'medium') {
        questions = mediumDificult
    }
    if (gameDificult === 'hard') {
        questions = hardDificult
    }
    showQuestion()
}

function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion] //Variável que vai conter o número da questão dentro do Array.

        //Atualizando a barra de progresso sempre que troca de questão
        let pctBar = Math.floor((currentQuestion / questions.length) * 100) //Variável que vai armazenar o tamanho da barrinha superior sempre acompanhando a questão atual (Math.floor pra arredondar os números).
        document.querySelector(".progress--bar").style.width = `${pctBar}%`

        document.querySelector(".scoreArea").style.display = 'none'
        document.querySelector(".questionArea").style.display = 'block'

        document.querySelector('.question').innerHTML = q.question


        //Acessando cada "option" dentro do array através de um loop.
        let optionsHtml = ''
        for (i in q.options) {
            optionsHtml += `<div data-op=${i} class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
        }

        //Exibindo cada "option" através de um loop.
        document.querySelector(".options").innerHTML = optionsHtml

        //Adicionando evento de clique nas opções
        document.querySelectorAll(".options .option").forEach(item => {
            item.addEventListener('click', clickOptionEvent)
        })
    }
    else {
        //Chamando a função quando acabar as questions
        finishQuiz()
    }

}

//Função que vai "pegar" onde eu cliquei atráves do atributo "data-op" 
function clickOptionEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op')) //Transformando a string em inteiro

    if (questions[currentQuestion].answer === clickedOption) {


        //Adicionando uma unidade a cada acerto de resposta.
        correctAnswer++;
    }

    //Passando pra próxima pergunta e mostrando a função showQuestion novamente.
    currentQuestion++;
    showQuestion()


}


function finishQuiz() {
    //Criando a variável que vai calcular a porcentagem de acertos
    let points = Math.floor((correctAnswer / questions.length) * 100)

    //Exibindo a porcentagem de acertos
    document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`

    //Exibindo o número total de acertos
    document.querySelector(".scoreText2").innerHTML = `Você acertou ${correctAnswer} de ${questions.length} questões!`

    //Alterando a cor e o texto conforme a performance
    if (points < 40) {
        document.querySelector('.scoreText1').style.color = 'red'
        document.querySelector('.scoreText1').innerHTML = 'Insuficiente! Estude mais e não desista!'
    } else if (points >= 40 && points < 80) {
        document.querySelector('.scoreText1').style.color = 'yellow'
        document.querySelector('.scoreText1').innerHTML = 'Boa! Mais um pouco de estudo e você ficará muito bom!'
    } else if (points >= 80) {
        document.querySelector('.scoreText1').style.color = '#0d630d'
        document.querySelector('.scoreText1').innerHTML = 'Muito bem! Você obteve um excelente resultado!'
    }

    //Exibindo a área de pontuação e removendo a área de questões.
    document.querySelector(".scoreArea").style.display = 'block'
    document.querySelector(".questionArea").style.display = 'none'

    //Completando o width da barra de progresso para o máximo
    document.querySelector(".progress--bar").style.width = "100%"
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswer = 0
    showQuestion()
}