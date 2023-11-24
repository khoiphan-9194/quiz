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
        question: "Ngay nao la ngay dam cuoi?",
        answers: ["11/01/2018", "06/19/2022", "01/07/1994", "Biet lam con cho"], //array of answer
        correctAnswer: 0,
    },
    {
        question: "Gap nhau dau tien o dau?",
        answers: ["shopping mall", "de anza college", "vietnam", "biet lam con heo"],
        correctAnswer: 1,
    },
    {
        question: "con heo thich an gi nhat",
        answers: ["thit bo", "tra sua", "pho bo", "banh mi"],
        correctAnswer: 2,
    },
    {
        question: "con cun thich an gi nhat",
        answers: ["an kem", "uong tra sua", "an banh ngot", "an ga chien"],
        correctAnswer: 2,
    },
    {
        question: "nam sau cun va heo se di dau",
        answers: ["Japan", "VietNam", "Hawaii", "Khong di dau het"],
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
     
      timEl.textContent = "Timed out !!!!";
       // display questions and answers
    questionDisplay.classList.add("hide");
    buttonDisplay.classList.add("hide");
    endGameEl.classList.remove("hide");
  
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
    displayEl.classList.remove("hide");
    
   
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
    
          