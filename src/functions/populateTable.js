export default function populateTable(tasks) {
    const tbodyElement = document.querySelector(".tbody")

    tbodyElement.innerHTML = "";

    // Loop through the array of tasks and create table rows for each task
    tasks.forEach((task) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = task.TaskName;

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = task.TaskDescription;

        const checkboxCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);


        checkbox.checked = task.completed; // Set the checkbox state based on "completed"

        // Add an event listener to the checkbox to update the "completed" property
        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked; // Update the task's "completed" property
        });




        row.appendChild(nameCell)
        row.appendChild(descriptionCell);
        row.appendChild(checkboxCell);

        tbodyElement.appendChild(row);
    });
}