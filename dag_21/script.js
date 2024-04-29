// Function props

// First () is a parameter

/** 
   Created a function that takes two parameters 'greet' and 'hello'.
   Logging the two parameters to console.
   Calling the function with two arguments that compliment the two parameters giving them content.
*/
function sayHello(greet, name) {

   // const hello = "Hello"

   console.log(greet);
   console.log(name);
   console.log(greet, name);
}

// Second () is a argument
sayHello("Hello,", "Julie!");

// Props calculator
function calculator(num1, num2) {

   console.log (num1 + num2)
}

calculator(5, 5)

// this. keyword

/**
This function takes four parameters. We are using 'this.' to set up each parameter as an key:value in a object. We create a new variable using the constructed function and adding values to the parameters in an argument. 
*/
function myCharacter(name, race, specialty, level) {

   this.name = name;
   this.race = race;
   this.specialty = specialty;
   this.level = level;
}

const juliesCharacter = new myCharacter("Julie", "Human", "Mage", 99);
const trulsCharacter = new myCharacter("Truls", "Dwarf", "Two-handed", 16);

console.log(juliesCharacter);
console.log(trulsCharacter);