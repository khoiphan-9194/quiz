// a set of variables needed in this assignment

/*
var allClasses = [];

var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.toString().split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

console.log(allClasses);
*/


var timEl = document.querySelector(".time");
var viewscoreEl = document.querySelector(".view-scores");
var mainpageEl = document.querySelector(".main-page");
var instructionsEl = document.querySelector(".instruction");
var quiz_boxEl = document.querySelector(".quiz-box");
var start_buttonEl = document.querySelector(".start-button");
var question_displayEl = document.querySelector(".question-display");
var hideEl = document.querySelector(".hide");
var questionEl = document.querySelector(".question");
var answer_buttonEl = document.querySelector(".answer-button");
var answer_containerEl = document.querySelector(".answer-container");
var displayEl = document.querySelector(".display");
var endGameEl = document.querySelector(".endGame");
var end_titleEl = document.querySelector(".end-title");
var current_scoreEl = document.querySelector("current-score");
var submitEl = document.querySelector(".submit");
var skipEl = document.querySelector(".skip");
var high_scoresEl = document.querySelector(".high-scores");
var high_scores_listEl = document.querySelector(".high_socres_list");
var go_backEl = document.querySelector(".go-back");
var clear_scoresEl = document.querySelector(".clear-scores");




var scoreDisplay = document.getElementById("score");
var getAnswer = document.getElementById("answer");
var button1 = document.getElementById("btnAns-1");
var button2 = document.getElementById("btnAns-2");
var button3 = document.getElementById("btnAns-3");
var button4 = document.getElementById("btnAns-4");



var score =0;
var correct = 10;
var questionIndex = 0;


var timy = document.querySelector(".time");


var questionDisplay = document.querySelector(".question-display");
var buttonDisplay = document.querySelector(".answer-button");

var buttonContainer =[button1,button2,button3,button4];



var timer= 60;






//object array
const question_data = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<javascript>", "<js>", "<scripting>"], //array of answer
        correctAnswer: 0,
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["if i == 5 then", "if i = 5 then", "if(i == 5)", "if i = 5"],
        correctAnswer: 2,
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["=", "-", "x", "*"],
        correctAnswer: 0,
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
        correctAnswer: 2,
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        correctAnswer: 3
    }
];


function showQuestion()
{
    questionEl.textContent = question_data[questionIndex].question;
    for(let i =0; i<question_data[questionIndex].answers.length; i++)
    {
       buttonContainer[i].textContent = question_data[questionIndex].answers[i];
    }
}


showQuestion();




button1.addEventListener("click",function()
{
//questionIndex++;

checkAnswer(0)
}
);

button2.addEventListener("click",function()
{
//questionIndex++;

checkAnswer(1)
}
);

button3.addEventListener("click",function()
{
//questionIndex++;

checkAnswer(2);
}
);

button4.addEventListener("click",function()
{
//questionIndex++;

checkAnswer(3);
}
);




//<h4 id="answer">answer: </h4>
function checkAnswer(selectedAnswer)
{
    var text;
    if(selectedAnswer===question_data[questionIndex].correctAnswer)
    {
      text = getAnswer.textContent = "correct";

   
      
      

    }

    else{
       text= getAnswer.textContent = "Incorrect";

    
     
    };

  
   
  
    setTimeout(function(){
        getAnswer.textContent="";
    }, 1000);

    questionIndex++;
   
    showQuestion();
}







function countdown() {
    var timeInterval = setInterval(function () {
        if (timer == 0) {
            clearInterval(timeInterval);
            Timeup();
        } else {
            timer--;
            timy.textContent = (" " + timer);
        }
    }, 1000);
};



function Timeup()
{
    timy.textContent = "het gio roi !!!!";
}


start_buttonEl
.addEventListener("click", function () {
    startHider();
    countdown();
});





function startHider() {
    //remove instructions and start Quiz button from page
    instructionsEl.classList.add("hide");
    start_buttonEl.classList.add("hide");
   

    // display questions and answers
    questionDisplay.classList.remove("hide");
    buttonDisplay.classList.remove("hide");
   
}





