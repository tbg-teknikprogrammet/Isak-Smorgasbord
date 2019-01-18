// // Model asingel person

// var person = ["Sid", 31, "Adak"];

// // Retrive data

// // hometown
// console.log(person[2]);

// // Reverse order of data.
// var person2 = [31, "Malå", "Bill"];

// // hometown
// console.log(person2[2]);

// // To model a person is the perfect use case for an objekt
// var person = {
//     name: "Bob", //key:value pair
//     age: 29,
//     hometown: "Heresneezedduck"
// };

// // Note: No index 

// console.log(person.name);

// person.age += 1;

// // Different methods of initializing objects
// var oddNums = {};
// oddNums.int = 1;
// oddNums.str = "one";
// oddNums.isOdd = true;

// //All lat ones
// var dog = {
//     name: "Doggo",
//     breed: "Golden",
//     age: "3",
// }

// var cat = new Object();
// cat.name = "Sten";


// var junkObject = {
//     name: "Junko",
//     age: 33,
//     friends: ["Duruk", "Revali"],
//     pet: {
//         name: "Leg",
//         age: 67,
//     }
// }

// console.log(junkObject.pet.name);
// console.log(junkObject.friends[1]);

// var posts = [{author: "Emanuel", title: "Leg", comments: ["Very cool!", "Yeet"]}, 
// {author: "Isak", title: "Spel", comments: ["0909l!", "reee"]}];

// console.log(posts[1].comments[0])

// for(var i = 0; i < posts.length; i++) {
//     console.log(posts[i].title, posts[i].author, posts[i].comments)
// }

// Move DB

var movies = [
    {
        title: "Darudes Sandstorm",
        rating: "10",
        watched: true
    },
    {
        title: "Lost in Nanking",
        rating: "8",
        watched: false
    },
    {
        title: "Emanuel the Movie",
        rating: "0.3",
        watched: true
    }
];

for(var i = 0; i <= movies.length-1; i++) { 
    if(movies[i].watched == true) {
        console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " Legs");
    }
    else {
        console.log("You have not watched " + movies[i].title + " - " + movies[i].rating + " Legs");
    }
}

movies.forEach(function(movie) {
    if(movie.watched == true) {
        console.log("You have watched " + movie.title + " - " + movie.rating + " Legs");
    }
    else {
        console.log("You have not watched " + movie.title + " - " + movie.rating + " Legs");
    }
});
