// Object destructuring
// retrieves particular data from an object

// const userData = {
//     name: "anirudh",
//     age: 20,
//     grade: "Uni",
//     contactDetails: {
//         mobNum: "123-456-789",
//         email: "anirudhhh637@gmail.com",
//     },
//     address: {
//         city: "gwalior",
//         state: "Madhya Pradesh",
//         country: "India"
//     },
//     langKnow: ["c", "js", "java"],
//     isMarried: false
// }

// typical way of accessing or retrieving the data from this object would be like :
// const name = userData.name;
// const age = userData.age;
// const langKnow = userData.langKnow;
// and this works just fine, the only problem is that this is too much code to write. So that's where destructuring steps in


// Destructuring Normal

// const {name, age, langKnow} = userData;
// // this is destructuring, less code to write.
// // what happens is three variables are created and area assigned the value of the same key from the object into them.
// console.log(name, age, langKnow); // anirudh 20 [ 'c', 'js', 'java' ]


// // what if we want to assign a new name to the variable which holds the value for the destructured object key
// const {name: objName} = userData; // this is called ALIASES
// console.log(objName);

// // let's say when working with nested objects, you want to retrieve the data of a particular nested value and use it somewhere...
// // typical program would look like

// const { address } = userData;
// console.log(address.city); // typical way of accessing a nested object value.

// const { address: {city} } = userData;
// console.log(city); // this way we can pick and retrieve specefic data from a nested object using destructuring without having to write so many lines of code.



// NEW TOPIC --
// Destructuring to functional parameters
// let's say if we want to access a value inside a object and use it as a parameter inside a function
// because in normal way the whole object has to passed through the parameter...

// function sendEmail(details){
//     console.log(`sent email to ${details.contactDetails.email}`);
// }
// sendEmail(userData);

// but there is no need to send the whole object, because using destructuring we can send that single particular value that we want as parameters directly...

// function sendEmail({contactDetails: {email}}){
//     console.log(`sent email to ${email}`);
// }
// sendEmail(userData);
// this works just the same as before but without having to pass the whole object as parameter.
        


// NEW TOPIC -->
// Destructuring the functional return value
// let's say that we have a arrow function that returns an object..

// const getDetails = () => {
//     return {
//         name: "anirudh",
//         age: 20,
//         grade: "Uni",
//         contactDetails: {
//             mobNum: "123-456-789",
//             email: "anirudhhh637@gmail.com",
//         },
//         address: {
//             city: "gwalior",
//             state: "Madhya Pradesh",
//             country: "India"
//         },
//         langKnow: ["c", "js", "java"],
//         isMarried: false
//     }
// }

// now if we were to access specific value from this, let's say name and isMarried
// typical way would be -->

// const anotherDetail = getDetails();
// const name = anotherDetail.name;
// const isMarried = anotherDetail.isMarried;
// console.log(name, isMarried);

// destructured way would be -->
// const {name: objName, isMarried: status} = getDetails(); // objName and status are ALIASES
// console.log(objName, status);


// NEW TOPIC -->
// Destructuring in loops
// const details = [
//     {
//         name: "anirudh",
//         age: 20
//     },
//     {
//         name: "alya",
//         age: 18
//     },
//     {
//         name: "ali",
//         age: 19
//     }
// ];

// to print the values of each object inside this array we use for...of loop
// typical way -->
// for(let names of details){
//     console.log(names.name, names.age);
// }

// destructured way -->
// for(let {name, age} of details){
//     console.log(name,age);
// }



// NEW TOPIC -->
// OPTIONAL CHAINING
// this method is to not throw error when trying to access a undefined value which results in program crashing
// meaning, even if we are trying to access something which is not defined in an object it would not crash the program.

// const purse = {
//     note: 2,
//     value: {
//         "100": 2,
//         "500": 0
//     }
// }
// console.log(purse.value[100]); // returns 2
// console.log(purse.coinCount); // undefined
// // console.log(purse.coinCount.value); // this throws an error -- TypeError: Cannot read properties of undefined (reading 'value')

// // to avoid that
// const value = purse.coinCount?.value;
// console.log(value); // now this results undefined and not a TypeError which would have crashed our program.

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let {name, address, age} of users){
    console.log(name, address, age);
}