const quizData = [
{
    question: "Who is the QB of the Eagles?",
    a: "Jalen hurts",
    b: "Patrick Mahomes",
    c: "Josh Allen",
    d: "Joe Burrow",
    correct: 'a',
},
{   
    question: "What does HTML stand for?",
    a: "Helicopter Terminals",
    b: "HyperText Makeup Langauge",
    c: "HyperText Markup Language",
    d: "HyperStood Market Loons",
    correct: "c",
},
{
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascade Stood Shoots",
    c: "Cascade Style Sheets",
    d: "Control Style Shoots",
    correct: "c",
},
{   
    question: "What year was JavaScript created?",
    a: "1994",
    b: "1995",
    c: "1996",
    d: "2000",
    correct: "b",
},
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElements = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElements) => {
        if (answerElements.checked) answer = answerElements.id;
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElements.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} question correctly</h2>
            <button onclick="history.go(0)">Play Again Fool</button>`
        }
    }
});