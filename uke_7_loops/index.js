// For loop

// array.length method is used to find the number of items in an array.
// so if an array contains 3 names, the array.length of that array is 3.

// When i (index) is smaller than friendList.length it launches the following code
// i gets incremented by 1 (i++)
// then the body of the function runs
//  {
//
// }
//
// when i reaches friendList.length (3) the code stops running, and the loop is completed

const friendList = ["Per", "Pål", "Espen"];

for (i = 0; i < friendList.length; i++) {
  console.log(friendList[i]);
}

// DEL 1

const cardContainer = document.querySelector("#card");

// Here we use the code from last week but put it inside a loop
// We also change the textContent to be the index of the array we are currently on.
for (i = 0; i < friendList.length; i++) {
  const h2Title = document.createElement("h2");
  const img = document.createElement("img");
  img.src = h2Title.textContent = friendList[i];
  console.log(h2Title);
  cardContainer.appendChild(h2Title);
}
