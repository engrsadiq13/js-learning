const number = 400
// console.log(number);

const number1 = new Number(400)
// console.log(number1);

// console.log(number1.toString().length);// length of number
// console.log(number1.toFixed(1));// to 1 decimal point

const otherNumber = 123.673
// console.log(otherNumber.toPrecision(3)); // precise the value to 3 digits

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // convert it 1,000,000

//*******************Maths*********************/

// console.log(Math);
// console.log(Math.abs(-4));// print the absolute value
// console.log(Math.round(4.6));// round the number
// console.log(Math.floor(12.56));// round the number to lowest digit or cut the value right to the decimal
// console.log(Math.ceil(12.56));// round the value to left side 
// console.log(Math.min(4, 3, 2, 5));// find the min value
// console.log(Math.max(4, 3, 2, 5));// find the max value

// console.log(Math.random());//every time the value is between 1 and 0
// console.log(Math.floor(Math.random()*10) + 1); // the value will be 1 or greater than 1, with floor we get only the value to left of decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min)+ 1)+min)// it prints the value between 10 and 20 randomly