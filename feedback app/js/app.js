//Javascript important for reactjs
/*
ES6+ Features

1. Arrow Functions:
- Syntax sugar for function expressions
- No need to declare the function name


*/

//there is this
// function fun(a, b, c) {
//   name = "ram";
//   age = 45;
//   city=90;
//   console.log("Hello World");
//   console.log(a + b + c);
//   console.log(this.name);
//   console.log(this.age);

//   function test(){

//   }
// }

// fun(10, 20, 30);

//there is not this:
// const myFun = (a, b, c) => {
//   age = 50;
//   console.log("Hello Arrow Function");
//   console.log(a + b + c);
// };

// myFun(10, 20, 30);

// function test(sayHello) {
//   console.log("calling sayhello");
//   sayHello();
// }

// test(() => {
//   console.log("this is say hello function");
// });

// function fetchData(url, successCallback) {
//   console.log("Fetching data");
//   console.log(url);
//   successCallback();
// }
// fetchData('http://',()=>{
//     console.log("Success")
// })

// fetch("https://jsonplaceholder.tyfpicode.com/todos/1")
//   .then((response) => {
//     console.log("success");

//     console.log(response);
//   })
//   .catch((error) => {
//     console.log("error")
//     console.log(error);
//   });

// const fun=()=> 45;
// console.log(fun())

/*

2. String Templates:
` ${variable} `

*/

// let name = "Ali";
// let message=`Hello ${name}`;
// let a=45;
// let b=79;
// console.log(`${a+b}`);
const fetchData = (url) => {
  console.log(url);
};
const baseUrl = `http://localhost:8080`;
const userId = "123456";
fetchData(`${baseUrl}/api/v1/${userId}/images`);

/*

3. Object & Array Destructuring:


*/

const person = { name: "Ali", age: 20 };
const friends = ["arvind", "sankar", "chandan"];

//  const f1=friends[0]

//  const f2=friends[1]

//  const f3=friends[2]

//  console.log(f1)

const [f1, f2, f3] = friends;
console.log(f1);
console.log(f2);
console.log(f3);

const { name, age } = person;
console.log(name);
console.log(age);

function ProfileComp({ firstName, lastName }) {}

/*
4. Rest and Spread Operator:

*/

const newFriends = [...friends, "sachin", "rahul"];
console.log(newFriends);

const user = {
  ...person,
  age: 25,
  city: "Delhi",
  country: "India",
};

console.log(user);

// localStorage.setItem(key,value)
// localStorage.get(key)
