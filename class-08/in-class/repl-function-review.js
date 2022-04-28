// REPLIT DEMO FOR REVIEWING FUNCTIONS

// - defining a function 
// - that takes 2 numbers as PARAMETERS
// - adds them together
// - returns the total
function addNumbers(num1, num2){ 
	let total = num1 + num2;
  console.log(total);
  return total
}

// - invoking my function, passing it 2 numbers as ARGUMENTS
addNumbers(2, 3);

// // console.log("outside function", total)
// // let newestNumber = addNumbers(15, 50483);
// // console.log(newestNumber);
                 
// // newNumber = addNumbers(5, 6);
// // console.log("Here in the console", newNumber)

// --------------------------------------------------------------

// defining a function that just says hi in the console
// - no parameters

function sayHi(){
  console.log("Hiiiiii");
}

// --------------------------------------------------------------

// declaring a global variable called userName, assigning it value
let userName = "Alec";

// defining my function that will change the userName
// - it takes a name as a PARAMETER
function changeName(name){
  userName = name;
  console.log(userName);
}

// this prints the original global username to the console
console.log("First username ", userName )
// invoking my function to change the name, giving it a new name as an ARGUMENT
changeName("Shade");
// this prints the newly changed global username variable after I have used my function to modify its value
console.log("Second username ", userName )

// invoking my function 4 more times, passing it a new name ARGUMENT each time
changeName("Scottie");
changeName("Joraya");
changeName("Brentice");
changeName("Josh");