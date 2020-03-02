
<!-- Pomodoro Timer code borrowed from levelup.gitconnected.com -->
<script>
var seconds = 0;
var interval ;
function pomodoro(mins) {
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
 
        seconds--;
        if(!seconds){
             clearInterval(interval); 
             alert("🚨 It is Cool 😎. I wish you could share ");
        }
   },1000)
}
</script> 

<!--  -->

<!-- HTML and script for how to replace text with new text via innerHTML property -->
<p id="demo" onclick="myFunction()">Click me to change my HTML content (innerHTML).</p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed!";
}