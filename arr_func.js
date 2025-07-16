// isEven
// const isEven = (num) => {if(num%2==0) return true;}
// console.log(isEven(4));
// reverseString
// let revString = "";
// const string = "Hi";
// function reverseString(str) {
//     for(let i=str.length; i>=0;i--) revString = revString + str.charAt(i);
// }
// reverseString(string);
// console.log(revString);

// const arr = [4,6,8,1000,1,15,100];
// let max = arr[0];
// function isMax(arr){
//     for(let i=0;i<arr.length;i++) {
//         if(max < arr[i]) max = arr[i];
//     }
// }
// isMax(arr);
// console.log(max);

// const greet = (obj) => {
//     console.log("Hi my name is " + obj.name);
// }
// greet(student);
// const student = {
//     name: "Anirudh", age: 20, marks: 8, isMarried: "No"
// }
// let count = 0;
// const countKeys = (obj) => {
//     for(let i in obj) count++;
// }
// countKeys(student);
// console.log(count);


// delete student.marks;
// student.grades = "A";
// console.log(student);

// const arr = [5,3,1,6,4,3];
// let sum = 0;
// const sumArray = (arr) => {
//     for(let i in arr) sum += arr[i];
// }
// sumArray(arr);
// console.log(sum);

// let evenArr = [];
// const filterEven = (arr) => {
//     for(let i of arr) if(i%2==0) evenArr.push(i);
// }
// filterEven(arr);
// console.log(evenArr);

// const target = 3;
// const isPresent = (arr, target) => {
//     for(let i of arr) if(i==target) return true; else false;
// }
// console.log(isPresent(arr, target));

// const users = [
//   { name: "Jesse", age: 25 },
//   { name: "Walter", age: 50 },
//   { name: "Saul", age: 38 }
// ];
// let names = [];
// const returnNames = (x) => {
//     for(let i of x) names.push(i.name);
// }
// returnNames(users);
// console.log(names);

// const names = ["Walt", "Jesse", "Saul"];
// const newNames = names.map((name) => "Mr. " + name);
// console.log(newNames);

// const numbers = [11, 20, 5, 32, 9];
// const greaterThan10 = numbers.filter((nums) => nums > 10);
// console.log(greaterThan10);

// const bills = [100, 250, 50, 600];
// const total = bills.reduce((x,y) => x+y,0);
// console.log(total);

// const words = ["cook", "meth", "blue", "Heisenberg"];
// const result = words.filter((word) => word.length > 4).map((word) => word.toUpperCase());
// console.log(result);


// const fruits = ["apple", "banana", "cherry"];
// const output = fruits.map((value, index) => {
//   return index+": " + value;
// })
// console.log(output)

// const users = [
//   { name: "Walt", isActive: true },
//   { name: "Jesse", isActive: false },
//   { name: "Skyler", isActive: true }
// ];
// const activeUsers = users.filter(function (user){
//   if(user.isActive){
//     return user.name;
//   }
// })
// console.log(activeUsers);

// 


// const products = [
//   { name: "Meth", price: 1000 },
//   { name: "Flour", price: 30 },
//   { name: "Acid", price: 150 },
//   { name: "Methylamine", price: 500 }
// ];

// const totalPrice = products.filter((product) => product.price > 100).reduce((total,product) => total + product.price, 0)
// console.log(totalPrice);




// BITWISE Operations in JS
// & - BitwiseAND | - BitwiseOR ^ - BitwiseXOR
// console.log(15 | 9);
// console.log(15 & 9);
// console.log(9 << 2);

// REST Parameter -> it is used when we don't know how many values are passed as argument when invoking the function. the rest parameter can never be the first parameter in the function
// function add(x,y,...rest){}


// Pure functions are functions which give same result for same input.
// if by any means any variable is used which is outside the control of the function, it converts the whole function to an impure function.


// Temporal Dead Zones -
// The area where you cannot access a variable until it is initialized
// it will result in Reference Error