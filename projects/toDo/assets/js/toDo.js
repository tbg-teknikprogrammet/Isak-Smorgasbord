// To Doooooo
var array = [];

document.getElementById("button").addEventListener("click", toDo); // Starts the toDO function when the button is clicked.

function toDo() {
    var input = 0;
    while(input != "q") {
        input = prompt("Please insert a command.");

        if(input == "new") { 
            input = prompt("What do you want to remember?");
            console.log("Added " + '"' + input + '"' +" to the to do list.");
            array.push(input); // Adds a new value to the last part of the list.
        }

        else if(input == "ls") {
            console.log("------------------------------");
            for(var i = 0; i <= array.length-1; i++) { // Loops through the list and put the values individually indexed in the console.
                console.log("[" + i + "]  " + array[i])
            }
            console.log("------------------------------");
        }

        else if(input == "del") {
            input = prompt("Which indexed value do you want to delet?");
            console.log("Removed " + '"' + array[input] + '"' + " from the list.");
            array.splice(input , 1); // Removes an indexed value.
        }

        else if(input == "q") {
            console.log("Shutting down...")
        }

        else {
            console.log("Please insert a valid command.")
        }
    }
}