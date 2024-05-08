/*this. keyword*/

/**This function takes four parameters. We are using 'this.' to set up each parameter as an key:value in a object. We create a new variable using the constructed function and adding values to the parameters in an argument.*/

function character(name, race, specialty, level) {
   this.name = name;
   this.race = race; 
   this.specialty = specialty;
   this.level = level;
};


//
//

const juliesCharacter = new character("Julie", "Human", "Mage", 99);

const trulsCharacter = new character("Truls", "Dwarf", "Two-handed", 16);

const newCharacter = new character("Goobers", "Dark elf", "Necromancer", 40);


console.log(juliesCharacter);
console.log(trulsCharacter);


//
//


function displayCharacterInfo(character) {
   /* Set up a function that displays information about a character*/
   
   const displayCharacter = document.querySelector("#displayCharacter");
   console.log(displayCharacter); 
   
   displayCharacter.innerHTML = `
   <h2>${character.name}</h2>
   <p>${character.race}</p>
   <p>${character.specialty}</p>
   <p>${character.level}</p>
   `;
};

displayCharacterInfo(juliesCharacter);

displayCharacterInfo(trulsCharacter);

displayCharacterInfo(newCharacter);

export {character};