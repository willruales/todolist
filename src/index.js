import "./style.css";
import project from "./project";
import { format, compareAsc } from 'date-fns'

import populateTable from "./functions/populateTable";
import popUp from "./functions/popUp";
import projectSelect from "./functions/projectSelect";
import list from "./storage/list";
import populateLogTable from "./functions/populateLogTable";
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
const logSubmit = document.querySelector("#logSubmit");
const logTable = document.querySelector('.logTable');
const logTableBody = document.getElementById('logtablebody');


newTask.addEventListener("click", popUp);

let eventSelect = null;
let newTaskSelect = null;

projectForm.addEventListener("submit", function (event) {
    event.preventDefault()



    const nameInput = document.getElementById("ProjectName").value;
    const modifiedName = nameInput.replace(/ /g, "");
    const descriptionInput = document.getElementById("ProjectDescription").value;

    const newProject = new project(modifiedName, descriptionInput);

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
    newTaskSelect.logs = [];
    for (const field of form.elements) {

        if (field.name && field.type !== 'submit') {
            newTaskSelect[field.name] = field.value;
        }
    }

    taskpopup.style.display = "none";

    eventSelect.addTasks(newTaskSelect)
    populateTable(eventSelect.tasks)


    return newTaskSelect

});

const tbody = document.querySelector(".tbody");

tbody.addEventListener("click", function (event) {
    const clickedElement = event.target.dataset.userid;


    newTaskSelect = eventSelect.tasks[clickedElement]
    console.log(newTaskSelect)
    console.log(clickedElement)

    logTableBody.innerHTML = '';
    let currentTask = newTaskSelect.logs

    // for (const logEntry of currentTask) {
    //     const newRow = logTableBody.insertRow();

    //     // Create and insert cells for each data item
    //     const logCell = newRow.insertCell(0);
    //     const dateCell = newRow.insertCell(1);


    //     // Populate the cells with data from the current log entry
    //     logCell.textContent = logEntry.LogName; // Access the field value
    //     dateCell.textContent = logEntry.timestamp;
    // }

    populateLogTable(currentTask)

    logTable.style.display = "table";
    return newTaskSelect

});

logRowButton.addEventListener("click", function (event) {
    event.preventDefault()
    logPop.style.display = "flex"

})

logPop.addEventListener("submit", function (event) {
    event.preventDefault();
    logPop.style.display = "none";
    logTableBody.innerHTML = '';
    const form = document.getElementById("logForm");


    let newLog = {};

    for (const field of form.elements) {
        if (field.name && field.type !== 'submit') {

            newLog[field.name] = field.value;
            newLog["timestamp"] = new Date().toISOString();

        }
    }
    newTaskSelect.logs.push(newLog);
    console.log(newTaskSelect);


    let currentTask = newTaskSelect.logs

    // for (const logEntry of currentTask) {
    //     const newRow = logTableBody.insertRow();

    //     // Create and insert cells for each data item
    //     const logCell = newRow.insertCell(0);
    //     const dateCell = newRow.insertCell(1);


    //     // Populate the cells with data from the current log entry
    //     logCell.textContent = logEntry.LogName; // Access the field value
    //     dateCell.textContent = logEntry.timestamp;
    // }

    populateLogTable(currentTask)

});



export { projectList, eventSelect }