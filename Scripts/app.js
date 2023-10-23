
const questionsArr = [ // the array which will contain all the questions and their solutions of my quiz
    {

    }
]


var header = document.querySelector(".header")
var opening = document.querySelector(".opening")
var container = document.querySelector(".container")
var divider = document.querySelector(".divider")
var result = document.querySelector(".result")


var scores = [];
var mark = 0;
var index = 0;
var record = [];


function start(){
    console.log("Run");
    //  restart the page
    // var removeAll = container;
    // while(removeAll.hasChildNodes()){
    //     removeAll.removeChild(removeAll.firstChild)
    // }

    // create view high scores

    var viewScore = document.createElement("p");
    viewScore.classList.add("banner", "view-score")
    viewScore.textContent = "View High Score";

    // create time
    var time = document.createElement("p")
    time.classList.add("banner", "time")
    time.textContent = "Time: ";


    var second = document.createElement("span")
    second.setAttribute("id", "second")
    time.appendChild(second)

    // create container title
    var opTitle = document.createElement("h1")
    opTitle.classList.add("title")
    opTitle.textContent = "Coding Quiz Challenge"

    // create container text
    var opText = document.createElement("p")
    opText.classList.add("text")
    opText.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by 10 seconds and 10 scores!"

    // create container start btn
    var startBtn = document.createElement("button")
    startBtn.classList.add("btn", "btn-start")
    startBtn.textContent = "Start Quiz"

    header.appendChild(viewScore);
    header.appendChild(time);
    container.appendChild(opTitle)
    container.appendChild(opText);
    container.appendChild(startBtn);


    // ckick to start the timer start count down
    document.querySelector(".btn-start").addEventListener("click", timer)
    // click to view the high scores
    document.querySelector(".view-score").addEventListener("click", viewHighScore);

}


function createQuiz(){
   //to be made later after the questions array has been made
}



function timer(){
    var timeLeft = 70;

    var timeInterval = setInterval(function(){
        var timeEl = document.querySelector("#second");
        timeEl.textContent = timeLeft = "s"
        timeLeft--;

        if(result.textContent.match(/wrong/gi)) { // if wrong - 10 seconds
            timeLeft -= 10 // time:Left = timeLeft - 10

        }

        
    })

}

function viewHighScore(){

}



start()