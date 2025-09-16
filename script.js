// Part 2: JavaScript Functions - Scope, Parameters & Return Values

// Global variable - accessible anywhere
let globalMessage = "Hello from the global scope!";

// Function with parameters and a return value
function calculateArea(length, width) {
  // Local variable - only exists inside this function
  let area = length * width;
  console.log("Inside calculateArea, local area is:", area);
  return area;
}

// Function demonstrating global vs. local scope
function showScope() {
  let localMessage = "Hello from the local scope!";
  console.log("Inside showScope, accessing global variable:", globalMessage);
  console.log("Inside showScope, accessing local variable:", localMessage);
}

// Reusable function to create and append a DOM element
function createDiv(text, color) {
  const newDiv = document.createElement('div');
  newDiv.textContent = text;
  newDiv.style.backgroundColor = color;
  newDiv.style.padding = "10px";
  newDiv.style.margin = "10px";
  document.body.appendChild(newDiv);
  return newDiv; // Returning the created element is useful
}

// Demonstrating function calls and their effects
console.log("Global message before calling showScope:", globalMessage);
showScope();
// The following line would cause an error because localMessage is not defined here
// console.log(localMessage); 

let roomArea = calculateArea(10, 5); // Calling a function with parameters
console.log("The calculated area is:", roomArea); // Using the returned value

createDiv("This div was created by a function!", "lightgreen");
createDiv("Another div!", "lightblue");
