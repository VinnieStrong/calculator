// CREATE A NUMBER ARRAY TO SHOW ON DISPLAY
let numberArray = [];
let secondNumber = 0;
let operator = "";

//SELECT SCREEN ELEMENT AND CREATE DISPLAY
const screen = document.querySelector('.screen');
let display = document.createElement('div');
screen.appendChild(display);




// CREATE EVENT LISTENERS TO ALL NUMBERS 
// CREATE ARROW FUNCTION THAT ADD THE NUMBER TO
// the NumberArray and displays it
const numberOne = document.querySelector('#one');
numberOne.addEventListener('click', () => {
    numberArray.push(1);
    display.textContent = `${numberArray.join('')}`;
});
const numberTwo = document.querySelector('#two');
numberTwo.addEventListener('click', () => {
    numberArray.push(2);
    display.textContent = `${numberArray.join('')}`;
});
const numberThree = document.querySelector('#three');
numberThree.addEventListener('click', () => {
    numberArray.push(3);
    display.textContent = `${numberArray.join('')}`;
});
const numberFour = document.querySelector('#four');
numberFour.addEventListener('click', () => {
    numberArray.push(4);
    display.textContent = `${numberArray.join('')}`;
});
const numberFive = document.querySelector('#five');
numberFive.addEventListener('click', () => {
    numberArray.push(5);
    display.textContent = `${numberArray.join('')}`;
});
const numberSix = document.querySelector('#six');
numberSix.addEventListener('click', () => {
    numberArray.push(6);
    display.textContent = `${numberArray.join('')}`;
});
const numberSeven = document.querySelector('#seven');
numberSeven.addEventListener('click', () => {
    numberArray.push(7);
    display.textContent = `${numberArray.join('')}`;
});
const numberEight = document.querySelector('#eight');
numberEight.addEventListener('click', () => {
    numberArray.push(8);
    display.textContent = `${numberArray.join('')}`;
});
const numberNine = document.querySelector('#nine');
numberNine.addEventListener('click', () => {
    numberArray.push(9);
    display.textContent = `${numberArray.join('')}`;
});
const numberZero = document.querySelector('#zero');
numberZero.addEventListener('click', () => {
    numberArray.push(0);
    display.textContent = `${numberArray.join('')}`;
});
const numberDot = document.querySelector('#dot');
numberDot.addEventListener('click', () => {
    //to do - LOOP IN THE ARRAY AND IF FIND '.'
    // DONT LET PUSH A SECOND ONE
    numberArray.push('.');
    display.textContent = `${numberArray.join('')}`;
});

//CREATE CLEAR AND DELETE EVENT LISTENERS
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
//ARROW FUNCTION THAT CLEARS THE numberArray
    numberArray = [];
    secondNumber = 0;
    operator = '';
    display.textContent = numberArray;   
});
const delet = document.querySelector('.delete');
delet.addEventListener('click', () => {
//ARROW FUNCTION THAT DELETES THE LAST NUMBER FROM numberArray
    numberArray.pop();
    display.textContent = `${numberArray.join('')}`;    
});

//CREATE OPERATORS EVENT LISTENERS
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');

//CREATE OPERATORS FUNCTIONS
plus.addEventListener('click', () => {
    //TO CONCATENATE MULTIPLE OPERATIONS
    if(secondNumber !== 0) {
        let result = makeCalculation(numberArray, secondNumber, operator);
        secondNumber = result;
        display.textContent = `${secondNumber}`;
        operator = '+';
        result = 0;
        numberArray = [];
        console.log(operator);
    }
    //IT IS WORKING WITHOUT CONCATENATION, ONLY WITH EQUAL SIGN  
    else {
        secondNumber = numberArray.join('');
        numberArray = [];
        operator = "+"; 
    }   
});

minus.addEventListener('click', () => {
    if(secondNumber !== 0) {
        let result = makeCalculation(numberArray, secondNumber, operator);
        secondNumber = result;
        display.textContent = `${secondNumber}`;
        operator = '-';
        result = makeCalculation(numberArray, secondNumber, operator);
        numberArray = [];
    }
    else {
        secondNumber = numberArray.join('');
        numberArray = [];
        operator = "-"; 
    }   
})

multiply.addEventListener('click', () => {
    if(secondNumber !== 0) {
        let result = makeCalculation(numberArray, secondNumber, operator);
        secondNumber = result;
        display.textContent = `${secondNumber}`;
        operator = '*';
        result = makeCalculation(numberArray, secondNumber, operator);
        numberArray = [];
    }
    else {
        secondNumber = numberArray.join('');
        numberArray = [];
        operator = "*";   
    }    
})

divide.addEventListener('click', () => {
    if(secondNumber !== 0) {
        let result = makeCalculation(numberArray, secondNumber, operator);
        secondNumber = result;
        display.textContent = `${secondNumber}`;
        operator = '/';
        result = makeCalculation(numberArray, secondNumber, operator);
        numberArray = [];
    }
    else {
        secondNumber = numberArray.join('');
        numberArray = [];
        operator = "/"; 
    }   
})

//LET ME STORE THE OPERATOR SIGN INTO A VARIABLE 
let makeCalculation = (numberArray, secondNumber, operator) => {
    if (operator === '+') return +(numberArray.join('')) + +secondNumber;
    else if (operator === '-') return +secondNumber - +(numberArray.join(''));
    else if (operator === '*') return +(numberArray.join('')) * +secondNumber;
    else if (operator === '/') return +secondNumber / +(numberArray.join(''));
}
equal.addEventListener('click', () => {
    //TO DONT SHOW UNDEFINED WHEN PRESS '=' AT THE START
    if(secondNumber===0) return 0;
    let result = makeCalculation(numberArray, secondNumber, operator);
    display.textContent = `${result}`;
})
