// Basic math operation functions:

// Addition
function add(addendA, addendB) {
    return parseInt(addendA) + parseInt(addendB);
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

// Function to update the display value
function updateDisplayValue(value) {
    display.textContent = value;    
};

// set a previous value (this will be filled in later)

let previousValue = "0";

// set an operation (this will also be filled in later)

let operation = function(){
    return displayValue;
};



let readyForNewNumber = false;

// create a DOM object for the calculator display
const display = document.querySelector("#display");
updateDisplayValue(displayValue);

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
        displayValue === "0" ? 
        displayValue = key.textContent : 
        displayValue += key.textContent;
        updateDisplayValue(displayValue);
    });
});

// create a DOM object for the zero key
const zeroKey = document.querySelector("#zero");
zeroKey.addEventListener('click', () => {
    if (!(displayValue === "0")) {
        displayValue += zeroKey.textContent;
        updateDisplayValue(displayValue);
    }
});

// create a DOM object for the decimal key
const decimalKey = document.querySelector("#decimal");
decimalKey.addEventListener("click", () => {
    if (!(displayValue.includes("."))) {
        displayValue += decimalKey.textContent;
        updateDisplayValue(displayValue);
    }
});

// create a DOM object for the clear key
const clearKey = document.querySelector("#clear");
clearKey.addEventListener('click', () => {
    displayValue = "0";
    updateDisplayValue(displayValue);
});

// When an operator key is pressed, the display value should be saved as operandA.
// create DOM objects for the operation keys

// The display value should NOT be cleared, but the calculator should be put into a
// state of "ready for next value," and once the user starts typing another number, 
// the display value SHOULD be cleared.

// The operation should also be saved.
/* const operationKeys = document.querySelectorAll(".key.operation");
operationKeys.forEach((key) => {
    key.addEventListener("click", () => {
        previousValue = displayValue;
        switch (key.id) {
            case "add":
                operation = add;
                break;
            case "subtract":
                operation = subtract;
                break;
            case "multiply":
                operation = multiply;
                break;
            case "divide":
                operation = divide;
                break;
        };
    });
}); */

const plusKey = document.addEventListener("click", () => {
    displayValue = add(displayValue, previousValue);
});