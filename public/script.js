var timeLeft = 30;
let button = document.getElementsByClassName("sumbit");
var elem = document.getElementById('timer'); 
    
var timerId = setInterval(Countdown, 1000); 

function Countdown() { 
    if (timeLeft == -1) {
      clearTimeout(timerId);
      console.log("times up!");
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
} 

console.log("yes");

button.addEventListener("click", (e) => {
    console.log(this.sumbit); // WARNING: `this` is not `my_element`
    console.log(e.currentTarget === this); // logs `false`
});
