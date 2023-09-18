export default function populateTable(tasks) {
    const tbodyElement = document.querySelector(".tbody")

    tbodyElement.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = task.TaskName;
        nameCell.dataset.userid = index
        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = task.TaskDescription;
        descriptionCell.dataset.userid = index
        const checkboxCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);
        checkboxCell.dataset.userid = index

        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
        });




        row.appendChild(nameCell)
        row.appendChild(descriptionCell);
        row.appendChild(checkboxCell);

        tbodyElement.appendChild(row);
    });
}