// To Doooooo
var array = [];

document.getElementById("button").addEventListener("click", toDo);

function toDo() {
    var input = 0;
    while(input != "q") {
        input = prompt("Vad vill du göra?");

        if(input == "new") {
            input = prompt("Vad vill du komma ihåg?");
            console.log("Saved " + "'" + input + "'" +" to the to do list.");
            array.push(input);
        }

        else if(input == "ls") {
            console.log("------------------------------");
            for(var i = 0; i <= array.length-1; i++) {
                console.log("[" + i + "]  " + array[i])
            }
            console.log("------------------------------");
        }

        else if(input == "del") {
            input = prompt("Vilken vill du ta bort?");
            console.log("Removed " + "'" + array[input] + "'" + " from the list.");
            array.splice(input , 1);
        }

        else if(input == "q") {
            console.log("Shutting down...")
        }

        else {
            console.log("Please insert a valid command.")
        }
    }
}