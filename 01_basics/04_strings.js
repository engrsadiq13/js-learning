const myString = "Sadiq Amin"
const repCount = 50
// console.log(myString + repCount + "value");// combine the whole statement
// console.log(myString.charAt(2));// find the character at 2 or 3rd position
// console.log(myString.charCodeAt(3));// find the ascii code at 3
// console.log(myString.includes("m")); // search the string for m and result as true or false
// console.log(`My name is ${myString} and my Repo Count is ${repCount}`);

const string1 = new String("SadiqAmin");
// console.log(string1.length);// find the length of string
// console.log(string1.toUpperCase());// convert the string to uppercase
// console.log(string1.indexOf('S')); // find the index value of S in the String 
const newString = string1.substring(0, 5); // divide the string from 0 to 5 position
// console.log(newString);

const newString1 = string1.slice(-8, 4); // divide the string from end -8 and then to 4
// console.log(newString1);

const stringSpace = "   sadiq "
// console.log(stringSpace.trim()); // trim all the spaces
// console.log(stringSpace.trimStart()); // trim the spaces at the start
// console.log(stringSpace.trimEnd()); // trim the spaces at the end

const url = "https://sadiqamin.com/sadiq%20amin"
const string3 = "sadiq amin" 
console.log(url.replace('%20', '-'));// replace the value with desired character
console.log(url.includes('amin')); // find the string amin and result as true or false
console.log(string3.split(' ')); // split the string with white spaces and convert it to array