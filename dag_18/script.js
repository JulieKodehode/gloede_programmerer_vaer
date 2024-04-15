function addTodoTask() {
   // Code
   event.preventDefault()

   console.log("Is button clicked?")

   const taskInputData = document.querySelector("#taskInput").value;
   console.log(taskInputData);

   const taskListContent = document.querySelector("#taskList");
   console.log(taskListContent);

   const newTaskItem = document.createElement("li");
   console.log(newTaskItem);

   newTaskItem.textContent = taskInputData;

   taskListContent.appendChild(newTaskItem);
};

const taskSubmitButton = document.querySelector("#taskSubmit");
console.log(taskSubmitButton);

taskSubmitButton.addEventListener("click", addTodoTask);