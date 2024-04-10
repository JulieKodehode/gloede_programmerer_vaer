// document.querySelector er en funksjon som henter ut et element fra HTML-filen
// når vi bruker # så henter vi ut et element med en spesifikk id
// når vi bruker . så henter vi ut et element med en spesifikk class
// id brukes kun på 1 element
// class kan brukes på flere elementer

const nameBox = document.querySelector(".nameBox");

const exampleArray = ["per", "pål", "espen"];

// for å hente ut et element fra et array bruker vi [index]
// index starter på 0, så per vil være null
// på neste linje console logger vi per.

console.log(exampleArray[0]);

for (let i = 0; i < exampleArray.length; i++) {
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = exampleArray[i];
  nameBox.appendChild(nameParagraph);
}
