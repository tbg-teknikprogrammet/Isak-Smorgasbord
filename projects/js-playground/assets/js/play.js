// Lightbox
document.querySelector("#dab").addEventListener("click", function(){
    document.querySelector("#light").style = "display:block;"
});

document.querySelector("#light").addEventListener("click", function(){
    document.querySelector("#light").style = "display:none;"
});

// SLIDESHOW
var slideShow = ["assets/images/Dabmeister.jpg", "assets/images/Snke.jpg", "assets/images/Xpoke.jpg"]
var slideIndex = 1;
document.querySelector("#slide img").src=slideShow[slideIndex];

document.querySelector("#prev").addEventListener("click", function(){
    slideIndex += -1;
    if(slideIndex < 0 ) {
        slideIndex = slideShow.length;
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



