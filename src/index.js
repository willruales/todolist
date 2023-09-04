import "./style.css";
import domchange from "./domchange";
import project from "./project";
import createTable from "./createTable";

const projectForm = document.getElementById('projectForm');
const newTask = document.querySelector(".createNew");;
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")
const projectpopup = document.getElementById("project-popup");
const taskSubmit = document.querySelector(".task-submit")
const form = document.querySelector('.form');
const taskpopup = document.getElementById("task-popup")

const list = [];


const projects = {};

newTask.addEventListener("click", popUp);



function popUp() {
    projectpopup.style.display = "flex"
}

projectForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const nameInput = document.getElementById("ProjectName").value;
    const descriptionInput = document.getElementById("ProjectDescription").value;

    const newProject = new project(nameInput, descriptionInput);

    list.push(newProject)
    //projects[nameInput] = newProject;

    newProject.appendProject();
    projectForm.reset()

    console.log(list)
});

projectList.addEventListener("click", function (event) {
    let projectSelect = event.target.dataset.userid
    const selectedInstance = list.find(item => item.name === projectSelect);


    console.log(projectSelect)
    // createTable(selectedInstance)
    console.log(selectedInstance)

    selectedInstance.createTable()
    selectedInstance.tasks

    taskpopup.style.display = "none";

    event.preventDefault()
    console.log(selectedInstance.tasks)
})


taskSubmit.addEventListener("click", function (event, selectedInstance) {
    event.preventDefault()

    let projectSelect = event.target.dataset.userid;
    const selectedInstance1 = list.find(item => item.name === projectSelect);

    console.log(projectSelect)

    // Get a reference to the form element
    const form = taskSubmit.parentElement;

    // Create an empty object to store the form data
    const formData = {};
    //selectedInstance.test(form)
    //     // Loop through each form field
    for (const field of form.elements) {
        //         // Check if the field has a name and is not a button (e.g., submit button)
        if (field.name && field.type !== 'submit') {
            // Add the field's value to the formData object
            formData[field.name] = field.value;
        }
    }

    // Log the collected form data (you can replace this with your desired action)

    taskpopup.style.display = "none";
    selectedInstance1.addTasks(formData)

    console.log(formData);
    return formData








    //     //     const newRow = document.createElement("tr");
    //     //     // Create the task name cell
    //     //     const taskNameCell = document.createElement("td");
    //     //     taskNameCell.textContent = "New Task";
    //     //     newRow.appendChild(taskNameCell);

    //     //     // Create the task description cell
    //     //     const taskDescriptionCell = document.createElement("td");
    //     //     taskDescriptionCell.textContent = "Enter task description";
    //     //     newRow.appendChild(taskDescriptionCell);

    //     //     // Create the checkbox cell
    //     //     const checkboxCell = document.createElement("td");
    //     //     const checkbox = document.createElement("input");
    //     //     checkbox.type = "checkbox";
    //     //     checkboxCell.appendChild(checkbox);
    //     //     newRow.appendChild(checkboxCell);

    //     //     // Append the new row to the table body


    //     //     tbodyElement.appendChild(newRow);




});





console.log(taskbox)
export { list, projectList }