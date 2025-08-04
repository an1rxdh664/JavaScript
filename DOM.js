// Breakpoints are points where the code execution is paused

// DOM Types
// Document - this represents the entire webpage, everything inside it will be accessible using the document
// Node - A generic term for all the elements inside the DOM tree
// NodeList - An array of nodes
// Attr - represents the attributes of a node
// NameNodeMap - a collection of Attr.

// List filter
function filterList(){
    const inputElem = document.getElementById("inputBox");
    const input = inputElem.value;

    const items = document.querySelectorAll('ul#itemList li');
    
    items.forEach((item)=>{
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
    })
}