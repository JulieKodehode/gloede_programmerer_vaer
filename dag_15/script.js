console.log("Hello World!");

// DEL 1
// Create a variable that saves data. The data is getting an element from the HTML document with an ID.
const cardContainer = document.querySelector("#card");

console.log(cardContainer);


// DEL 2
// Create a variable that saves data. The data is creating a new HTML element.
const h2Title = document.createElement("h2");

// Giving our new variable content to be displayed.
h2Title.textContent = "Dette er en overskrift";

console.log(h2Title);

// Appending the HTML element we created in JS to our HTML document.
cardContainer.appendChild(h2Title);


// DEL 3
// Create a variable that saves data. The data is creating a new HTML element.
const pDescription = document.createElement("p");

// Giving our new variable content to be displayed.
pDescription.textContent = "Dette er en paragraf";

console.log(pDescription);

// Appending the HTML element we created in JS to our HTML document.
cardContainer.appendChild(pDescription);