import "./style.css";
import project from "./project";

import populateTable from "./functions/populateTable";
import popUp from "./functions/popUp";
import projectSelect from "./functions/projectSelect";
import list from "./storage/list";
import populateLogTable from "./functions/populateLogTable";
import { taskData } from "./storage/task";
import createProjectListItem from "./functions/loopList";
import deleteProject from "./functions/deleteProject";



const projectForm = document.getElementById('projectForm');
const newTask = document.querySelector(".createNew");;
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector("#taskTable")
const projectpopup = document.getElementById("project-popup");
const projectpopupedit = document.getElementById("projectedit-popup");
const editForm = document.getElementById("projectedit-popup");

const taskSubmit = document.querySelector(".taskSubmit")
const taskpopup = document.getElementById("task-popup")
const projectHeader = document.querySelector(".projectHeader")
const projectDescription = document.querySelector(".projectDescription")
const logRowButton = document.getElementById("addLogButton");
const logPop = document.querySelector("#log-popup")
const logTable = document.querySelector('.logTable');
const logTableBody = document.getElementById('logtablebody');
const taskHeader = document.querySelector(".taskTitle");



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

    //newProject.appendProject(nameInput);
    projectForm.reset();

    projectList.innerHTML = "";
    createProjectListItem();
    projectpopup.style.display = "none";

});

projectList.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit")) {
        eventSelect = projectSelect(event)
        const test = event.target.parentElement.getAttribute('data-userid');
        console.log(test)
        eventSelect = projectSelect(event)


        editForm.style.display = "flex";

        const editButton = document.querySelector(".edit");


        editButton.addEventListener("click", function () {
            const userId = projectItem.querySelector('[data-userid]').getAttribute("data-userid");
            console.log(`Edit button clicked for user with ID: ${userId}`);
            const projectpopupedit = document.getElementById("projectedit-popup");
            projectpopupedit.style.display = flex;

        });


        console.log(eventSelect)
    }
    else if (event.target.classList.contains("delete")) {
        console.log("deleteseen")
        eventSelect = projectSelect(event);
        deleteProject(eventSelect.modifiedName);
        projectList.innerHTML = "";
        console.log(taskbox)
        taskbox.style.display = "none";
        createProjectListItem();

    }

    else {
        event.preventDefault()
        eventSelect = projectSelect(event)
        console.log(eventSelect)
        eventSelect.createTable()
        eventSelect.appendTable()

        projectHeader.innerHTML = eventSelect.name;
        projectDescription.innerHTML = eventSelect.description
        taskpopup.style.display = "none";
        console.log(eventSelect)

        return eventSelect
    }
    logTable.style.display = "none"

})

taskpopup.addEventListener("submit", function (event) {
    event.preventDefault()
    const form = taskSubmit.parentElement;
    newTaskSelect = Object.create(taskData)
    newTaskSelect.logs = [];
    for (const field of form.elements) {

        if (field.name && field.type !== 'submit') {
            newTaskSelect[field.name] = field.value;
        }
    }

    taskpopup.style.display = "none";
    console.log(eventSelect)
    eventSelect.addTasks(newTaskSelect)
    populateTable(eventSelect.tasks)


    return newTaskSelect

});

const tbody = document.querySelector(".tbody");

tbody.addEventListener("click", function (event) {
    const clickedElement = event.target.dataset.userid;
    taskHeader.innerHTML = "";
    newTaskSelect = eventSelect.tasks[clickedElement]
    console.log(newTaskSelect)
    console.log(clickedElement)
    taskHeader.innerHTML = newTaskSelect.TaskName
    logTableBody.innerHTML = '';
    let currentTask = newTaskSelect.logs
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


    populateLogTable(currentTask)

});


editForm.addEventListener("submit", function (event) {
    event.preventDefault();
    projectList.innerHTML = "";

    console.log(eventSelect);
    const nameInput = document.getElementById("editProjectName").value;
    const descriptionInput = document.getElementById("editProjectDescription").value;
    eventSelect.name = nameInput;
    eventSelect.description = descriptionInput;
    eventSelect.getModifiedName()
    const projecteditsubmit = projectpopupedit.querySelector("button")

    editForm.style.display = "none"
    createProjectListItem();
    console.log(eventSelect.modifiedName)

});


const cancelButtons = document.querySelectorAll(".cancel");
console.log(cancelButtons)

cancelButtons.forEach((cancelButton) => {
    cancelButton.addEventListener("click", function () {
        console.log("hy")
        const popupBox = cancelButton.parentElement.parentElement;
        console.log(popupBox)
        if (popupBox) {
            popupBox.style.display = "none";
        }
    });
});
export { projectList, eventSelect }