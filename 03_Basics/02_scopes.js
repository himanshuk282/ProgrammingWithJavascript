var c = 300 // It is not recommended as it allows variables to be re-initialized and dirty's the scope i.e block scope was missing
if(true){
    var c = 25
    // console.log("INNER: ", c)
}
let a = 300
// Here we can declare same vairable as ES6 supports, block scope so every declaration is a new variable
// a outside is global for the below block 
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //10
}



// console.log(a);// Since a is a let, it is considered as global scope : 300
// // console.log(b); // Error
// console.log(c); // Since var was used c got changed to 25 inside the block scope


function one(){

    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // Access is right -> hitesh
    }
    // console.log(website); // error
    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // Error
}

// console.log(username); // Error


// ++++++++++++++++++ interesting ++++++++++++++++++
//Concept Involved : Hoisting


console.log(addone(5)) // Allowed : 6

function addone(num){
    return num + 1
}



// addTwo(5) // Error as function is not defined at this stage
const addTwo = function(num){
    return num + 2
}