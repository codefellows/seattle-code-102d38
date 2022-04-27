'use strict';

// declare a variable, assign it the value of the user's input
let userName = prompt("What is your name?");

// print the user's input to the console
console.log(userName);

// checking if user is Kassie
if (userName === "Kassie") {
    console.log("Hiya teach!");

//     // what to do if not Kassie
} else {
    console.log("Hello friend! Welcome!");
// }

// declaring a variable called place to hold the value of the user's input
let place = prompt("Welcome " + userName + "! Where have you traveled?");
// printing it to the console with a message (string concatenation)
console.log("First place = " + place);
// re-assigning a previously declared variable with a new value
place = prompt("Where else have you traveled?");
// printing it to the console with a message (string concatenation)
console.log("Second place = " + place);

// How can I put data on the page?
document.write("<p id='person-name'>" + userName + "</p>");

// asking the user what my favorite color is
let response = prompt("What's Kassie's favorite color?");

// response.toLowerCase() OR response.toUpperCase() <-- how you can SANITIZE the user's input

if (response.toLowerCase() == "yellow") {
    document.write("You're absolutely correct!");
} else if (response.toLowerCase() == "rainbow") {
    document.write("Most people don't count that as a color...incorrectly");
} else {
    document.write("Not correct.");
}

let age = prompt("How old is your cat?");

if (age > 20) {
    console.log("Wow, that's old!");
} else if (age > 10) {
    console.log("You've had them a while!");
} else if (age < 10 && age > 0 ) {
    console.log("Aww, kitty!");
}

// show == vs === with numbers/strings
// let number = "10";
// (number === 10) <-- FALSE (a string cannot be strictly equal to a number)
// (number == 10) <-- TRUE (JavaScript will try to help you out and say these are kinda equal)
