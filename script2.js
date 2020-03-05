
document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";
document.getElementById("question-three").style.display = "none";
document.getElementById("question-four").style.display = "none";


document.getElementById("score").style.display = "none";


// when start button is clicked, a question with multiple choice appears
function myFunction() {

    if (document.getElementById("question-one").style.display = "none") {
        document.getElementById("question-one").style.display = "block";
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
// This function changes the screen to score element block
function fourthQuestion() {
    var quest4 = document.getElementById("question-four").innerHTML;
    if (quest4) {
        document.getElementById("question-four").style.display = "none";
        document.getElementById("score").style.display = "block";
    }
}

var scoreKeep = document.getElementById("score");


    
// declare count variable to store points
var count = 0;

function correct() {
    var score = document.getElementsByClassName("correct");
    if (score) {
        count = count + 3;
    }
    // why won't no points render as 0?
    if (score != true) {
        count = 0;
    }
    console.log(count);

    document.getElementById("score").innerHTML = ("Your Final Score Is " + count);
    
}





