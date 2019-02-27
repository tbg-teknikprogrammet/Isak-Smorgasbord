// Events
// select the button

var btn = document.querySelector("button")

// manipulate
btn.addEventListener("click", function() {
    document.querySelector("p").innerHTML = "Yeetus I gotus the clickus"
});


var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function(){
        this.style.textDecoration = "line-through";
    });
}

// color changer

var btnToggle = document.querySelector("#btnToggleBg");
btnToggle.addEventListener("click", function(){
    document.getElementsByTagName("body")[0].classList.toggle("toggleBg")
 });

 