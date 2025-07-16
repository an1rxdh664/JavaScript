// This

// THIS at the global level is the window object.
// but at different levels the value of THIS changes.

// But if we have a object which has a method which returns THIS like :
// const user = {
//     id: "123",
//     age: 20,
//     gender: "Male",
//     returnThis: function(){
//         return this;
//     }
// }
// // now what will be the output if we call that method.
// console.log(user.returnThis()); // we can see that this log will now print the whole object in the terminal.
// which means the value of THIS is refering to the object which it is placed in.
// the value of THIS will be bound only to the object from which we have called the method.

// this is called Implicit Binding.


// const det = {
//     name: "anirudh",
//     age: 20
// };
// const det2 = {
//     name: "khushi",
//     age: 20
// } 
// function greet(obj){
//     obj.getDet = function () {
//         console.log(`${this.name} is ${this.age} years old.`);
//     }
// }
// greet(det);
// greet(det2);
// det.getDet();
// det2.getDet();


// If this is declared inside a function
// function returnSomething(){
//     console.log(this);
// }
// returnSomething(); // we will see that the this inside the function is now pointing toward the global object
// so even if this is declared inside a function or let's say a nested function it will still point toward the
// global object unless STRICT CODE EXECUTION IS APPLIED

// javascript has a method called strict because even if a function is declared inside a function
// function outer(){
//     console.log(this);
//     function inner(){
//         console.log(this);
//     }
//     inner();
// }
// outer();
// the output for both the this keywords inside the function will be the global object because this inside the
// nested function still points toward the global object.
// unless strict mode is applied

// strict mode in javascript is used when we need that the code which we are writing is adhering to some of the
// javascript phylosophies we follow
// to apply it we need to type "use strict" on the top of the our js file
// what strict mode does is that it restricts THIS to point to the global object when declared inside a standalone function
// and when THIS is declared inside a function in strict mode it will return undefined

/* CODE BELOW SHOULD BE EXECUTED AFTER ENABLING STRICT MODE IN JS */
// function examp(){
//     console.log("this inside function in strict mode", this);
// }
// examp(); // this inside function in strict mode undefined

// This inside an arrow function in global scope

// const thisAr = () => console.log(this);

// console.log("this inside a arrow function declared in global scope");
// thisAr(); // an arrow function does not have their own THIS, so the value of THIS inside an arrow function depends
// on where the arrow function is defined, the lexical environment of the arrow function.
// and one more thing, while executing thisAr() function, the THIS inside it still points to the global object even inside the strict mode.

// const food = {
//     name: "orange",
//     color: "orange",
//     // getDesc: () => `${this.name} is of color ${this.color}`
//     // getDesc: function () {
//     //     return `${this.name} is of color ${this.color}`;
//     // }
// }
// when executing the code inside the terminal it will result in
// undefined is of color undefined
// which is because the getDesc() method is an arrow function and arrow functions doesn't have their own this.
// and inside the terminal the value for this is undefined but on the console of a browser this will point to the global object.

// console.log(food.getDesc());

// if the getDesc() method is a normal function this will work normally.

// but if we still want to print the value using the arrow function what we can do is put the arrow function one level down.

// const food = {
//     name: "orange",
//     color: "orange",
//     getDesc: function (){
//         return () => `${this.name} is of color ${this.color}`;
//     }
// }
// console.log(food.getDesc()()); // ()() to call the returned function in one line.



// Explicit Binding

// function greet(){
//     console.log(`${this.name} is ${this.age} years old`);
// }
// const user = {
//     name: "khushi",
//     age: 20
// }
// we can see that these two have nothing connecting them
// but we can still point the this keyword inside the function to the object which we want by
// some methods like call, apply, bind

// call method --
// greet.call(user); // 



const likes = (hobby) => {
    console.log(this.name + ' likes ' + hobby);
}
const user = {
    name: "anirudh"
}

likes.call(user, "playing");