
// tell html to keep all questions hidden for now

document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";
document.getElementById("question-three").style.display = "none";
document.getElementById("question-four").style.display = "none";
document.getElementById("initials").style.display = "none";

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

    // timer is triggered in the start button onclick event
    timerBegin();
}
//this function counts down the timer
function timerBegin() {
    //    use mins and secs, declared above globally
    timerInterval = setInterval(function () {
        if (parseInt(secs) === 00) {
            secs = 3; //change back to 59


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

    console.log(secs, mins, "is this working", timerInterval);

}

function theEnd() {
    if (parseInt(secs) === 0) {
        document.getElementById("initials").style.display = "block";
        document.getElementById("score").style.display = "block";
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

        document.getElementById("demo").innerHTML = count;
        clearInterval(timerInterval);
    }
    theEnd();
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
// if (score === false) {
//     count = 0;
// }

