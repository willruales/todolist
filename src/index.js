import "./style.css";
import domchange from "./domchange";
import project from "./project";
import createTable from "./createTable";

const projectForm = document.getElementById('projectForm');
const newTask = document.querySelector(".createNew");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")
const projectpopup = document.getElementById("project-popup");

const form = document.querySelector('.form');


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

projectList.addEventListener("click", function (e) {

    createTable()
    let projectSelect = e.target.dataset.userid
    console.log(projectSelect)

    //const selectedProject = list.filter(item => (item.name === test));
    const selectedInstance = list.find(item => item.name === projectSelect);
    selectedInstance.test()


})






console.log(taskbox)
export { list, projectList }