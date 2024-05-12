const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("You must write something.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;
    li.className = "task-item";
    li.onclick = toggleTask;

    const deleteButton = document.createElement("span");
    deleteButton.textContent = "\u00d7";
    deleteButton.className = "close";
    deleteButton.onclick = function(event) {
        event.stopPropagation(); // Prevent li click event from firing
        li.remove(); // Remove the task when delete (x) is clicked
    };

    li.appendChild(deleteButton);
    listContainer.appendChild(li);

    inputBox.value = ""; // Clear input field after adding task
}

function toggleTask() {
    this.classList.toggle("checked");
    // Check if the task is now marked as completed
    if (this.classList.contains("checked")) {
        // If completed, update the background image to checked.png
        this.style.backgroundImage = "url(checked.png)";
    } else {
        // If not completed, reset the background image
        this.style.backgroundImage = "url(unchecked.png)";
    }
}
