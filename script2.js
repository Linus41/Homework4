// when start button is clicked, a question with multiple choice appears
document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";
document.getElementById("question-three").style.display = "none";
document.getElementById("question-four").style.display = "none";


function myFunction() {

    if (document.getElementById("question-one").style.display = "none") {
        document.getElementById("question-one").style.display = "block";
    }

}
// This function only switches question one to question two and no further. Could it be that each switch needs its own function?
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
function scoreKeep() {
    var correct = document.getElementsByClassName("correct");
    if(correct) {
        
    }
}