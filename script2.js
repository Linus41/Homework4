
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


// when start button is clicked, a question with multiple choice appears
function myFunction() {

    if (document.getElementById("question-one").style.display = "none") {
        document.getElementById("question-one").style.display = "block";
    }
    // put timer here so it fires when onclick is triggered?

    timerBegin();
}

function timerBegin() {
    //    use mins and secs, declared above globally
    timerInterval = setInterval(function () {
        if(parseInt(secs) === 00) {
            secs = 59;
        } 
        secs--;
        if(parseInt(mins) === 1) {
            mins--;
        } 
        
        document.getElementById("seconds").textContent = secs;
        document.getElementById("minutes").textContent = mins;
    }, 1000);
    console.log(secs, mins, "is this working", timerInterval);
}
// why aren't the first, second, third, fourth questions void suddenly??
// answer: because of indentation, myFunction held all functions inside of it
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
        document.getElementById("score").style.display = "block"
        document.getElementById("demo").innerHTML = count;
        clearInterval(timerInterval);
    }
}



//   //Do code for showing the number of seconds here
// }

// this function counts and stores how many times correct answers were chosen 
function correct() {
    var score = document.getElementsByClassName("correct");
    if (score) {
        count = count + 3;
    }

    console.log(count);
}

// why won't no points render as 0?
if (score === false) {
    count = 0;
}

// this tells the innerHTML to disply the final score

// fires startTimer function when startButton is clicked
// counter.addEventListener("click", timer)