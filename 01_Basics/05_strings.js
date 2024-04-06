const name = "himanshu"
const repoCount = 11

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('heman-king-slayer')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t')); //return index if present else returns -1

const shortGameName = gameName.substring(0, 5) // end point not inclusive
// console.log(shortGameName);

const anotherName = gameName.slice(5, 7)
// console.log(anotherName);

const nameOne = "   himanshu    "
// console.log(`The string is : ${nameOne} and is of length : ${nameOne.length}`);
// console.log(`The string is : ${nameOne.trimStart()} and is of length : ${nameOne.trimStart().length}`);
// console.log(`The string is : ${nameOne.trimEnd()} and is of length : ${nameOne.trimEnd().length}`);
// console.log(`The string is : ${nameOne.trim()} and is of length : ${nameOne.trim().length}`);


const url = "https://playmarvel.com/?userName=Himanshu%20Singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('username'))

console.log(gameName.split('-'));