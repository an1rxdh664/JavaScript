// Constructor functions -
// Functions which have the first letter of their name capitalized, are called constructor functions.
// it helps us create different new instances of a object, with a desired type.
// function Car(name, model){
//     this.name = name;
//     this.model = model;
// }

// const bmwCar = new Car("BMW", "X1");
// const audiCar = new Car("Audi", "Q7");

// console.log(bmwCar);
// console.log(audiCar);

// another way of creating objects in js is using function factory --
// function createUser(name, age){
//     return {
//         name,
//         age
//     }
// }
// // The reason why the return object does not contain any semicolon to define key and value
// // is because both the key, value are same as the parameter which we are passing inside the function.
// const user1 = createUser("Anirudh", 20);
// console.log(user1);

// a function inside an object is called METHOD.

// nested object
// let profile = {
//     name: "anirudh",
//     age: 20,
//     address: {
//         city: "Gwalior",
//         state: "Madhya Pradesh",
//         pin: 474001,
//         greeting() {
//             console.log("check");
//         }
//     }
// }
// console.log(profile.address.city);
// profile.address.greeting();

// to check if a particular property exist in an object we can use the "in" keyword
// which is a boolean keyword, it returns true if the property exists in the object and false if not.
// console.log("gender" in profile);

// also if i want to get all the keys inside an object, we can use the Object.keys() method.
// console.log(Object.keys(profile));
// [ 'name', 'age', 'address' ] the output, it returns an array of all the keys inside an object

// Objects in js are always passed as references instead of values.


// Object references

// const fruit = {name: "mango"}
// const fruit2 = {name: "mango"};
// console.log(fruit === fruit2);
// this will return false because even if the objects are containing the same value they have different references
// objects are compared by their references

// let fruit = {name: "mango"}
// let fruit2 = {name: "mango"};
// fruit2 = fruit;
// console.log(fruit === fruit2);
// this returns true because now both the object are now pointing towards the same reference location in the memory


// STATIC METHODS


// Object.assign() -

// const obj1 = {p:1, q:2};
// const obj2 = {a:1, b:2};
// const returnedObj = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(returnedObj);
// console.log(obj1 === returnedObj);
// Object.assign() copies all the properties from the obj2 to the obj1.

// const obj1 = {p:1, a:2};
// const obj2 = {a:1, b:2};
// const returnedObj = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(returnedObj);
//{ p: 1, a: 1, b: 2 }
// We can see in the output that the value of a in the obj2 overwrites the value of a in obj1
// that is the case every time whenever there is a commanility between the keys of the target object and the source object
// the common key of the source object will overwrite the common key of the target
// if we compare both the objects, the returnedObj and the Obj1 it will return true, why? because
// when assigning the obj2 to obj1, the function copied all the values inside the obj2 into the obj1 object
// and also assigned that same value to the returnedObj, which is just like the previous example.

// const obj = {name: "anirudh"};
// const tarObj = Object.assign({}, obj);
// console.log(tarObj);
// console.log(tarObj === obj);
// And the reason this comparison returns false is that when assigning the obj to an empty object
// the empty object is then assigned to tarObj which is a completely new object with a new memory address.
// so that's why the comparison returns false.

// The cloning that happened here is Shallow cloning, which means that it won't copy the deeply nested objects.



// Shallow Copy VS Deep Copy

// let obj1 = {
//     a: 1,
//     b: { c : 2}
// }

// let tarObj = Object.assign({}, obj1);
// console.log(obj1);
// console.log(tarObj); // A shallow copy has been made
// but if we change the value of the nested object inside the new tarObj we observe that
// tarObj.b.c = 3;
// console.log(obj1);
// console.log(tarObj);


// we see that the value for the nested object key 'c' has changed for both the objects
// when we only targeted the nested object inside the new tarObj. why is that?
// the Object.assign() creates a shallow copy of the source object and copies it to the target object, we know that
// but if the source object has some nested object inside it, then during assign() the reference to the nested object
// or let's say that the memory address to the nested object inside the source object is copied into the target object
// so when modifying the nested object inside the tarObj it modifies the referenced value which is same for both the obj1 and tarObj
// that's why we see that the value for both of them has changed.

// but that won't be the case for the normal 'a' value, as normal key-values are directly copied from source into target.
// so even if we modify the 'a' in target it won't change the 'a' in obj1.
// the above phenomena occurs only to the nested object as their references are copied. not the value.

// to avoid this we use DEEP CLONE or STRUCTURED CLONE

// const tarObj = structuredClone(obj1); // deep cloning
// tarObj.b.c = 3;
// console.log(obj1); // { a: 1, b: { c: 2 } }
// console.log(tarObj); // { a: 1, b: { c: 3 } }


// Object.entries() -- converts an object into an array.
// const obj = {
//     a: 2,
//     b: "anirudh"
// };
// const myArr = Object.entries(obj);
// console.log(myArr); // [ [ 'a', 2 ], [ 'b', 'anirudh' ] ]

// Object.fromentries() -- converts an array to a object.
// const myArr = new Map([
//     ["name", "anirudh"],
//     ["age", 20]
// ]);
// const myObj = Object.fromEntries(myArr);
// console.log(myObj); // { name: 'anirudh', age: 20 }



// Immutability with freeze()
// immutable - something you cannot change, mutable - something you can change.
// what it does is it freezes the passed object, meaning we cannot change the value inside it.

// const object1 = {
//     salary: 1000
// };

// Object.freeze(object1);

// object1.salary = 2000;

// console.log(object1); // no changes. the salary stays 1000.

// console.log(Object.isFrozen(object1)) // to check if a object is frozen or not - true if yes, false if no


// but there is a catch, when we freeze() an object, it completely freezes it, meaning
// we cannot add a new value into it, we cannot delete a value from it, cannot update a value.

// now we see
// Object.seal() -->

const obj1 = {
    sal: 1000
}
Object.seal(obj1); // sealed the object.

delete obj1.sal; // so now if we try to update or delete something from this obejct...
obj1.name = "Anirudh" // or try to add a new value into it

console.log(obj1); // it won't have any changes.

obj1.sal = 2999;
console.log(obj1); // but we can update the value which is inside the object.
// that is the difference b/w seal() and freeze();

// the hasOwn() method --> it returns true or false based on if the value is present inside the object or not.
console.log(Object.hasOwn(obj1, "sal")); // true because it have sal in it
console.log(Object.hasOwn(obj1, "name")); // false because it does not have name in it.