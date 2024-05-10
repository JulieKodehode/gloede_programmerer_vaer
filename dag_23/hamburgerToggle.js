// Create a function
function hamburgerToggle (active, hidden) {
   // Get an element from HTML
   const ul = document.querySelector("#ul");
   console.log(ul)

   // Check if clicked
   console.log("Is button clicked?")


   // Set up an if/else statement to check whats true or false
   if (ul.classList.contains(active)) {
      // If true that active is present remove active and add hidden
      ul.classList.remove(active)
      ul.classList.add(hidden)
   } else if (ul.classList.contains(hidden)){
      // If true that hidden is present remove hidden and add active
      ul.classList.remove(hidden)
      ul.classList.add(active)
   } else {
      console.log("Something is wrong")
   }
}

// Export the function
export {hamburgerToggle};