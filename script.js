
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
var timerInterval;
//when called, this function starts the countdown timer
function timerBegin() {

    timerInterval = setInterval(function () {

        if (parseInt(secs) === 00) {
            secs = 59;
        }
        secs--;

        if (parseInt(mins) === 1) {
            mins = "";
        }

        document.getElementById("minutes").textContent = mins;
        document.getElementById("seconds").textContent = secs;
    }, 1000);




}
function myStopFunction() {
    clearTimeout(timerInterval);
}
// this function makes the score box appear and a prompt for initials appear
function theEnd() {
    if (parseInt(secs) === 0) {
        document.getElementById("score").style.display = "block";
        document.getElementById("demo").innerHTML = count;

    }

    if (parseInt(secs) > 0) {
        // clearInterval(timerInterval);
        secs === 0;
    }
    myStopFunction();
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
var initials;
// This function changes the from fourth question to score element
function fourthQuestion() {
    var quest4 = document.getElementById("question-four").innerHTML;
    if (quest4) {
        document.getElementById("question-four").style.display = "none";
    }
    if (parseInt(secs) > 0) {
        clearTimeout(timerInterval);
    }

    initials = prompt("The end! Please enter your initials");
    document.getElementById("score").style.display = "block";
    document.getElementById("demo").innerHTML = count;
    
    localStorage.setItem(initials, "");
    localStorage.setItem(JSON.stringify(count), "");
    console.log(localStorage);



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

