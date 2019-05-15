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

var button = document.querySelector("input");

button.addEventListener("click", function(){
    console.log("yeet")

    var rn1 = Math.random() * (+200 - +0) + +0;
    var rn2 = Math.random() * (+200 - +0) + +0;

    margin = rn1 + 0 + 0 + rn2

    button.style.marginLeft = "200px;" // does not work yet
});