const taskbox = document.querySelector(".tasks")

export default function createTable() {
    const taskpopup = document.getElementById("task-popup")
    const taskForm = document.getElementById('taskForm');
    const table = document.querySelector(".table")

    const tableElement = document.createElement("table");
    const addRowButton = document.querySelector(".add-row-button")

    const theadElement = document.createElement("thead");
    const headerRow = document.createElement("tr");

    table.style.display = "table";


    const buttonCell = document.createElement("th");
    buttonCell.setAttribute("colspan", "3");
    // //const addRowButton = document.createElement("button");
    // addRowButton.className = "add-row-button";
    // addRowButton.textContent = "Add Task";
    addRowButton.addEventListener("click", addRow); // Replace with the actual function


    function addRow() {

        taskpopup.style.display = "flex"
        // Create the new row using DOM manipulation



    }



    taskForm.addEventListener("submit", function (event) {
        event.preventDefault()
        // Get input values (replace with actual input elements)
        const nameInput = document.getElementById("TaskName").value;
        const descriptionInput = document.getElementById("TaskDescription").value;


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


        taskpopup.style.display = "none";

    });



    taskbox.appendChild(tableElement)
}