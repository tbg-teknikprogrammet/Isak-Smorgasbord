// Lightbox
document.querySelector("#dab").addEventListener("click", function(){
    document.querySelector("#light").style = "display:block;"
});

document.querySelector("#light").addEventListener("click", function(){
    document.querySelector("#light").style = "display:none;"
});

document.addEventListener("keydown", function(event){
    if(event.which == 27){
        document.querySelector("#light").style = "display:none;"
    }
});

document.querySelector("#dab").style.cursor = "pointer";

// //------------------------------

// SLIDESHOW
var slideShow = ["assets/images/Dabmeister.jpg", "assets/images/Snke.jpg", "assets/images/Xpoke.jpg"]
var slideIndex = 1;
document.querySelector("#next").style.cursor = "pointer";
document.querySelector("#prev").style.cursor = "pointer";

document.querySelector("#slide img").src=slideShow[slideIndex];

document.querySelector("#prev").addEventListener("click", function(){
    slideIndex += -1;
    if(slideIndex < 0 ) {
        slideIndex = slideShow.length-1;
    }
    document.querySelector("#slide img").src=slideShow[slideIndex];
});

document.querySelector("#next").addEventListener("click", function(){
    slideIndex += 1;
    if(slideIndex > slideShow.length-1) {
        slideIndex = 0;
    }
    document.querySelector("#slide img").src=slideShow[slideIndex];
});
// --------------------------------

//Seizure
var cindex = 0
document.addEventListener("keydown", function(event){
    if(event.which == 70){
        document.querySelector("h1").innerHTML = "Pressed X to unpay respect";
        
        var colors = ["red", "green", "blue"]
        
        document.querySelector("#seiz").style.backgroundColor = colors[cindex];
        cindex += 1;

        document.querySelector("#seiz p").style.color = "black";
    }

    if(cindex == colors.length) {
        cindex = 0;
    }
});

document.addEventListener("keydown", function(event){
    if(event.which == 88) {
        document.querySelector("#seiz").style.backgroundColor = "rgb(44,47,51)";

        document.querySelector("h1").innerHTML = "";

        document.querySelector("#seiz p").style.color = "white";
    }
});
//------------------------------

// timegame

var stop = 0
var time = document.querySelector("#time")

time.addEventListener("mouseover", function(){
    var seconds = 0;
    var green = 128
    var color = "rgb(00," + green + ",00)"

    time.style.backgroundColor = color;

    function timer() {
        seconds += 1;
        document.querySelector("#time p").innerHTML = "You have hovered for " + seconds + " seconds";
        green += 5;
        color = "rgb(00," + green + ",00)"
        if(green > 255) {
            green = 10;
            document.querySelector("#time p").style.color = "white";
        }
        if(green > 128) {
            document.querySelector("#time p").style.color = "black";
        }
        time.style.backgroundColor = color;
    }
    stop = setInterval(timer, 1000);
});

time.addEventListener("mouseout", function(){

    time.style.backgroundColor = "red";
    clearInterval(stop);

    setTimeout(function() {
        time.style.backgroundColor = "rgb(44,47,51)";
        document.querySelector("#time p").innerHTML = "";
    },3000)
        
});

//------------------------------

// Click thing
var clicks = 0;
var button = document.querySelector("input");

button.addEventListener("click", function(){

    var marginLeft = Math.random() * (+89 - +0) + +0; //89
    var marginTop = Math.random() * (+72 - +0) + +0; // 72

    button.style.marginLeft = marginLeft + "%";
    button.style.marginTop = marginTop + "%";

    clicks += 1;
    document.querySelector("#clicker p").innerHTML = "You have clicked " + clicks + " times!";
    
});

//----------------------------------

// Video player
var video = document.querySelector("#videoPlayer video");
var play = document.querySelector("#play");
var slider = document.querySelector("#volume");
var rewindButton = document.querySelector("#rewind");
var forwardButton = document.querySelector("#forward");
var restartButton = document.querySelector("#restart");
var playState = 0;
video.volume = 0.2;


play.addEventListener("click", function(){

    if(playState == 0) {
        video.play();
        playState = 1;
        play.value = "Pause";
    }  
        
    else if(playState == 1) {
        video.pause();
        playState = 0;
        play.value = "Play";
    }
});

slider.oninput = function() {
    video.volume = this.value/100;
}

rewindButton.addEventListener("click", function(){
    video.currentTime = video.currentTime - 5;
});

forwardButton.addEventListener("click", function(){
    video.currentTime = video.currentTime + 5;
});

restartButton.addEventListener("click", function(){
    video.currentTime = 0;
});

