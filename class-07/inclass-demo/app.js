'use strict'

// functions wrap a set of set of steps and allows us to reuse it over and over


// declaration  name
function greetings () {

// statements
let username = prompt('What is your name?');
console.log('Hello, ' + username);

let time = prompt('What time is it?');
let message;

if(time <= 11){
    message = 'Good Morning!';

} else {
    message = "Time does not exist!";
}

// look for the "<h2><script src="app.js"></script></h2>" on line 20 in the HTML, this is where the message will write too!
document.write('Hello ' + username + '! ' + message);
return username
}



// call the function with its own name
greetings()

