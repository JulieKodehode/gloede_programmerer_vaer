// Import the function
import { hamburgerToggle } from "./hamburgerToggle.js";

// Get an element from HTML
const hamburgerImg = document.querySelector("#hamburgerImg");
console.log(hamburgerImg);

// Add an event listener to element
hamburgerImg.addEventListener("click", function () {
   // Set the arguments that fill the props
   hamburgerToggle("active", "hidden")
})


//
//

// Import the function
import { themeSwitchToggle } from "./themeSwitchToggle.js";

// Get an element from HTML
const themeSwitch = document.querySelector("#themeSwitch");
console.log(themeSwitch);

// Add an event listener to element
themeSwitch.addEventListener("click", function () {
   // Set the arguments that fill the props
   themeSwitchToggle("light", "dark")
})