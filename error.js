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

// try block gets executed
// if no error is caught inside the try block then the catch block is ignored and will not be executed
// if there is an error in the try block, the execution of the try block will stop there and the control will be
// shifted to the catch block
// in the catch block we can find information about the error we have caught and do the needful


// try {
//     console.log("start");
//     console.log("end");
// } catch (err) {
//     console.log("error occured", err);
// }
// we can see that when there is no error inside the try block the code gets fully executed and the catch block is never executed
// but if we do something like....

// try {
//     console.log("start");
//     abc;
//     console.log("end");
// } catch (err) {
//     console.log("error occured : ", err);
// }
// this printed "start" and then when an error occured the control was shifter to the catch block where we logged that error
// we can also see our message "error occured : " inside the error message in the output


try {
    console.log("start");
    abc;
    console.log("end");
} catch (err) {
    // console.log("error occured : ", err); // error occured : ReferenceError: abc is not defined
    // console.log(err); // ReferenceError: abc is not defined


    console.log(err.name); // this will just log "ReferenceError"
    console.log(err.message); // abc is not defined
    console.log(err.stack); 
    // the .stack method will log all the nested calls that led to this error
}
// we can see that the error also have a message field which we can print using the '.message'

// just like message the error object has some other different methods we can use like
// err.name, err.message, err.stack