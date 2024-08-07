//User Object : Holds user related properties and methods
const user = {
  username: "himanshu",
  age: 26,
  signedIn: true,
  getUserDetails: function () {
    //console.log("getUserDetails called!");
    console.log(this); //It stores the reference of the current object
  },
};
// console.log(user.username);
// console.log(`The user, ${user.username} is ${user.age} years old.`);
// console.log(user.getUserDetails());
// user.getUserDetails();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
const userOne = new User("heman", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne);
console.log(userTwo);
