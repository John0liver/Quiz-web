const questionario = [
    {
        questao: "Qual idioma é executado em um navegador da Web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        questao: "O que significa a sigla CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        questao: "O que significa a sigla HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        questao: "Em que ano foi lançado o JavaScript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "nenhuma das alternativas",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const respostaEls = document.querySelectorAll('.resposta')
const questoesEl = document.getElementById('questoes')
const a_texto = document.getElementById('a_texto')
const b_texto = document.getElementById('b_texto')
const c_texto = document.getElementById('c_texto')
const d_texto = document.getElementById('d_texto')
const submeterBtn = document.getElementById('submeter')

let quizAtual = 0
let pontuacao = 0

carregarQuiz()

function carregarQuiz() {
    desmarcarRespostas()

    const currentQuizData = questionario[quizAtual]

    questoesEl.innerText = currentQuizData.questao
    a_texto.innerText = currentQuizData.a
    b_texto.innerText = currentQuizData.b
    c_texto.innerText = currentQuizData.c
    d_texto.innerText = currentQuizData.d
}

function desmarcarRespostas() {
    respostaEls.forEach(respostaEl => respostaEl.checked = false)
}

function getSelecionado() {
    let resposta

    respostaEls.forEach(respostaEl => {
        if(respostaEl.checked) {
            resposta = respostaEl.id
        }
    })

    return resposta
}

submeterBtn.addEventListener('click', () => {
    const resposta = getSelecionado()
    
    if(resposta) {
        if(resposta === questionario[quizAtual].correct) {
            pontuacao++
        }

        quizAtual++

        if(quizAtual < questionario.length) {
            carregarQuiz()
        } else {
            quiz.innerHTML = `
                <h2>você respondeu ${pontuacao}/${questionario.length} questões corretamente</h2>

                <button onclick="location.reload()">Recarregar</button>
            `
        }
    }
})