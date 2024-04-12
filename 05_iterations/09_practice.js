//Q1: Square the value of every element in the array. Presume that you will only get numbers in the input array.
// const numbers = [1,2,3,4,5,6,7,8];
// const squaredNumbers = numbers.map((number)=>{
//     return Math.pow(number,2)
// })
// console.log(squaredNumbers);

//Q2: If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
// const input = [1, -4, 12, 0, -3, 29, -150];
// // const input = [-1, -4, -12, -3, -29, -150];
// const sumOfPositive = input
//                         .filter((number)=>number>=0)
//                         .reduce((acc,number)=>acc+number,0)

// console.log(sumOfPositive);

//Q3: Calculate the mean and median values of the number elements from the input array.
// const input = [12, 46, 32, 64];
// input.sort((a, b) => a - b); //sorts and changes the original array
//Mean = Average of the data
//Median = Middle Number of the sorted array
// const output = input.reduce(
//   (accumulator, currentValue, index, array) => {
//     accumulator.mean += currentValue / array.length;
//     if (array.length % 2 === 0) {
//       // if the array has an even number of elements
//       if (index === array.length / 2 - 1) {
//         accumulator.median += currentValue;
//       } else if (index === array.length / 2) {
//         accumulator.median += currentValue;
//         accumulator.median /= 2;
//       }
//     } else {
//       // if the array has an odd number of elements
//       if (index === (array.length - 1) / 2) {
//         accumulator.median = currentValue;
//       }
//     }
//     return accumulator;
//   },
//   { mean: 0, median: 0 }
// );

// console.log(output);

//Q4 : The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// const input = "George Raymond Richard Martin";
// let abbr = "";
// const result = input.split(" ").map((word)=>{
//     return word.charAt(0).toUpperCase()
// }).join("");

// console.log(result);

//Q5: Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

// const ages = input.map((person)=>{
//    return person.age
// });

// console.log([Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]);

//Q6: Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e
// Result : "E3y d7r l3s to mix k8s and j8t";
// const input = "Every developer likes to mix kubernetes and javascript";

// const result = input
//                 .split(" ")
//                 .map((word)=>{
//                     if(word.length > 4){
//                         word = word[0] + (word.length - 2).toString() + word[word.length-1]
//                     }
//                     return word
//                 })
//                 .join(" ");

// console.log(result);

//Q7: If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
//result: 720;
const input = 6;
const arr = new Array(input).fill(null);
const result = arr.map((currentValue,index)=>{
    return index+1
}).reduce((accumalator,currentValue)=>{
    accumalator = accumalator * currentValue;
    return accumalator
},1);
console.log(result);



