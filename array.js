// Array constructor

// const nums = [1,2,3,4,5];
// const nums1 = new Array(1,2,3,4,5); // array constructor

// console.log(nums, nums1, nums===nums1); // both create new arrays but are not equal

// adding elements to the array -->

// push() - end of array, but it returns something

// const alp = [1,2,3,4,5]; // currently this array holds 5 elements
// console.log(alp);

// const addEl = alp.push(6); // a new element is pushed and whatever result was returned is stored in another variable
// console.log(alp); // we can now see the updated array

// but if we log the addEl variable we will get --
// console.log(addEl); // 6, because whenever a push method is called on an array it will return the updated number of total elements inside the array now.
// also the push method modifies the original source array, which means it is mutable


// unshift - adds element to the beginning

// const rel = alp.unshift(0);
// console.log(alp, rel); // logging the rel also returned the total number of elements inside the array


// pop() -- removes element from last
// const res = alp.pop();
// console.log(alp, res); // the pop method returns the element which was popped from the array.

// shift() -- removes element from the beginning

// to create a copy of an array we can use .slice() method
// const copArr = alp.slice();
// console.log(alp, copArr, alp===copArr);

// to check if something is an array or not we can use .isArray() method
// console.log(Array.isArray(alp)); // true because alp is an array
// console.log(Array.isArray('A')); // false because 'A' is a string not a array
// console.log(Array.isArray([])) // true because even if it is empty it is an array.


// Array destructuring
// if we were to store certain values from a array into separate value to use later
// the typical way would be to create separate variables and assign each value by it's index
// but if we were to use such an array where we cannot get the index value

// const arr = [1,2,3,4,5,6,7,8];
// const [one, two, three] = [1,2,3];
// console.log(one, two, three);

// const arr = ["anirudh", "abhi", "aditya", "anmol"];
// const [name1, name2, name3] = arr[0, 1, 2]; // example to learn about in future
// const [name1, name2, name3] = ["anirudh", "abhi", "aditya"]; 
// console.log(name1, name2, name3);

// assiging a default value 
// let say when destructuring an array, the array currently does not have specefic value to assign to the variable, in that case
// const [us1, us2 = "Aliya"] = ["Anirudh"];
// console.log(us1, us2); // the default value will be overwritten once the desired value for that variable is assigned


// during destructuring if we want to skip certain value, like 2 in this case we have to do something like
// const [val1, ,val2] = [1,2,3];
// console.log(val1, val2) // 1 3


// Nested arrays :
// const arr = [1, 2, [3,4]]; // total elements inside this array are 3, not 4, because the last element of this array is a separate array itself which holds two elements.



// rest and spread

// ...rest parameter is used with variable and ...spread parameter is used with the value of the array itself
const ingredients = ["tea", "sugar", "milk", "water", "adrak", "elaichi"];
// const [ing1, ing2, ...restIng] = ingredients;
// will store the remaining rest of the elements in the ingredients array into the restIng array

// spread parameter
const teaIng = [...ingredients]; // spreads all the elements of the ingredient array into the teaIng which are then stored into an array. 
// console.log(teaIng);


