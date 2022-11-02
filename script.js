// Basic math operation functions:

// Addition
function add(addendA, addendB) {
    return addendA + addendB;
}

// Subtraction
function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

// Multiplication
function multiply(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

// Division
function divide(dividend, divisor) {
    return dividend / divisor;
}

// Calculator functionality:

// operate:
// takes in one of the math operator functions above
// along with two numbers and returns the result.

function operate(operation, a, b) {
    return operation(a,b);
}

// set the initial display value for the screen

let displayValue = "0";

// create a DOM object for the calculator display
const display = document.querySelector("#display");
display.textContent = displayValue;

// create a DOM object for the number keys
const numberKeys = document.querySelectorAll(".key.number");

// when the number keys are clicked,
// append them to the end of the display number
// If the current display value is 0,
// a number key will overwrite it.
// The zero key and the decimal key
// are special cases and are handled below.
numberKeys.forEach((key) => {
    key.addEventListener('click', () => {
        displayValue === "0" ? displayValue = key.textContent : displayValue += key.textContent;
        display.textContent = displayValue;
    });
});

// create a DOM object for the zero key
const zeroKey = document.querySelector("#zero");
zeroKey.addEventListener('click', () => {
    if (displayValue != "0") {
        displayValue += zeroKey.textContent;
        display.textContent = displayValue;
    }
});

// create a DOM object for the clear key
const clearKey = document.querySelector("#clear");
clearKey.addEventListener('click', () => {
    displayValue = "0";
    display.textContent = displayValue;
});
