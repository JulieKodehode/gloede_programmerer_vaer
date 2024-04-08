// For loop

// When i (index) is smaller than 10 it launches the following code
// i gets incremented by 1 (i++)
// then the body of the function runs
//  {
//
// }
//
// when i reaches 10 the code stops running, and the loop is completed

const friendList = ["Per", "Pål", "Espen"];

for (i = 0; i < friendList.length; i++) {
  console.log(friendList[i]);
}

// DEL 1

const cardContainer = document.querySelector("#card");

for (i = 0; i < friendList.length; i++) {
  const h2Title = document.createElement("h2");
  const img = document.createElement("img");
  img.src = h2Title.textContent = friendList[i];
  console.log(h2Title);
  cardContainer.appendChild(h2Title);
}
