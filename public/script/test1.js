//javascript for mcq ection    

const quizdata = [
    {
        question:"Q1. What is the full form of HTML ?",
        a:"Hyper Text Markup Language",
        b:"Hello to My Lord",
        c:"Hyper Text Make up Language",
        d:"Hyper Thread Making Language",
        ans:"ans1"
    },

    {
        question:"Q2. What is the full form of CSS ?",
        a:"Chrome Style Sheet",
        b:"Cascading Style Sheet",
        c:"Cross Over Stylesheet",
        d:"Clear Style Sheet",
        ans:"ans2"
    },

    {
        question:"Q3. Who is the founder of JAVA ?",
        a:"Dennis Ritchi",
        b:"Bazarne Stroutope",
        c:"Charles Babage",
        d:"James Gosling",
        ans:"ans4"
    },
    {
        question:"Q4. How many Keywords are there in C langugae ?",
        a:"36",
        b:"21",
        c:"32",
        d:"None of the Above",
        ans:"ans3"
    }


];


const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score =0;

const loadQuestion =()=>{
    const questionList = quizdata[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    showScore.innerHTML = `
        <h3>Question ${questionCount+1}/${quizdata.length}</h3>
    `
}

loadQuestion();
function getCheckAnswer() {
    let answer;
    answers.forEach((currentAnswer) => {
        if (currentAnswer.checked) {
            answer = currentAnswer.id;
        }

    });
    return answer;
}

const deSelectOptions= ()=>{
    answers.forEach((currentAnswer)=>{
        currentAnswer.checked = false;
    })
}

submit.addEventListener('click',()=>{
    const checkAnswer = getCheckAnswer();
    
    if(checkAnswer === quizdata[questionCount].ans){
        score ++;
        console.log(score);
    };

    questionCount += 1;
    if(questionCount < quizdata.length){
        deSelectOptions();
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
           <h3> Your Score:  ${score}/${quizdata.length} </h3>
           <button class="btn" onclick="location.reload()">Restart</button>
           <h3> Correct: ${score}&nbsp&nbsp&nbsp&nbspIncorrect: ${quizdata.length - score} </h3>
        `;

        // showScore.classList.remove('scoreArea');
    }
});