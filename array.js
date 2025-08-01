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
// const ingredients = ["tea", "sugar", "milk", "water", "adrak", "elaichi"];
// const [ing1, ing2, ...restIng] = ingredients;
// will store the remaining rest of the elements in the ingredients array into the restIng array

// spread parameter
// const teaIng = [...ingredients]; // spreads all the elements of the ingredient array into the teaIng which are then stored into an array. 
// console.log(teaIng);


// use cases of destructuring

// swapping values of variables
// the general way to swap two variables will be to take a temp variable and all that shit
// with destructuring we can do it more quickly like :

// let first = 10;
// let second = 15;

// [first, second] = [second, first];

// console.log("first : ", first); // 15
// console.log("second : ", second); // 10
// swapped values

// merging

// let firstArr = [1, 2];
// let secArr = [6, 7, 8];
// let mixArr = [...firstArr, ...secArr];
// console.log(mixArr);

// length property --> it is not a method, it is a property so it is used without the ()
// console.log(mixArr.length); // 5
// with the length property we can shrink the length of an array

// console.log(secArr); // 6 7 8
// secArr.length = 2; // now the secArr array will hold only 2 elements, before it was holding three elements, the last element will be removed now
// console.log(secArr); // 6 7

// the length of an array can be from 2 ** 31 - 1



// array methods
// concat() -->
// let arr1 = [1,2], arr2 = [3,4];
// let arrCon = arr1.concat(arr2); // 1 2 3 4

// join() -->
// join method joins the array using a separator, the default separator used by this method is comma but we can pass our own separator
// and ultimately returns a string
// let joinArr = ["my", "name", "is", "anirudh"];
// // let res = joinArr.join(); // if i don't pass anything while calilng this method, this will just use comma as it's default separator : my,name,is,anirudh
// let res = joinArr.join("+"); // now this gives, my+name+is+anirudh
// when we join a empty array [] it returns a empty string ""

// fill()
// this method in js just fills the array with some values in it
// the fill method mutates, which means it changes the original array
// let arr = [1,2,3];
// arr.fill(4); // normal log woudlve logged [1,2,3], now after fill all the value in this array will be replaced by 4
    // -- selective filling :

    // let arr = ['red', 'green', 'blue'];
    
    // // arr.fill('pink', 1, 3); // arr.fill(*value*, *starting index*, *stopping index*);
    // console.log(arr);

// includes() --
// includes method checks if a value exist in a array or not, returns true or false based on that

// indexOf() -- returns the index of the first occurance of the passed element
//              if it does not find a value it returns -1 

// lastIndexOf() -- returns the index of the last occurance of the passed element, and -1 if no element is found

// reverse() -- reverses the array, and also it mutates the original array.



// sorting --
    // default sort() method converts the element types into strings
    // default sort() order is ascending

    // to sort in a descending order, we have to pass a comparator function into the sort method
    // console.log(arr.sort()); // default - ascending
    // console.log(arr.sort(function (a,b){
    //     if(a===b) return 0;
    //     else if (a > b) return -1;
    //     else return 1;
    // })); // this will now return a array in descending order

    // let arr = [10,2,34,15,11,100,250,45,23];
    // console.log(arr.sort()); // the output which it will give is not a sorted array
    //     // why? because the sort method first convert each element into a string and then compare it, rather than comparing the numeric value directly
    // console.log(arr.sort((a,b) => {return a===b ? 0 : a > b ? -1 : 1})); // descending sort
    // console.log(arr.sort((a,b) => {return a===b ? 0 : a > b ? 1 : -1})); // ascending sort


// splice() method --
        // delete or add some elements into an array
        // modify the element of an array
// splice(start, deleteCount, item1, item2);
        // item1 and 2 will be added into the modified array
        // start will be the starting index from which the deletion will begin
        // the deleteCount is the number of elements to be deleted from the start index
        // let arr = ['Ani', 'Khushi', 'Adi', 'Abhi'];
        // console.log(arr.splice(2,2)); // this will delete 'Adi' and 'Abhi' from the array
        // arr.splice(2,1,'Himanshi'); // this will replace 'Adi' with 'Himanshi'
        // console.log(arr);

// at() -- finds the value at the index which is passed
        // now this can find the value at negative indexes too, just now this time the iteration or the cound of index will begin from the end of the array.

// copyWithin() -- copies a part of an array, to an another location in the same array.
        // copyWithin(target, start, end)
        // target is the index from where the copyWithin function will start copying
    
        // let arr = [1,2,3,4,5,6,7];
        // arr.copyWithin(0,1,4);
        // console.log(arr);


// flat() -- this method works while using nested arrays, it flats out the elements of nested array
        // by default the flat method only flats out the first nested array, rest of the inside nested arrays stays the same
        // let arr = [1,2,[3,4]];
        // console.log(arr.flat()); // [1,2,3,4]
        // to flat out all the elements of an array we can use :
        // let arr = [1,2,[3,4,[5,[7,8]]]];
        // console.log(arr.flat(Infinity)); // [1,2,3,4,5,6,7,8]


