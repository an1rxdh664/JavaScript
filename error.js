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


// try {
//     console.log("start");
//     abc;
//     console.log("end");
// } catch (err) {
//     // console.log("error occured : ", err); // error occured : ReferenceError: abc is not defined
//     // console.log(err); // ReferenceError: abc is not defined


//     console.log(err.name); // this will just log "ReferenceError"
//     console.log(err.message); // abc is not defined
//     console.log(err.stack); 
//     // the .stack method will log all the nested calls that led to this error
// }
// we can see that the error also have a message field which we can print using the '.message'

// just like message the error object has some other different methods we can use like
// err.name, err.message, err.stack


// Real word uses

// let's say i want to create a function which divides two numbers
// but when we try to divide something by 0 it gives infinity, and that is useless for the end user
// so what we can do is that we can throw custom errors

function divideNum(a, b){
    try{
        if(b===0){
            throw new Error("Cannot divide by 0. Division by 0 is not allowed.");
            // this new Error() is an error constructor like we construct objects, which creates an Instance of a error 
            // and we pass some message in it
            // because the error object has a message field in it,
            // then this error is throwed onto the catch block which then prints our error.message
        }
        const result = a / b;
        console.log("The result is " + result);
    } catch(error) {
        console.log("Got a error : ", error.message);
    }
}

// divideNum(10, 2); // this will log nothing and the code will be executed without any errors
// divideNum(10, 0); // this will log the error message we wrote above


// example
const person = {
    name: "anirudh",
    address: {
        city: "Gwalior",
        state: "Madhya Pradesh"
    }
}
function getPostalCode(user){
    try{
        console.log(user.address.postalCode); // this will log undefined because we do have the user.address block but not the postalCode key
        console.log(user.address.country.postalCode); // now this will log -->
        // Error accessing property:  Cannot read properties of undefined (reading 'postalCode')
    } catch (error) {
        console.error("Error accessing property: ", error.message);
    }
}
// getPostalCode(person);


// example 2
function validAge(age){
    try {
        if(isNaN(age)){
            throw new Error("Age must be a number. Enter a valid age");
        }
        console.log("Your age is " + age);
    } catch (error) {
        console.error("Error occured : " + error.message);
    }
}
// validAge("Anirudh");


// Rethrowing errors
function validDet(userDet){
    try {
        if(!userDet.name) throw new Error("A username is required. Please enter a username.");
        if(!userDet.email.includes("@")) throw new Error("Please enter a valid email address");
        console.log("name : " + userDet.name + "\nEmail : " + userDet.email);
    } catch (error) {
        console.error("Validation issues found : ", error.message);
        throw error;
    }
}

try{
    validDet({name: "Anirudh", email: "anirudh.com"});
} catch (error) {
    console.error("Showing error message : ", error.message);
}

// validDet({name: "Anirudh", email: "anirudh@gmail.com"});
// validDet({name: "Anirudh", email: "anirudh.com"}); // Validation issues found : Please enter a valid email address
