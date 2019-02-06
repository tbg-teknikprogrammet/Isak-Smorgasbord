// select
var element = document.getElementById("highlight");

// manipulate
element.style.color = "orange";
element.style.border = "2 px solid black";
element.style.fontSize = "20px";
element.style.marginTop = "30px";

var ele = document.querySelector("h1");
ele.classList.add("some-class");

var spc = document.getElementsByClassName("special")[0];

spc.classList.add("another-class");
// spc.classList.remove("another-class");
// spc.classList.toggle("another-class");