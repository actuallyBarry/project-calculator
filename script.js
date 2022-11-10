function add(a, b, ...args) {
    let sum = a + b;
    args.forEach(arg => sum += arg);
    console.log(sum);
}
// add(1, 10, 10.5, 3);

function subtract(a, b, ...args) {
    let sum = a - b;
    for (i = 0; i < args.length; i++) {
        sum -= args[i];
    }
    console.log(sum);
}
// subtract(10, 2, 5, 6);

function multiply(a, b, ...array) {
    let result = a * b;
    for (let num of array) {
        result *= num;
    }
    console.log(result);
}
// multiply(-1.5, 10, 2, -0.1, 2.33);

function divide(a, b, ...numbers) {
    let result = a / b;
    numbers.forEach(number => result /= number);
    console.log(result);
}
// divide(39, 6, 0.5, 1/3);

function operate() {
    let a = prompt('enter first number(a) a ? b');
    let operator = prompt(`choose math operator(?) ${a} ? b`);
    let b = prompt(`enter second number(b) ${a}${operator} b`);

    if (operator == '+') add(+a, +b);
    if (operator == '-') subtract(a, b);
    if (operator == '*') multiply(a, b);
    if (operator == '/') divide(a, b);
}
// operate()

const display = document.querySelector('div.display');
display.textContent = '0';

const numberBtn = document.querySelectorAll('div.number');
numberBtn.forEach(button => button.addEventListener('click', () => display.textContent += button.classList[1]));