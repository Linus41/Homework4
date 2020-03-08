
// tell html to keep all questions hidden for now

document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";
document.getElementById("question-three").style.display = "none";
document.getElementById("question-four").style.display = "none";

// tell html to keep score box hidden for now
document.getElementById("score").style.display = "none";

// timer
var mins = document.getElementById("minutes").textContent;
var secs = document.getElementById("seconds").textContent;
var timerInterval;

// score
var count = 0;
var initials; 

// when start button is clicked, a question with multiple choice appears and timer begins
function myFunction() {

    if (document.getElementById("question-one").style.display = "none") {
        document.getElementById("question-one").style.display = "block";
    }

    // timer is triggered in the start button onclick event
    timerBegin();
}
//this function counts down the timer
function timerBegin() {
    timerInterval = setInterval(function () {
        if (parseInt(secs) === 00) {
            secs = 59; 
        }
        secs--;
        if (parseInt(secs) === 0) {
            alert("Time's up!");
            clearInterval(timerInterval);
            theEnd();
        }
        if (parseInt(mins) === 1) {
            mins = "";
        }

        document.getElementById("minutes").textContent = mins;
        document.getElementById("seconds").textContent = secs;
    }, 1000);



}
// this function makes the score box appear and a prompt for initials appear
function theEnd() {
    if (parseInt(secs) === 0) {
       
        document.getElementById("score").style.display = "block";

        document.getElementById("demo").innerHTML = count;
        clearInterval(timerInterval);

    }
   
}
// The following three functions replace current question with next question
function firstQuestion() {

    var quest1 = document.getElementById("question-one").innerHTML;

    if (quest1) {
        document.getElementById("question-one").style.display = "none";
        document.getElementById("question-two").style.display = "block";
    }
}

function secondQuestion() {

    var quest2 = document.getElementById("question-two").innerHTML;

    if (quest2) {
        document.getElementById("question-two").style.display = "none";
        document.getElementById("question-three").style.display = "block";
    }
}

function thirdQuestion() {
    var quest3 = document.getElementById("question-three").innerHTML;
    if (quest3) {
        document.getElementById("question-three").style.display = "none";
        document.getElementById("question-four").style.display = "block";
    }
}
// This function changes the from fourth question to score element
function fourthQuestion() {
    var quest4 = document.getElementById("question-four").innerHTML;
    if (quest4) {
        document.getElementById("question-four").style.display = "none";   
    }
    if (secs !== 0) {
        clearInterval(timerInterval);
        
    }
    if (timerInterval) {
        secs === 0;
    }
    theEnd();
}





// this function counts and stores how many times correct answers were chosen 
function correct() {
    var score = document.getElementsByClassName("correct");
    if (score) {
        count = count + 3;
    }

    console.log(count);
}

//how do I store the final score (var count) and initials in local storage?
// this is my attempt:
window.localStorage.setItem(JSON.stringify(count), "");
window.localStorage.setItem(initials, "");
console.log(initials);