var name = "Isak"; // string
var age = 17; // Number

if(age < 18) {
    console.log("STOP du är " + age + " år gammal");
}
else if( age > 18 && age < 45) {
    console.log("Shutdown! Your age is for cool")
}
else {
    console.log("Välkommen du är" + age + " år gammal");
}
/**reeeeeeeee
 * Ska du säga
 *  
 * 
 * 
 */

 // Deklarera en variabel
var secretNumber = 7;

while(userInput !== secretNumber) {
     // USer input
    var userInput = Number(prompt("Gissa ett nummer mellan 1-10"));

    //Läsa av vilkoren
    if(userInput === secretNumber) {
        document.writeln("Grattis du har gissat rätt nummer!");
    }
    else if (userInput === secretNumber-1 || userInput === secretNumber+1) {
        document.writeln("Det är väldigt nära nu!")
    }
    else if (userInput < secretNumber) {
        document.writeln("Du gissade för lågt")
    }
    else if (userInput > secretNumber && userInput <= 10) {
        document.writeln("Du gissade för högt")
    }
    else {
        document.writeln("Är du inte riktigt klok!");
    }
}

 // USer input
var userInput = Number(prompt("Gissa ett nummer mellan 1-10"));

 //Läsa av vilkoren
 if(userInput === secretNumber) {
    document.writeln("Grattis du har gissat rätt nummer!");
 }
 else if (userInput === secretNumber-1 || userInput === secretNumber+1) {
     document.writeln("Det är väldigt nära nu!")
 }
 else if (userInput < secretNumber) {
    document.writeln("Du gissade för lågt")
 }
 else if (userInput > secretNumber && userInput <= 10) {
    document.writeln("Du gissade för högt")
 }
 else {
     document.writeln("Är du inte riktigt klok!");
 }

var age = Number(prompt("Din ålder: "));

if(age < 0) {
    document.writeln("<br>" + "Du är tyvärr inte född ma dude!")
}

else if (age % 2 !== 0) {
    document.writeln("Din ålder är vädligt udda");
}

else if (age % 2 === 0) {
    document.writeln("Din ålder är jämn");
}
