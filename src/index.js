import "./style.css";
import project from "./project";

import populateTable from "./functions/populateTable";
import popUp from "./functions/popUp";
import projectSelect from "./functions/projectSelect";
import list from "./storage/list";

const projectForm = document.getElementById('projectForm');
const newTask = document.querySelector(".createNew");;
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")
const projectpopup = document.getElementById("project-popup");
const taskSubmit = document.querySelector(".task-submit")
const form = document.querySelector('.form');
const taskpopup = document.getElementById("task-popup")
const projectHeader = document.querySelector(".projectHeader")
const projectDescription = document.querySelector(".projectDescription")

newTask.addEventListener("click", popUp);


projectForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const nameInput = document.getElementById("ProjectName").value;
    const descriptionInput = document.getElementById("ProjectDescription").value;

    const newProject = new project(nameInput, descriptionInput);

    list.push(newProject)
    //projects[nameInput] = newProject;

    newProject.appendProject();
    projectForm.reset()
});

projectList.addEventListener("click", function (event) {
    event.preventDefault()
    let eventSelect = projectSelect(event)//rearange select att on html

    eventSelect.createTable()
    populateTable(eventSelect.tasks)

    projectHeader.innerHTML = eventSelect.name;
    projectDescription.innerHTML = eventSelect.description
    taskpopup.style.display = "none";




})

taskSubmit.addEventListener("click", function (event, selectedInstance) {
    event.preventDefault()
    const form = taskSubmit.parentElement;
    let eventSelect = projectSelect(event)

    const formData = {
        completed: false
    };

    for (const field of form.elements) {

        if (field.name && field.type !== 'submit') {
            formData[field.name] = field.value;
        }
    }

    taskpopup.style.display = "none";

    eventSelect.addTasks(formData)
    populateTable(eventSelect.tasks)


    return formData

});

export { projectList }