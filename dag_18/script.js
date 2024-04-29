// Step 4
function addTodoTask() {
   event.preventDefault()

   console.log("Is button clicked?")

   // Step 6
   const taskInputData = document.querySelector("#taskInput").value; 
   console.log(taskInputData);

   // Step 8
   const taskListContent = document.querySelector("#taskList");
   console.log(taskListContent);

   // Step 9
   const newTaskItem = document.createElement("li");
   console.log(newTaskItem);

   // Step 10
   newTaskItem.textContent = taskInputData;

   // Step 11
   taskListContent.appendChild(newTaskItem);

   // Step 12
   const deleteButton = document.createElement("button");
   console.log(deleteButton);

   // Step 13
   deleteButton.textContent = "Delete todo task";

   // Step 14
   taskListContent.appendChild(deleteButton);

   // Step 15
   deleteButton.addEventListener("click", function () {
      event.preventDefault()
      newTaskItem.remove();
      deleteButton.remove();
   })
};

// Step 2
// const defines a constant variable (const erklærer en konstant variabel)
// taskSubmitButton is a variable name (taskSubmitButton er et variabel navn)
// = defines that we set/save data to the variable (= definerer at vi setter opp/lagrer informasjon til variabelen)
// document defines that we work with the HTML document (document erklærer at vi jobber med HTML dokumentet)
// .querySelector() is a method used to get elements from the HTML document (.querySelector er en metode som henter elementer fra HTML dokumentet)
// #taskSubmit is the id name we gave the element in HTML (#taskSubmit er id-navnet vi ga elementet i HTML)

// A variable that saves the data that we got an HTML element.
const taskSubmitButton = document.querySelector("#taskSubmit");
console.log(taskSubmitButton);

// Step 3
taskSubmitButton.addEventListener("click", addTodoTask);