// Grouping data in arrays
{
    const students = [
        {name: "Anirudh", branch: "BCA", GPA: 8.3},
        {name: "Khushi", branch: "BTech", GPA: 9},
        {name: "Aditya", branch: "BCA", GPA: 8},
        {name: "Abhi", branch: "BTech", GPA: 8.5},
    ]
    const groupedObject = Object.groupBy(students, ({branch})=>{
        return branch;
    });
    // console.log(groupedObject);

    const moreGPA = Object.groupBy(students, ({GPA})=>{
        return GPA >= 8.5 ? "More than 8.5" : "Less than 8.5"
    });
    // console.log(moreGPA);
}

// IMMUTABILITY IN JS
{
    // toReversed() -->
        // let arr = [1,2,3,4,5,6,7];
        // till now we used the methods like :
            // reverse(), splice()
        // these methods changes the original source array
        // to tackle that we have some other methods like :
        // const revArr = arr.toReversed(); // because this will return another array and not modify the original array
        // console.log(revArr);
    
    // toSorted() -->
        // let arr = [1,5,2,6,8,9,3,4];
        // let sorArr = arr.toSorted(); // this will now return a new sorted array.
        // console.log(sorArr);

    // toSpliced() -->
        // const numbers = [1,2,3,4,5];
        // const newNums = numbers.toSpliced(1,0,6);
        // console.log(numbers, newNums);

    // with() -->
        // this is useful when we are trying to change a element in an array but without mutating the original source array
        // const names = ["Anirudh", "Khushi", "Adi", "Abhi"];
        // const newNames = names.with(2,"Anmol");
        // console.log(names); // [ 'Anirudh', 'Khushi', 'Adi', 'Abhi' ]
        // console.log(newNames); // [ 'Anirudh', 'Khushi', 'Anmol', 'Abhi' ]
        // this also works with the negative index values
}


// Array Like & Static methods-->
{
    {key: "value"} // object
    [1,2,3,4,5] // array

    // Array like, is not an array but like an object, that has some behaviour like array, like we have index access and non negative length property
    // but is not an array. because it does not have other array methods which we studied before...
    // it has a length property

    const arr_Like = {0: "Hi", 1: "Hello", 2: "BoomBoom", length: 3};
    // console.log(arr_Like[0], arr_Like[2], arr_Like.length);
    // this is somewhat looks like we are accessing elements in an array but in reality we are NOT
    // console.log(arr_Like instanceof Object); //true

    // another example would be function
    function checkArgs() {
        console.log(arguments);
    }
    // whenever a function is created we get a arguments object assigned, which stores the arguments passed to that particular function
    // checkArgs(34,21); // when we invoked that function with some args, we got the output : [Arguments] { '0': 34, '1': 21 } and it is an object
    

    // Array-like to Arrays :
    function arg(){
        const arr = [...arguments]; // spreading the elements of arguments into the arr array
        console.log(arr);
        console.log(Array.isArray(arr)); // true
        arr.forEach((elem)=>{
            console.log(elem);
        })
    }
    // arg(2,3,4); // now when we invoke the function we get an array of [2,3,4]
    // we can now use array methods such as forEach on it...

    
    
    // Static Methods :
    
    // so that is one way of converting array like to array, the another way is :
    // Array.from(); 
    // when an array like object is passed to this function it returns the converted array
    function check(){
        const collected = Array.from(arguments);
        console.log(collected, Array.isArray(collected));
    }
    // check(1,2,3,4); // invoking this function now logs : [1,2,3,4] true
    // Array.from() is also one of the static methods of array


    // Array.fromAsync() -->
    // this also does the same thing the Array.from() does but in a different way
    // this returns a promise and not an array, we late can use that promise to get the value
    // like
    function getFromAsync(){
        const collectedPromise = Array.fromAsync(arguments); // this will return the promise
        collectedPromise.then((value) => console.log(value)); // the 'value' is the array
    }
    // getFromAsync(4,5,6);

    // Array.of() -->
    // this creates a new instance of an array, before we were creating an array from array like..
    // but this just creates a new array
    const first = new Array(2,3,4);
    const second = [1,2,3]
    // these are the typical two way of how we used to make arrays
    const third = Array.of(1, true, "Anirudh", {name: "Ali"}, [3,4]);

    // console.log(third, Array.isArray(third)); // true
}



