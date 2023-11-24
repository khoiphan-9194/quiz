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
var current_scoreEl = document.querySelector(".current-score");
var submitEl = document.querySelector(".submit");
var skipEl = document.querySelector(".skip");
var high_scoresEl = document.querySelector(".high-scores");
var high_scores_listEl = document.querySelector(".high-scores-list");
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





var questionDisplay = document.querySelector(".question-display");
var buttonDisplay = document.querySelector(".answer-button");

var buttonContainer =[button1,button2,button3,button4];
var timeInterval;



var timer= 40;






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
        correctAnswer: 1,
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: ["=", "-", "x", "*"],
        correctAnswer: 2,
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
        correctAnswer: 3,
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        correctAnswer: 3
    }
];


function showQuestion()
{
    
    if(questionIndex<question_data.length)
    {
    questionEl.textContent = question_data[questionIndex].question;
    for(let i =0; i<question_data[questionIndex].answers.length; i++)
    {
       buttonContainer[i].textContent = question_data[questionIndex].answers[i];
    }
    }

    else
    {
        Timeup();

        savedScore();
        submission();
        //
        
    }
}










//<h4 id="answer">answer: </h4>
function checkAnswer(selectedAnswer)
{
    var text;
    if(selectedAnswer===question_data[questionIndex].correctAnswer)
    {
      text = getAnswer.textContent = "correct";

        score = score+correct;
        scoreDisplay.textContent = score;
        
      


    }

    else{
       text= getAnswer.textContent = "Incorrect";
       timer -= 10; 

    
     
    };

  
   
  
    setTimeout(function(){
        getAnswer.textContent="";
    }, 1000);

    questionIndex++;
   
    showQuestion();
}














function countdown() {
     timeInterval = setInterval(function () {

        if (timer <= 0) {
            
            Timeup();
            submission();
            
        } else {
            timer--;
            timEl.textContent = (" " + timer);
        }
    }, 1000);
    
};



function Timeup()
{
   
      //stop timer
     
      timEl.textContent = "Timed out !!!!";
       // display questions and answers
    questionDisplay.classList.add("hide");
    buttonDisplay.classList.add("hide");

     clearInterval(timeInterval);
      
    

     
     
}





start_buttonEl .addEventListener("click", function () {
    startHider();
    showQuestion();
    countdown();
});





function startHider() {
    //remove instructions and start Quiz button from page
    instructionsEl.classList.add("hide");
    start_buttonEl.classList.add("hide");
  //
   

    // display questions and answers
    questionDisplay.classList.remove("hide");
    buttonDisplay.classList.remove("hide");
   
}



function savedScore()
{
    var achievedScore = score;
    current_scoreEl.textContent = achievedScore;
   // console.log(achievedScore);
   
}




button1.addEventListener("click",function()
{


checkAnswer(0)
}
);

button2.addEventListener("click",function()
{


checkAnswer(1)
}
);

button3.addEventListener("click",function()
{

checkAnswer(2);
}
);

button4.addEventListener("click",function()
{


checkAnswer(3);
}
);






  
  










function submission()
{

    //submit button is disabled, it will be enabled only when user inputs a value into the input field
        var entered_input = document.querySelector("#initials");
       
        entered_input.addEventListener("keyup", function () {
               submitEl.disabled = !entered_input.value;
           });

           submitEl.addEventListener("click",function(event){
               
               event.preventDefault();
               //console.log(initial_data);
               var initial_data = document.querySelector("#initials").value;

               var score_dataArr =[];
               var score_data ={

                   scoreEl: score,
                   initialEl: initial_data
               }

               score_dataArr.push(score_data);
               score_dataArr = score_dataArr.concat(JSON.parse(localStorage.getItem('score_dataArr')||'[]'));
               console.log(score_dataArr);

    

            localStorage.setItem("score_dataArr", JSON.stringify(score_dataArr));
            renderMessage();
             
               });


               
   

    }



    function renderMessage() {
        var score_list = JSON.parse(localStorage.getItem("score_dataArr"));
        for (let i = 0; i < score_list.length; i++) {
            var ListEl = document.createElement("li");
            ListEl.textContent = score_list[i].initialEl + "- " + score_list[i].scoreEl;
            high_scores_listEl.appendChild(ListEl);
        }

    }


   
             //clear scores from local storage and remove the current list
             clear_scoresEl.addEventListener("click", function () {
                localStorage.clear();
                high_scores_listEl.innerHTML = '';
              
            });
        

            viewscoreEl.addEventListener("click",function(event)
            {
                event.preventDefault();
                renderMessage();
            });

            go_backEl.addEventListener("click",function(){
        
                location.reload();
            
              });   
    
          