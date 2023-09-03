const taskbox = document.querySelector(".tasks")
import project from "./project";

export default function createTable(selectedInstance) {
    const taskpopup = document.getElementById("task-popup")
    const taskForm = document.getElementById('taskForm');
    const table = document.querySelector(".table")

    const tableElement = document.createElement("table");
    const addRowButton = document.querySelector(".add-row-button")

    table.style.display = "table";


    // const buttonCell = document.createElement("th");
    // buttonCell.setAttribute("colspan", "3");
    // //const addRowButton = document.createElement("button");
    // addRowButton.className = "add-row-button";
    // addRowButton.textContent = "Add Task";
    addRowButton.addEventListener("click", addRow); // Replace with the actual function


    function addRow() {

        taskpopup.style.display = "flex"
        // Create the new row using DOM manipulation



    }



    taskForm.addEventListener("submit", function (event, selectedInstance) {

        event.preventDefault()

        // Get a reference to the form element
        const form = event.target;

        // Create an empty object to store the form data
        const formData = {};
        selectedInstance.test(form)
        //     // Loop through each form field
        //     for (const field of form.elements) {
        //         // Check if the field has a name and is not a button (e.g., submit button)
        //         if (field.name && field.type !== 'submit') {
        //             // Add the field's value to the formData object
        //             formData[field.name] = field.value;
        //         }
        //     }

        //     // Log the collected form data (you can replace this with your desired action)
        //     console.log(formData);
        //     taskpopup.style.display = "none";
        //     return formData








        //     const newRow = document.createElement("tr");
        //     // Create the task name cell
        //     const taskNameCell = document.createElement("td");
        //     taskNameCell.textContent = "New Task";
        //     newRow.appendChild(taskNameCell);

        //     // Create the task description cell
        //     const taskDescriptionCell = document.createElement("td");
        //     taskDescriptionCell.textContent = "Enter task description";
        //     newRow.appendChild(taskDescriptionCell);

        //     // Create the checkbox cell
        //     const checkboxCell = document.createElement("td");
        //     const checkbox = document.createElement("input");
        //     checkbox.type = "checkbox";
        //     checkboxCell.appendChild(checkbox);
        //     newRow.appendChild(checkboxCell);

        //     // Append the new row to the table body


        //     tbodyElement.appendChild(newRow);




    });



    taskbox.appendChild(tableElement)
}