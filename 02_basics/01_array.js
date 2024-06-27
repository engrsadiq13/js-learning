//array

const myArray = [1, 2, 3, 4, 5, 6]
const myHeros = ["sadiq", "amin", "safwan", "ain"]
// console.log(myArray);
// console.log(myHeros[0]);

//arrays methods

// myArray.push(6)// add the value 6 at the end of the array
// myArray.push(7)
// myArray.pop()// remove the last value of the array
// myArray.unshift(0)// shift all the values from the orignal position
// myArray.shift()

// console.log(myArray.includes(7));// finds the value 7 in the array and result as true or false
// console.log(myArray.indexOf(6)); // finds the location of given value

//const newArray = myArray.join()// convert the array to string but still it will be an array with commas seperated
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

//***********slice, splice */

const myArray1 = myArray.slice(1, 3) // it will takes the values from 1 to 2 and do not changed the orignal array
console.log("orignal array", myArray);
console.log("Sliced array", myArray1);
console.log("orignal array after slice operation", myArray);

const myArray2 = myArray.splice(1, 3) // it will take the values from 1 to 3 and will changed the array, by popping the spliced portion
console.log("Spliced array", myArray2);
console.log("orignal array after splice operation", myArray);




