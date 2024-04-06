let score = "100"

// console.log(typeof score);//string
// console.log(typeof(score));//string

//Converting string into number data type
let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //return number
// console.log(valueInNumber); //return NaN : Not a number if conversion is correct else converted number is returned


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Himanshu"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello,"
let str2 = " himanshu"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
/*
    Important from interview pov
    Summary : 
            String + Number => String concatenation
            Number + String => String concatenation
            String + Number + Number => String concatenation
            Number + Number + String => Numbers are added and then String concatenation
*/

// console.log( (3 + 4) * 5 % 3);

// console.log(+false); //Converts it to number but not adviced
// console.log(+""); //Converts to number

//not recommended
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// console.table([num1,num2,num3])

let gameCounter = 100
// ++gameCounter;
console.log(gameCounter++);

// ++variableName : Increase first then use
// variableName++ : Use first then increase

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion