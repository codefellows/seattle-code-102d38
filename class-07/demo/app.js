'use strict'

function yourName() {
    let name = prompt('What is my name?');

    return document.write(name);
}

function timeOfDay() {
    let time = prompt('What time is it?'); // 15;
    let message = '';

    if (time <= 11) {
        message = 'Good Morning!';
    } else if (time <= 18) {
        message = 'Good Afternoon!';

    } else if (time <= 24) {
        message = "Good Evening!";
    } else {
        message = "Time does not exist!";
    }

    return message;
}
