export default function newRow() {
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

//export { newRow }