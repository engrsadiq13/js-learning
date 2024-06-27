const arr1 = ["sadiq", "amin", "safwan"]
const arr2 = ["ain", "qurratul", "anam"]
//arr1.push(arr2);// push the second array as array in the first array
const arr3 = arr1.concat(arr2) // combined the two arrays
//console.log(arr1);
//console.log(arr3);
const arr4 = [...arr1, ...arr2] // better way to concat more than 2 arrays
// console.log(arr4);

const newArr = [1, 2, 3, [4, 5], 6,  [7, 8, [9, 10]]]
const newArr1 = newArr.flat(Infinity)// spread out all the arrays inside and makes it a single array
// console.log(newArr1);

console.log(Array.isArray("sadiq amin"));// ask for array or not result as true or false
console.log(Array.from("sadiq amin"));// makes array from string
console.log(Array.from({name : "sadiq amin"}));//interesting

const score1 = 100
const score2 = 500
const score3 = 200

console.log(Array.of(score1, score2, score3));// makes array from variables