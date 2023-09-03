const form = document.querySelector('.form');
const projectpopup = document.getElementById("project-popup")
const projectList = document.querySelector(".projectList")
import createTable from "./createTable";


export default class project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this._tasks = [];
    }

    appendProject() {
        // console.log(`Hi, my name is ${this.name} and I am ${this.description} years old.`);
        const projectItem = document.createElement("div");
        let htmlString = `<li class="project" data-userid =${this.name}>${this.name}<button class="delete-button">x</button></li> `;

        projectItem.innerHTML = htmlString;
        projectList.appendChild(projectItem)
        projectpopup.style.display = "none"
        form.reset()

        return projectItem
    }

    createTable() {
        console.log("testworks!");



        const taskpopup = document.getElementById("task-popup")
        const taskForm = document.getElementById('taskForm');
        const table = document.querySelector(".table")

        const tableElement = document.createElement("table");
        const addRowButton = document.querySelector(".add-row-button")

        table.style.display = "table";


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


    }

    get tasks() {
        return this._tasks
    }
    set tasks(value) {
        this._tasks = value
    }
    addTasks(obj) {
        this.tasks.push(obj);
    }
}