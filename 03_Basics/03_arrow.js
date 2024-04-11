// Object with function - understanding this keyword
const user = {
    username: "himanshu",
    price: 1299,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// using this inside the function allows us to access the internal properties of the objects
// user.welcomeMessage()
user.username = "Ahmad"
// user.welcomeMessage()

// console.log(this); // Return empty object {}

//this keyword is not used inside a function. It is undefined
// function logThisKeyword(){
//     let username = "hitesh"
//     console.log(`Username using this keyword: ${this.username} and general use case: ${username}`);
// }

// logThisKeyword()
//Same as normal functions
// const logUseCaseOfThis = function () {
//     let username = "himanshu"
//     console.log(`Username using this keyword: ${this.username} and general use case: ${username}`);
// }
//Same as normal functions
const logUseCaseOfThis =  () => {
    let username = "Himanshu"
    console.log(`Username using this keyword: ${this.username} and general use case: ${username}`);
}
// logUseCaseOfThis()

// ** CONCLUSION: this works in global reference and objects not inside functions

// ******** ARROW FUNCTIONS ********
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})

// Rules : () => { return } specify the return for the function as scope is define 
//         () => expression ex: (a,b)=> a+b is a valid syntax
//         () => (expression) ex: (a,b)=> (a+b) is also valid syntax


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()