// Create a function
function themeSwitchToggle (light, dark) {
   // Get an element from HTML
   const body = document.querySelector("#body");
   console.log(body)

   const hamburgerImg = document.querySelector("#hamburgerImg")

   const themeSwitchIcon = document.querySelector("#themeSwitch");

   // Check if clicked
   console.log("Is button clicked?")

   // Set up an if/else statement to check whats true or false
   if (body.classList.contains(light)) {
      // If true that light is present remove light and add dark
      body.classList.remove(light)
      body.classList.add(dark)

      // CSS modification to set the src for the hamburger icon in header
      hamburgerImg.src = "menu.png"

      // CSS modification to set the src and alt for the theme switch icon in header
      themeSwitchIcon.src = "sun.png"
      themeSwitchIcon.alt = "Sun icon for dark theme mode"
   } else if (body.classList.contains(dark)){
      // If true that dark is present remove dark and add light
      body.classList.remove(dark)
      body.classList.add(light)

      // CSS modification to set the src for the hamburger icon in header
      hamburgerImg.src = "hamburger.png"

      // CSS modification to set the src and alt for the theme switch icon in header
      themeSwitchIcon.src = "moon.png"
      themeSwitchIcon.alt = "Moon icon for light theme mode"
   } else {
      console.log("Something is wrong")
   }
}

// Export the function
export {themeSwitchToggle};