function addTask() {
    let input = document.getElementById("task-input");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    let li = document.createElement("li");
    li.innerText = taskText;

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "delete-btn";

    // Delete funtionality
    delBtn.addEventListener("click", function() {
        li.remove();
    })

    // Add button to list item
    li.appendChild(delBtn)

    // Add list item to UL
    document.getElementById("task-list").appendChild(li);

    // Clear input
    input.value = "";
}
