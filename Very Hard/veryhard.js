let num1 = Number (prompt ("Please enter a number"));
let num2 = Number (prompt ("Please enter another number"));
let operator = prompt ("Please enter an operator");
// Addtion Function
let add = function (num2, num1) {
    return num2 + num1;
};

// Subtraction Function
let subtract = function (num2, num1)  {
    return num2 - num1;
};

// Multiplication Function 
let multiply = function (num2, num1)  {
    return num2 * num1;
};

// Division Function
let divide = function (num2, num1) {
    return num2 / num1;
};

let createEquation = function (operator, num2, num1){
    if (operator == "+"){
        return add(num2, num1);
    } else if (operator == "-"){
        return subtract(num2 - num1);
    }else if (operator == "*"){
        return multiply(num2 * num1);
    }else if (operator == "/"){
        return divide (num2 / num1);
    }else {
        alert ("Please try again!");
    }
};

console.log(
    `${num2} ${operator} ${num1} = ${createEquation(
      operator,
      num2,
      num1
    )}`
  );