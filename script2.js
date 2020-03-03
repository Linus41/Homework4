// when start button is clicked, a question with multiple choice appears
document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";

function myFunction() {

    if (document.getElementById("question-one").style.display = "none") {
        document.getElementById("question-one").style.display = "block";
    }

}
function nextQuestion() {
    var quest1 = document.getElementById("question-one").innerHTML;
    if(quest1) {
        document.getElementById("question-one").style.display = "none";
        document.getElementById("question-two").style.display = "block";
    }
}

