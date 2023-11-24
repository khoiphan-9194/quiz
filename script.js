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

//var skipEl = document.querySelector(".skip");
//var end_titleEl = document.querySelector(".end-title");
//var answer_buttonEl = document.querySelector(".answer-button");
//var answer_containerEl = document.querySelector(".answer-container");
//var mainpageEl = document.querySelector(".main-page");
//var question_displayEl = document.querySelector(".question-display");
//var hideEl = document.querySelector(".hide");
//var quiz_boxEl = document.querySelector(".quiz-box");

var timEl = document.querySelector(".time");
var viewscoreEl = document.querySelector(".view-scores");
var instructionsEl = document.querySelector(".instruction");
var start_buttonEl = document.querySelector(".start-button");
var questionEl = document.querySelector(".question");
var displayEl = document.querySelector(".display");
var endGameEl = document.querySelector(".endGame");
var current_scoreEl = document.querySelector(".current-score");
var submitEl = document.querySelector(".submit");
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


var timer= 60;
var score =0;
var correct = 10;
var questionIndex = 0;
var questionDisplay = document.querySelector(".question-display");
var buttonDisplay = document.querySelector(".answer-button");
var buttonContainer =[button1,button2,button3,button4];
var timeInterval;




//object array
const question_data = [
    {
        question: "Which built-in method returns the length of the string?",
        answers: ["length()", "size()", "index()", "none of the above"], //array of answer
        correctAnswer: 0,
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        answers: ["toLowerCase()", "toLower()", "changeCase(case)", "none of the above"],
        correctAnswer: 0,
    },
    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        answers: ["concat()", "join()", "pop()", "map()"],
        correctAnswer: 1,
    },
    {
        question: "Choose the correct HTML element for the largest heading: ",
        answers: ["<h6>", "<heading>", "<head>", "<h1>"],
        correctAnswer: 3,
    },
    {
        question: "Which tag is used when creating a list with a specific order (by default, will show up as a numbered list)?",
        answers: ["<dl>", "<ol>", "<list>", "<ul>"],
        correctAnswer: 2
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




function checkAnswer(selectedAnswer)
{
    var text;
    if(selectedAnswer===question_data[questionIndex].correctAnswer)
    {
      text = getAnswer.textContent = "Correct";

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
     
    timEl.textContent = " timed out !!!!";
       // display questions and answers
    questionDisplay.classList.add("hide");
    buttonDisplay.classList.add("hide");
    endGameEl.classList.remove("hide");
     clearInterval(timeInterval);
    
}



function startHider() {
    //remove instructions and start Quiz button from page
    instructionsEl.classList.add("hide");
    start_buttonEl.classList.add("hide");
  
    // display questions and answers
    questionDisplay.classList.remove("hide");
    buttonDisplay.classList.remove("hide");
    displayEl.classList.remove("hide");
    
   
}



function savedScore()
{
    var achievedScore = score;
    current_scoreEl.textContent = achievedScore;
   // console.log(achievedScore);
   
}



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

            endGameEl.classList.add("hide");
            displayEl.classList.add("hide");
            high_scoresEl.classList.remove("hide");
            
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


//------------------------------------ADD EVENT LISTENER------------------------------------


    start_buttonEl .addEventListener("click", function (event) {
        event.preventDefault();
        startHider();
        showQuestion();
        countdown();
    });
    


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
    
          