// parsing errors - such errors that happen when grammatical mistakes are there in your language

// runtime error - it is good by syntax, but when we execute it, it doest not give us the desired output 

// Exceptions in JS
// Exceptions are runtime errors that disrupt program execution

// console.log(x); // Uncaught reference error

// let obj = null;
// console.log(obj.name); // typeError cannot read properties of null

// console.log("hi" // SyntaxError


// To catch errors in your program and to gracefully handle it, js have something called the try...catch
// which allows us to catch the errors in our programs and DO SOMETHING with them

try {
    // logic
} catch (err) {
    // handle error
}
// all the information about the type of error which happens in the try block will be stored in the err in catch block;
