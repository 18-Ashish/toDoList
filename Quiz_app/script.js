const quizDB = [
    {
        question:"Q1. What is the full form of HTML?",
        a:"what",
        b:"hello",
        c:"Hyper",
        d:"HyperText Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2. What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"hello",
        c:"Hyper",
        d:"HyperText Markup Language",
        ans:"ans1"
    },
    {
        question:"Q3. What is the full form of HTTP?",
        a:"what",
        b:"hello",
        c:"Hyper",
        d:"HyperText Transfer Protocol",
        ans:"ans4"
    },
    {
        question:"Q4. What is the full form of JS?",
        a:"JavaScript",
        b:"hello",
        c:"Hyper",
        d:"HyperText Markup Language",
        ans:"ans1"
    },
]

const questions =  document.querySelector(".question");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer")
const showScore = document.querySelector("#showScore");



const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

let questionCount = 0;
let quesValue;
let score = 0;

const queAnsReload = ()=>{
    quesValue = quizDB[questionCount]
    questions.innerHTML = quesValue["question"];

    option1.innerHTML = quesValue["a"];
    option2.innerHTML = quesValue["b"];
    option3.innerHTML = quesValue["c"];
    option4.innerHTML = quesValue["d"];
}
queAnsReload()
const deSelect = ()=>{
    answers.forEach((el)=>{
        if(el.checked){
            el.checked = false;
        }
    })
}

submit.addEventListener("click",()=>{
    let checking;
    answers.forEach((el)=>{
        if(el.checked){
            checking = el.id
        }
    })
    deSelect()
    questionCount++;
     
    if(quesValue["ans"]==checking){
        score++;
    }
    if(questionCount<quizDB.length){
        queAnsReload();
    }
   else{
    showScore.innerHTML = `<h3>You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onClick="location.reload()">Play again</button>
    `
    showScore.classList.remove("scoreArea")
    submit.style.display="none";
   }
   
})

