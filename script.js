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