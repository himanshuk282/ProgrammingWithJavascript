// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}

//Exercise: Simple Pattern
// *
// **
// ***
// ****
// *****
const row = 5;
let resultPattern = "";
for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        resultPattern+="*";
    }
    resultPattern+="\n";    
}
// console.log(resultPattern);

//Pattern 2: Reverse triangle
// *****
// ****
// ***
// **
// *
//Using Method 2 of generating patters
const levels = 5;
const element = "*"
for (let i = levels; i >= 1; i--) {
    console.log(element.repeat(i));
}

// We will prefer method 1 : More compatible with other language and does not use any default functions