//Functions
function sayMyName(){
    console.log("Himanshu");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(3, 5) 
// console.log("Result: ", result); // Prints the value on console; since it does not return it will not have any value for result


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("himanshu")) // prints himanshu on console
// console.log(loginUserMessage()) // prints default value on console


// Using REST operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "himanshu",
    age: 25
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     age: 31
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));