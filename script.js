let numberArray = [];

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
    numberArray.push('.');
    display.textContent = `${numberArray.join('')}`;
});

//SELECT SCREEN ELEMENT AND CREATE DISPLAY
const screen = document.querySelector('.screen');
let display = document.createElement('div');
screen.appendChild(display);

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
numberArray = [];
display.textContent = numberArray;   
});

const delet = document.querySelector('.delete');
delet.addEventListener('click', () => {
numberArray.pop();
display.textContent = `${numberArray.join('')}`;    
});


