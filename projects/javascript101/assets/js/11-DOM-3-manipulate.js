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



// manipulating text and content
var pEle = document.querySelector(".test");
pEle.textContent = "This is an big <strong>awsome</strong> paragraph"
pEle.innerHTML = "This is an bigererer <strong>awsome</strong> paragraph"

// Chaining methods
document.getElementsByTagName("h1")[1].textContent = "Yeetus maneetus badeetus";

// Manipulating attributes
var link = document.querySelector("a")
link.getAttribute("href");
link.setAttribute("href", "http://teknikundervisning.se/")

document.getElementsByTagName("img")[0].setAttribute("src", "https://pbs.twimg.com/profile_images/903598038303866882/E1T6vXVj_400x400.jpg")



