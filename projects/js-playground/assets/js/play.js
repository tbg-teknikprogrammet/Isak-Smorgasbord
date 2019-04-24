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

// //------------------------------

// SLIDESHOW
var slideShow = ["assets/images/Dabmeister.jpg", "assets/images/Snke.jpg", "assets/images/Xpoke.jpg"]
var slideIndex = 1;
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

document.querySelector("#time").addEventListener("mouseover", function(){

    document.querySelector("#time").style.backgroundColor = "red";

    var seconds = 0;

    function timer() {
        seconds += 1;
        document.querySelector("#time p").innerHTML = "You have hovered for " + seconds;
    }
    var stop = setInterval(timer, 1000);
});

document.querySelector("#time").addEventListener("mouseout", function(){

    document.querySelector("#time").style.backgroundColor = "green";
    clearInterval(stop);
});