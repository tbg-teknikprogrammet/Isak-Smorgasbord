// //
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("Hur jag undrar var du är");
// console.log("Fjärran lockar du min syn");
// console.log("Likt n diamant i skyn");

// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("Hur jag undrar var du är");
// console.log("Fjärran lockar du min syn");
// console.log("Likt n diamant i skyn");

// // Nu sjunger barnet den helt själv
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("Hur jag undrar var du är");
// console.log("Fjärran lockar du min syn");
// console.log("Likt n diamant i skyn");

// This code is WET

function twinkleTwinkle() {
    console.log("Blinka lilla stjärna där");
    console.log("Blinka lilla stjärna där");
    console.log("Hur jag undrar var du är");
    console.log("Fjärran lockar du min syn");
    console.log("Likt n diamant i skyn");
}

// Call a function
twinkleTwinkle();


function doSomething() {
    console.log("Hello World!");
    console.log("Do Something");
}

//Parametrar och argument
function square(num, num1) {
    console.log(num * num1);
}

square(5 , 2);

function sayHello(name) {
    console.log("Hello there! " + name + "!");
}

sayHello("Gereal Kenobi");

function area(length, height) {
    console.log(length * height);
}

area(5, 10);

function greet(person1, person2, person3, person4) {
    console.log("Hej, " + person1 + "!");
    console.log("Hej, " + person2 + "!");
    console.log("Hej, " + person3 + "!");
    console.log("Hej, " + person4 + "!");
}

greet("Isak", "Monika", "Roland", "Josefin");

function squared(x) {
    return x * x;
}

console.log("4 squared is: " + squared(4));

var result = squared(10);
console.log(result);



function isEven(x) {
    if(x % 2 !== 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(isEven(10));

function kebabToSnake(string) {

    var myString = string.replace(/-/g, "_");

    return myString;
}

console.log(kebabToSnake("Hej-Ted"));


function localScope() {
    var showScope = 31;
    console.log(showScope);
}

localScope();

var showScopeY = 99;
function showScopeY() {
    showScopeY = 100;
    console.log(showScopeY);
}

console.log(showScopeY);