


//<h3>Time:<span class="time"> (lat nua bo time vao)</span></h3>

var timy = document.querySelector(".time");
var butt = document.querySelector(".start-button");
var instructionsEl = document.querySelector(".instruction");
var questionDisplay = document.querySelector(".question-display");
var buttonDisplay = document.querySelector(".answer-button");



var timer= 10;



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


butt.addEventListener("click", function () {
    startHider();
    countdown();
});





function startHider() {
    //remove instructions and start Quiz button from page
    instructionsEl.classList.add("hide");
    butt.classList.add("hide");
   

    // display questions and answers
    questionDisplay.classList.remove("hide");
    buttonDisplay.classList.remove("hide");
   
}





/*
function countdown() {
    timi = setInterval(function () {
       
            timer--;
            timi.textContent = (timer);

            if(timer === 0) {
                // Stops execution of action at set interval
                clearInterval(timi);
                // Calls function to create and append image
               
              }
        
    }, 1000);
};


*/


//<button class ="start-button">Start Quiz</button>
/*
unction setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

*/