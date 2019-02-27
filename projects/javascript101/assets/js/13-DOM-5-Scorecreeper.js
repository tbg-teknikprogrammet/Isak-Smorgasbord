var p1Score = 0;
var p2Score = 0;
var max = document.querySelector("input").value;
var isWin = false;
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");

p1.innerHTML = p1Score;
p2.innerHTML = p2Score;



document.querySelector("#max").innerHTML = max;
document.querySelector("input").addEventListener("click", function(){
    max = document.querySelector("input").value;
    document.querySelector("#max").innerHTML = max;
});
    
document.querySelector("#p1Btn").addEventListener("click", function(){
    if(isWin == false) {
        p1Score += 1;
        p1.innerHTML = p1Score;
    }
    if(p1Score == max) {
        document.querySelector("h1").innerHTML = "Player 1 is yeeting";
        isWin = true;
        p1.classList.add("winner");
        p2.classList.add("looser");
    }
});

document.querySelector("#p2Btn").addEventListener("click", function(){
    if(isWin == false) {
        p2Score += 1;
        p2.innerHTML = p2Score;
    }
    if(p2Score == max) {
        document.querySelector("h1").innerHTML = "Player 2 is yeeting";
        isWin = true;
        p2.classList.add("winner");
        p1.classList.add("looser");
    }
});

document.querySelector("#resetBtn").addEventListener("click", function() {
    p1Score = 0;
    p1.innerHTML = p1Score;
    p1.classList.remove("winner")
    p1.classList.remove("looser")
    p2Score = 0;
    p2.innerHTML = p2Score;
    p2.classList.remove("winner")
    p2.classList.remove("looser")
    isWin = false;
    document.querySelector("H1").innerHTML = "";
});

