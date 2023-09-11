import "./style.css";
import project from "./project";

import populateTable from "./functions/populateTable";
import popUp from "./functions/popUp";
import projectSelect from "./functions/projectSelect";
import list from "./storage/list";
import { taskData } from "./storage/task";
import { taskSelect } from "./functions/taskSelect";
import { log } from "./storage/log";

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
const taskTable = document.querySelector(".taskTable")
const logRowButton = document.getElementById("addLogButton");
const logPop = document.querySelector("#log-popup")
const logSubmit = document.querySelector("#logSubmit")

newTask.addEventListener("click", popUp);

let eventSelect = null;
let newTaskSelect = null;

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
    eventSelect = projectSelect(event)//rearange select att on html

    eventSelect.createTable()
    populateTable(eventSelect.tasks)

    projectHeader.innerHTML = eventSelect.name;
    projectDescription.innerHTML = eventSelect.description
    taskpopup.style.display = "none";
    console.log(eventSelect)

    return eventSelect

})

taskSubmit.addEventListener("click", function (event, selectedInstance) {
    event.preventDefault()
    const form = taskSubmit.parentElement;
    eventSelect = projectSelect(event)

    // const formData = {
    //     completed: false
    // };

    newTaskSelect = Object.create(taskData)
    for (const field of form.elements) {

        if (field.name && field.type !== 'submit') {
            newTaskSelect[field.name] = field.value;
        }
    }

    taskpopup.style.display = "none";

    eventSelect.addTasks(newTaskSelect)
    populateTable(eventSelect.tasks)


    // return taskData

});

const tbody = document.querySelector(".tbody");

tbody.addEventListener("click", function (event) {
    const clickedElement = event.target.dataset.userid;
    console.log(clickedElement)
    console.log(eventSelect)
    taskTable.style.display = "table";

});

logRowButton.addEventListener("click", function (event) {
    event.preventDefault()
    logPop.style.display = "flex"

})

logPop.addEventListener("submit", function (event) {
    event.preventDefault()
    logPop.style.display = "none"
    const logName = document.getElementById("logName").value
    const form = document.getElementById("logForm")
    console.log(eventSelect.tasks)

    let newLog = Object.create(log)
    for (const field of form.elements) {

        if (field.name && field.type !== 'submit') {
            newLog[field.name] = field.value;

        }
    }
    console.log(newLog)

    newTaskSelect.logs.push(newLog)
    console.log(newTaskSelect)
}
)


export { projectList, eventSelect }