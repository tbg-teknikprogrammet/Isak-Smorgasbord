// To Doooooo



document.getElementById("button").addEventListener("click", toDo)

function toDo(array) {
    var array = [];
    var input = 0;
    while(input != "q") {
        input = prompt("Vad vill du göra?");

        if(input == "new") {
            input = prompt("Vad vill du komma ihåg?");
            array.push(input);
        }

        else if(input == "ls") {
            for(var i = 0; i <= array.length-1; i++) {
                console.log("["+ i + "]  " + array[i])
            }
        }

        else if(input == "del") {
            input = prompt("Vilken vill du ta bort?");
            array.splice(input , 1);
        }
    }



}