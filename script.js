function add([...args]) {
    let result = 0;
    args.forEach(arg => result += arg);
    return result;
}
function subtract([a, b = 0, ...args]) {
    let result = a - b;
    args.forEach(arg => result += arg);
    return result;
}
function multiply([...array]) {
    let result = 1;
    for (let num of array) {
        result *= num;
    }
    return result;
}
function divide([a, b = 1, ...args]) {
    let result = a / b;
    for (i = 0; i < args.length; i++) result /= args[i];
    return result;
}

// ===================================================================
const display = document.querySelector('div.display');
const numberBtn = document.querySelectorAll('div.number');
const opBtn = document.querySelectorAll('div.operator');

const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const crossBtn = document.querySelector('#cross');
const divBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const decimalBtn = document.querySelector('div.decimal');
const posNegBtn = document.querySelector('div.pos-neg');

// ===================================================================
let operation = {inputs: [], sign: ''};
let inputs = operation.inputs;
let sign = operation.sign;
let disp = display.dataset;

function operate() {
    if (disp.input) inputs.push(+disp.input);
    if (sign == 'plus') {
        inputs = [add(inputs)];
        display.textContent = add(inputs);
    } else if (sign == 'minus') {
        inputs = [subtract(inputs)];
        display.textContent = subtract(inputs);
    } else if (sign == 'cross') {
        inputs = [multiply(inputs)];
        display.textContent = multiply(inputs);
    } else if (sign == 'divide') {
        inputs = [divide(inputs)];
        display.textContent = divide(inputs);
    }
    // if (display.textContent == 'Infinity') display.textContent = 'stop it!';
    sign = '';
    disp.input = '';
}

// ===================  PUT NUMBERS TO DISPLAY  ======================
display.textContent = '0';
numberBtn.forEach(button => button.addEventListener('click', () => {
    if (sign == 'equal') {
        inputs = [];
        sign = '';
    }
    disp.input += button.classList[1];
    display.textContent = disp.input;
}))

// ================  LET INPUT DECIMALS PROPERLY  ====================
decimalBtn.addEventListener('click', () => {
    if (disp.input == '') {
        disp.input += '0.';
        display.textContent = disp.input;
    }
    if (!disp.input.includes('.')) {
        disp.input += '.';
        display.textContent = disp.input;
}})

// =======================  TOGGLE POS/NEG  ==========================
posNegBtn.addEventListener('click', () => {
    if (inputs == '' && !disp.input) return;
    if (disp.input) {
        disp.input *= -1;
        display.textContent = disp.input;
    }
    if (inputs != '') {
        inputs[0] *= -1;
        display.textContent = inputs[0];
    }
})

// =========================    + - * /    =========================== 
opBtn.forEach(button => button.addEventListener('click', () => {
    if (sign) operate();
    if (disp.input) inputs.push(+disp.input);
    disp.input = '';
    sign = button.id;

    console.log(inputs);
    console.log(sign);
}))

// ==========================    = = =    ============================
equalBtn.addEventListener('click', () => {
    if (disp.input) operate();
    sign = 'equal';

    console.log(inputs);
    console.log(sign);
})

// ==========================    c c c    ============================
clearBtn.addEventListener('click', () => {
    // document.location.reload()
    disp.input = '';
    display.textContent = '0';
    inputs = [];
    sign = '';
})
