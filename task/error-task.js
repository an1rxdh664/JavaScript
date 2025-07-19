function fetchData(url){
    try {
        if(!url.includes('https')) throw new Error("Invalid URL.");
        console.log("Entered URL : ", url);
    } catch (error) {
        console.error("Error occured : ", error.message);
    }
}
// fetchData("https//:www.youtube.com");

const user = {username: "", age: -2};
const user2 = {username: "Anirudh", age: -2};
const user3 = {username: "Ben", age: 20};
function validateUser(userInput){
    try {
        if(!userInput.username) throw new Error("Username cannot be empty");
        if(userInput.age < 0) throw new Error("Age must be a positive number");
        console.log(`Acc Name : ${userInput.username}\nAge : ${userInput.age}`);
    } catch (error) {
        console.error("ValidationError : ", error.message);
    }
}
validateUser(user);
validateUser(user2);
validateUser(user3);