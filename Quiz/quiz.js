const quizData = [


{
   question : "What does first Iphone Announced",

   a:"Sept 13,2007",
   b:"Jan 9,2007",
   c:"Sept 9,2007",
   d:"June 29,2007",
   correct:"b",
},
{
   question : "What is the power og G Wagon",

   a:"416 hp",
   b:"810 hp",
   c:"626 hp",
   d:"511 hp",

   correct:"a",
},
{
   question : "What is the first commercially available programming language",

   a: "C++",
   b:"C",
   c:"Fortran",
   d:"Java",

   correct:"c",
},
{
   question : "Who discovered Canada",

   a: "Christopher Columbus",
   b:"Jacques Cartier",
   c:"James Cook",
   d:"John Cabot",

   correct:"b",
}

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
  deselectAnswers();
	const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
            	answer = answerEL.id;
            }
      	
      });

      return answer;

	}

function deselectAnswers () {
	answerEls.forEach(answerEL=> {
            answerEL.checked = false;
      	
      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();
   
   if(answer){
         if(answer === quizData[currentQuiz].correct){

         	score++;
         }
         
         currentQuiz++;

         if(currentQuiz < quizData.length){
         	loadQuiz();
         }
         else{
         	quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>`;
         }

   }











});