// Iterator methods
{
    const customers = [
        {
            firstName: "Walter",
            lastName: "White",
            age: 52,
            gender: "Male",
            isMarried: true,
            totalExpense: 1200,
            itemsPurchased: ["Flask", "RV rental", "Methylamine"]
        },
        {
            firstName: "Jesse",
            lastName: "Pinkman",
            age: 26,
            gender: "Male",
            isMarried: false,
            totalExpense: 800,
            itemsPurchased: ["Beaker", "Gas mask", "Cheetos"]
        },
        {
            firstName: "Skyler",
            lastName: "White",
            age: 45,
            gender: "Female",
            isMarried: true,
            totalExpense: 500,
            itemsPurchased: ["Printer paper", "Ledger", "Pen"]
        },
        {
            firstName: "Lightning",
            lastName: "McQueen",
            age: 7,
            gender: "male",
            isMarried: false,
            totalExpense: 500,
            itemsPurchased: ["Oil", "Greese", "Tyres"]
        },
        {
            firstName: "Sherrif",
            lastName: "Woody",
            age: 5,
            gender: "Male",
            isMarried: true,
            totalExpense: 500,
            itemsPurchased: ["Paint", "Hat", "Tyres"]
        },
        {
            firstName: "Buzz",
            lastName: "Lightyear",
            age: 6,
            gender: "Male",
            isMarried: false,
            totalExpense: 500,
            itemsPurchased: ["Tennis Ball", "Oil", "Tyres"]
        }
    ];

    //filter() -- get senior citizens by filtering out other customers
    /*
        const newArr = arr.filter((element, index, arr) => {});

        what it does is whatever the action performed inside the callback function, if returns true, then that value will be stored inside the array.
    */
    const seniorCitizens = customers.filter((customer) => {
        return customer.age >= 40;
    })
    // console.log(seniorCitizens);

    // map() - Transform to add title and full name - transformational function
    /*
        const newArr = arr.map((element, index ,arr) => {})
    */
    const setTitle = customers.map((customer) => {
        let title = '';
        if(customer.gender === 'Male') title = "Mr.";
        else if(customer.gender === 'Female' && customer.isMarried === true) title = "Mrs.";
        else title = "Miss";

        customer['full_name'] = `${title} ${customer.firstName} ${customer.lastName}`;

        return customer;
    });
    // console.log(setTitle);

    // reduce()
    /*
        const averageAge = arr.reduce(reducer(accumulator, currentValue, index, array), initial value);
        
        -- this 'initial value' is the value which will be assigned to the accumulator

        reducer(accumulator, currentValue, index, array) -->
            do something with accumulator and currentValue
            get a result
            return that result

        that returned result will be then assigned to the accumulator
        in case, when accumulator is not assigned, the first value of the array will be assigned to it.

        in some case where we have to begin from the last element to the first, we can use the --
        reduceRight() method instead of a regular reduce function
    */

    const arr = [1,2,3,4,5];
    let sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    // console.log(sum);

    // To print the average of customers who boutght 'Tyres' in the customers object using the reduce funciton
    let count = 0;
    const averageAge = customers.reduce((acc, curr) => {
        if(curr.itemsPurchased.includes("Tyres")){
            acc = acc + curr.age;
            count++;
        }
        return acc;
    }, 0);
    // console.log(averageAge / count);

    // some() --> returns true if the callback function returns true for at least one of the element of the array
    /*
        arr.some((element, index, array) => {})
    */
    // check if we have a customer whose age is less than 6
    const childCustomer = customers.some((customer) => { return customer.age < 6 });
    // console.log(childCustomer); // this result true


    // just like some() --> we now have an every() method
    // every() --> this method returns true only when the callback function returns true for all the elements inside the array

    // let's check if all the customers were married or not?
    const marriedCust = customers.every((customer) => {return customer.isMarried});
    // console.log(marriedCust); // this returns false because not every customer was married.

    const nums = [1,2,3,4,5];
    const evenNums = [2,4,6,8,10];
    let checkEven = evenNums.every((num) => {return num / 2});
    // console.log(checkEven); // for nums.every() this returns false but for evenNums.every() this returns true


    // find() --> to find the youngest customer
    const youngestCustomer = customers.find((customer) => { return customer.age < 6});
    // console.log(youngestCustomer);
    // we can see that it returned the element which returned true for the condition we were checking
    
    // and so if we were to find the index of that element we can use the method
    // - findIndex()
    const youngestCustomerIndex = customers.findIndex((customer) => { return customer.age < 6 });
    // console.log(youngestCustomerIndex); // it returned 4


    // Method chaining
    // Use case : Get the total amount spent by married couples
    const totalAmount = customers.filter((customer) => {return customer.isMarried})
                            .reduce((acc, curr) => {
                                acc += curr.totalExpense;
                                return acc;
                            }, 0);
    // console.log(totalAmount);

    
    // entries -> this method will give an iterator for an array
    const numbers = [1,2,3,4];
    const numItr = numbers.entries();
    // console.log(numItr); // this gives us and Object [Array Iterator] {}
    // console.log(numItr.next().value); // this gives us next value in the iterator
    // this right now gives [0,1] in which 0 is the index and 1 is the value
    // so we have an array which have 1 at the 0th index, if we log this again we will get the next value this time
    // console.log(numItr.next().value); // [1,2]
    // 2 at the index 1

    // to print it whole, using a single loop we can do a little bit of destructuring
    // for(const [index, value] of numItr) console.log(index, value); // <-- destructuring

    // values() -->
    // the difference between this and entries() is just that this method only gives values in it's iterator and not the index

}