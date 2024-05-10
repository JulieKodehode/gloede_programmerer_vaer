// Import the function
import { hamburgerToggle } from "./hamburgerToggle.js";

// Get an element from HTML
const hamburgerImg = document.querySelector("#hamburgerImg");
console.log(hamburgerImg);

// Add an event listener to element
hamburgerImg.addEventListener("click", function () {
   // Set the arguments that fill the props
   hamburgerToggle("active", "invinsible")
})