// var text = "";
// var i = 0;

// while(i <= 20) {
//     text += "Numret är: " + i + "<br>";
//     i++;
//     if(i == 6) {
//         break;
//     }
// }

// document.getElementById("output").innerHTML = text;

// Skriv ut talen -19->19

var i = -19;
var text = "";

while(i < 20) {
    text += "Numret är: " + i + "<br>";
    i++;
}

document.getElementById("output").innerHTML = text;

// Skriv ut alla jämna tal mellan 10->40

 var i = 10;
 var text = "";

 while(i <= 40) {
    text += "Numret är: " + i + "<br>";
     i+=2;
 }

 document.getElementById("output").innerHTML = text;

// Skriv ut alla udda tal mellan 300->333

var i = 300;
var text = "";

while(i <= 333) {
    i++;

    if(i % 2 != 0) {
        text += "Numret är: " + i + "<br>";
    }
}

document.getElementById("output").innerHTML = text;

// Skriv ut alla tal som är delbar med 3 och 5 mellan 50

var i = 5;
var text = "";

while(i <= 50) {

    if(i % 3 == 0 && i % 5 == 0) {
        text += "Numret är: " + i + "<br>";
    }
    i++;
}

document.getElementById("output").innerHTML = text;