//1 .Creating a promise
// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       console.log("Promise one says Hi 👋");
//       resolve();
//     } else {
//       reject("Promise one says Error 😥");
//     }
//   }, 1000);
// });
//2. Consuming a promise
// promiseOne
//   .then((response) => {
//     console.log("Promise one is resolved ✅");
//   })
//   .catch((error) => {
//     console.log("Promise one is rejected ❌");
//   })
//   .finally(() => {
//     console.log("Promise one is completed.");
//   });
//3. Sending response from promise
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      //   resolve({ name: "Himanshu", age: 26 });
      resolve({ age: 26 });
    } else {
      reject("Error : ❌");
    }
  }, 2000);
});
//4. Consuming promise response and chaining then
promiseTwo
  .then((response) => {
    // console.log(typeof response);
    // console.log(response);
    console.log("Response says, Name is : ", response?.name ?? "NA");
    return response.age;
    //Above return serves as an input to the chained then method
  })
  .then((age) => {
    console.log("Repsonse says, Age is : ", age);
  })
  .catch((error) => {
    console.log("Promise is rejected with error: ", error);
  })
  .finally(() => {
    console.log("Promise two is completed.");
  });
//5. Consuming promises using async and await
async function getAllUsers() {
  try {
    let response = await fetch("https://api.github.com/users/himanshuk282");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching records.");
  }
}
getAllUsers();
