// CREATE A NUMBER ARRAY TO SHOW ON DISPLAY
let numberArray = [];
let secondNumber = 0;
let operator = "";

//SELECT SCREEN ELEMENT AND CREATE DISPLAY
const screen = document.querySelector('.screen');
let display = document.createElement('div');
screen.appendChild(display);

//ROUND NUMBER TO MAX 5 DECIMALS
let roundNumber = number => {
   let str = number.toString();
   let decimalIndex = str.indexOf('.');
if(decimalIndex !== -1 && str.length - decimalIndex -1 > 5) {
    return parseFloat(number.toFixed(5));
}
    return number;
}





// CREATE EVENT LISTENERS TO ALL NUMBERS 
// CREATE ARROW FUNCTION THAT ADD THE NUMBER TO
// the NumberArray and displays it
const numberOne = document.querySelector('#one');
numberOne.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberOne = null;
    numberArray.push(1);
    display.textContent = `${numberArray.join('')}`;
});
const numberTwo = document.querySelector('#two');
numberTwo.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberTwo = null;
    numberArray.push(2);
    display.textContent = `${numberArray.join('')}`;
});
const numberThree = document.querySelector('#three');
numberThree.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberThree = null;
    numberArray.push(3);
    display.textContent = `${numberArray.join('')}`;
});
const numberFour = document.querySelector('#four');
numberFour.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberFour = null;
    numberArray.push(4);
    display.textContent = `${numberArray.join('')}`;
});
const numberFive = document.querySelector('#five');
numberFive.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberFive = null;
    numberArray.push(5);
    display.textContent = `${numberArray.join('')}`;
});
const numberSix = document.querySelector('#six');
numberSix.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberSix = null;
    numberArray.push(6);
    display.textContent = `${numberArray.join('')}`;
});
const numberSeven = document.querySelector('#seven');
numberSeven.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberSeven = null;
    numberArray.push(7);
    display.textContent = `${numberArray.join('')}`;
});
const numberEight = document.querySelector('#eight');
numberEight.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberEight = null;
    numberArray.push(8);
    display.textContent = `${numberArray.join('')}`;
});
const numberNine = document.querySelector('#nine');
numberNine.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberNine = null;
    numberArray.push(9);
    display.textContent = `${numberArray.join('')}`;
});
const numberZero = document.querySelector('#zero');
numberZero.addEventListener('click', () => {
    //LET YOU INSERT MAX 15 NUMBERS IN THE DISPLAY 
    if (numberArray.length > 14) numberZero = null;
    numberArray.push(0);
    display.textContent = `${numberArray.join('')}`;
});
const numberDot = document.querySelector('#dot');
numberDot.addEventListener('click', () => {
    //MAKE INSERT ONLY ONE '.' IN ANY NUMBER 
    if(numberArray.includes('.') === true) numberDot = null;

    numberArray.push('.');
    display.textContent = `${numberArray.join('')}`;
});

//CREATE CLEAR AND DELETE EVENT LISTENERS
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
//ARROW FUNCTION THAT CLEARS THE numberArray
    numberArray = [];
    secondNumber = 0;
    operator = '';
    display.textContent = numberArray;   
});
const delet = document.querySelector('#delet');
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
        let result = roundNumber(makeCalculation(numberArray, secondNumber, operator));
        //SHOWS AN ERROR WHEN THE NUMBER IS TOO LARGE
        if(result.toString().length > 14) {
            numberArray = [];
            secondNumber = 0;
            operator = '';
            return display.textContent= 'ERROR';
        }
        secondNumber = result;
        display.textContent = `${roundNumber(secondNumber)}`;
        operator = '+';
        result = 0;
        numberArray = [];
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
        let result = roundNumber(makeCalculation(numberArray, secondNumber, operator));
        //SHOWS AN ERROR WHEN THE NUMBER IS TOO LARGE
        if(result.toString().length > 14) {
            numberArray = [];
            secondNumber = 0;
            operator = '';
            return display.textContent= 'ERROR';
        }
        secondNumber = result;
        display.textContent = `${roundNumber(secondNumber)}`;
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
        let result = roundNumber(makeCalculation(numberArray, secondNumber, operator));
        //SHOWS AN ERROR WHEN THE NUMBER IS TOO LARGE
        if(result.toString().length > 14) {
            console.log(result);
            numberArray = [];
            secondNumber = 0;
            operator = '';
            return display.textContent= 'ERROR';
        }
        secondNumber = result;
        display.textContent = `${roundNumber(secondNumber)}`;
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
        let result = roundNumber(makeCalculation(numberArray, secondNumber, operator));
        secondNumber = result;
        display.textContent = `${roundNumber(secondNumber)}`;
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
    else if (operator === '/' && +(numberArray.join('')) === 0) {
         numberArray = [];
         secondNumber = 0;
         return display.textContent= 'ERROR';
    }
    else if (operator === '/') return +secondNumber / +(numberArray.join(''));
}
equal.addEventListener('click', () => {
    //TO DONT SHOW UNDEFINED WHEN PRESS '=' AT THE START
    if(secondNumber===0) return 0;
    let result = roundNumber(makeCalculation(numberArray, secondNumber, operator));
    //SHOWS AN ERROR WHEN THE NUMBER IS TOO LARGE
    if(result.toString().length > 14) {
        numberArray = [];
        secondNumber = 0;
        operator = '';
        return display.textContent= 'ERROR';
        console.log(result);
    }
    display.textContent = `${roundNumber(result)}`;
})
