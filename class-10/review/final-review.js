// TOOLS TO USE: repl.it & codepen.io

// LOOPS

// do-while

let answer;
do {
   answer = prompt("What's kassie's fav color?");
} while ( answer !== "yellow")

// difference between for-loop & while-loop

// for --> happen a specific amount of times based on the condition
for (let i = 0; i < 5; i = i + 1){
    console.log(i);
}

// #1: i = 0 | 0
// #2: i = 1 | 1
// #3: i = 2 | 2
// #4: i = 3 | 3 
// #5: i = 4 | 4
// #6: i = 5 | BREAK

// while --> happens until a certain condition is no longer true

// while (this condition is true){
//     execute this code
// }

while ( 4 == 5 ) {
    console.log("Math is weird"); // It'll never execute because 4 will not equal 5
}

while ( 4 !== 5) {
    console.log("math is weird"); // It'll loop infinitely because '4 does not equal 5' will always be true
}

// semantic tags - google it! W3Schools is a great resource
// <strong> --> semantically emphasizes
// <b> --> STYLES it

// FUNCTIONS

// invoke a function 
// functionName{} - WRONG 
// functionName() - Right

// when you DEFINE/DECLARE a function, you're MAKING a rule/tool. You're not actually USING it yet.
function writeMessage(){
    console.log("Hi everyone!");
}

// HAPPENS WHEN FUNCTION IS INVOKED/CALLED/USED --> this is when you're USING/executing it
writeMessage();

// Code in a function is executed at the time the function is declared/defined: WRONG

function getName(){
    let userName = prompt("What is your name?");
    console.log("Hi, " + username + ", welcome!");
    return userName;
}

// return statements repl example:


function getName(){
    let userName = prompt("What is your name?");
    let message = `Hi ${userName} welcome to my page!`;
    console.log(message);
    
    return userName; // -->  first return statement is returned
    return message; // never executes
    return (4 + 5); // never executes
  }
  
  console.log("This is what is returned from function: ", getName()); // returns Whatever the user types in

// HOW TO GET MULTIPLE BITS OF INFO IN ONE RETURN

function getName(){
    let userName = prompt("What is your name?");
    let message = `Hi ${userName} welcome to my page!`;
    console.log(message);
    let info = "Username is: " + userName + " Message is: " + message
    
    // return userName;
    // return message;
    return info
  }
  
  console.log("This is what is returned from function: ", getName());