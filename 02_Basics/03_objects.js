//Objects 
//You can create an object in two ways:
// A) Singleton
// Object.create

// B) object literals

const mySym = Symbol("key1")

const user = {
    name: "Himanshu",
    "full name": "Himanshu Singh",
    [mySym]: "myValueForSymbol",
    age: 25,
    location: "Lucknow",
    email: "himanshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(user.email)// access using . notation
// console.log(user["email"])
// console.log(user["full name"])// Access using ["key"]
// console.log(user[mySym]) //Symbol can be read only in this way

user.email = "himanshu@chatgpt.com"
// Object.freeze(user)
user.email = "himanshu@microsoft.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
user.greeting();
user.greetingTwo();
// console.log(user.greeting());
// console.log(user.greetingTwo());