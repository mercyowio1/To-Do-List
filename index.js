document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  // Function to add a task
  function addTask() {
    // Get input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    // Add event listener to delete task
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Event listener for Add Task button
  addTaskButton.addEventListener("click", addTask);

  // Allow pressing "Enter" to add task
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
