// root node
document.URL;
document.links;
document.body;
document.head;

// select
// takes a string argument and returns the one element with a matching ID
var element = document.getElementById("highlight");
console.log(element); // log HTML
console.dir(element); // log object

// takes a string argument and returns a list of elements that have the same matching class
var elements  = document.getElementsByClassName("bolded"); // returns a nodelist
console.log(elements); 
console.dir(elements);

var eles = document.getElementsByTagName("li");

var queryTag  = document.querySelector(".bolded"); // only the first one

var queryAlltag  = document.querySelectorAll(".bolded");

//reee
var p = document.getElementById("first");

var pe = document.getElementsByClassName("special")[0];

var pee = document.querySelector("p");

var peee = document.getElementsByTagName("p")[0];

var peeee = document.querySelectorAll("#first")[0];
