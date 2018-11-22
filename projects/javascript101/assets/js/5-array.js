

var friend1 = "Måns";
var friend2 = "Sten";
var friend3 = "Claes";
var friend4 = "Måna";

var friends = ["Måns", "Sten", "Claes", "Måna"];

var colors = [];



//Metoder

// push() - add an item at the end of an array
colors = ["red", "green", "blue"];
console.log(colors);
colors.push("purple");
console.log(colors);

// pop() - 
colors.pop();
console.log(colors);

// unshift()
colors.unshift("yellow");
console.log(colors);

// shift()
colors.shift();
console.log(colors);

// indexOf()
colors.indexOf("red")
console.log(colors.indexOf("red"));
console.log(colors.indexOf("orange"));

// slice() -
var fruits = ["Banana", "Orange", "Lemon", "Mango", "Pear"];

// Copy the 2nd and 3d fruits¨
var citrus = fruits.slice(1, 3);
console.log(citrus);


var copyFruits = fruits.slice(fruits);
console.log(copyFruits);

var cars = ["Audi A6", "Volvo 940", "Ford Mondeo", "Ferrari", "Landa", "Lada", "Citroen"]
for(var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}


var countries = ["Sweden", "Norway", "Finland", "Denmark", "Iceland"];
countries.forEach(function(country) {
    console.log(country);
});

function countryList(country) {
    console.log(country);
    console.log("--------------------");
}
countries.forEach(countryList);


var string = [1, 2, 3, 4, 5]

function printReverse(string) {
    for(var i = string.length-1; i >= 0; i--) {
        console.log(string[i]);
    }
}

printReverse(string);


function isIdentical(ar1) {
    if(ar1[i] == ar1[ar1.length-1]) {

    }
}