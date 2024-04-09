// Array 

const numbers = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj","chacha chaudhary"]

const evenNumbers = new Array(0, 2, 4, 6)
// console.log(numbers[0]);// 0 based indexing : fetches the value at entered position

// Array methods

// evenNumbers.push(8)
// console.log(evenNumbers);
// evenNumbers.push(7)
// console.log(evenNumbers);
// evenNumbers.pop()
// console.log(evenNumbers);

// evenNumbers.unshift(9) //:Adds the number at the first position and moves the elements one place to right
// evenNumbers.unshift(10,11,12)
// console.log(evenNumbers);
// evenNumbers.shift()
// console.log(evenNumbers);//Removes first element from the array

// More actions on arrays

// console.log(evenNumbers.includes(4));//return true or false
// console.log(evenNumbers.indexOf(9)); //returns position if found else returns -1

// const allNumber = evenNumbers.join() // converts array into string with default ',' or provided separator
// const allNumber = evenNumbers.join(';')

// console.log(evenNumbers);
// console.log( allNumber);


// slice, splice ?? Know the difference

console.log("A: ", evenNumbers);

const mySlice = evenNumbers.slice(1, 3)// It does not affect the parent array

console.log(mySlice);
console.log("B: ", evenNumbers);

const mySplice = evenNumbers.splice(1, 3) // It makes changes in the parent array
console.log(mySplice);
console.log("C: ", evenNumbers);
