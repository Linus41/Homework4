
// the following functions need to store using variables, how to do that?
function firstQuestion() {


     function firstAnswer() {
          document.getElementById("demo").innerHTML = "Second Answer";

     }
     function secondAnswer() {
          document.getElementById("demo2").innerHTML = "Second Answer";
     }

     function thirdAnswer() {
          document.getElementById("demo3").innerHTML = "Second Answer";
     }
     function fourthAnswer() {
          document.getElementById("demo4").innerHTML = "Second Answer";
     }
}
function secondQuestion() {


     var firstAnswer = document.getElementById("demo").innerHTML = "Third Answer";

     
     function secondAnswer() {
          document.getElementById("demo2").innerHTML = "Third Answer";
     }

     function thirdAnswer() {
          document.getElementById("demo3").innerHTML = "Third Answer";
     }
     function fourthAnswer() {
          document.getElementById("demo4").innerHTML = "Third Answer";
     }
}
function replaceBlock() {
     document.getElementById("answers").innerHTML = firstAnswer;   
}