import { newRow } from "./tableRow";

const taskpopup = document.getElementById("task-popup")
const taskForm = document.getElementById('taskForm');
// Create the table element
const tableElement = document.createElement("table");

// Create the table header
const theadElement = document.createElement("thead");
const headerRow = document.createElement("tr");

// Create the "Add Row" button cell
const buttonCell = document.createElement("th");
buttonCell.setAttribute("colspan", "3");
const addRowButton = document.createElement("button");
addRowButton.className = "add-row-button";
addRowButton.textContent = "Add Task";
addRowButton.addEventListener("click", myfunction); // Replace with the actual function



// Append the "Add Row" button to the button cell
buttonCell.appendChild(addRowButton);



// Create the header cells for Task Name, Task Description, and Completed
const headerCellTexts = ["Task Name", "Task Description", "Completed"];

headerCellTexts.forEach(cellText => {
    const headerCell = document.createElement("th");
    headerCell.textContent = cellText;
    headerRow.appendChild(headerCell);
});

// Append the header row to the table header
theadElement.appendChild(headerRow);

// Create the table body
const tbodyElement = document.createElement("tbody");

// Append the table header and table body to the table
tableElement.appendChild(theadElement);
tableElement.appendChild(tbodyElement);

// Append the button cell to the header row
tbodyElement.appendChild(buttonCell);



function myfunction() {

    taskpopup.style.display = "flex"
    // Create the new row using DOM manipulation
    const newRow = document.createElement("tr");

    // Create the task name cell
    const taskNameCell = document.createElement("td");
    taskNameCell.textContent = "New Task";
    newRow.appendChild(taskNameCell);

    // Create the task description cell
    const taskDescriptionCell = document.createElement("td");
    taskDescriptionCell.textContent = "Enter task description";
    newRow.appendChild(taskDescriptionCell);

    // Create the checkbox cell
    const checkboxCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);
    newRow.appendChild(checkboxCell);

    // Append the new row to the table body


    tbodyElement.appendChild(newRow);
}



taskForm.addEventListener("submit", function (event) {
    event.preventDefault()
    // Get input values (replace with actual input elements)
    const nameInput = document.getElementById("TaskName").value;
    const descriptionInput = document.getElementById("TaskDescription").value;

    // Create a new Person instance

    // Store the newPerson instance in the people object using the name as the key


    // Call the introduce method on the new instance
    newProject.introduce();
    form.reset()


    console.log(people)
});


export { tableElement }