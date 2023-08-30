import "./style.css";
import asign from "./asign";
import domchange from "./domchange";
import taskdomchange from "./taskdomchage";
import { tableElement } from "./templates.js/tasktable";


const projectForm = document.getElementById('projectForm');
const newTask = document.querySelector(".createNew");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")
const projectpopup = document.getElementById("project-popup")

const list = [];


const projects = {};


//form.addEventListener('submit', submit);
newTask.addEventListener("click", popUp);



function popUp() {
    //modal.style.display = "flex";
    projectpopup.style.display = "flex"
    console.log("run")
}



class project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.description} years old.`);
    }
}



projectForm.addEventListener("submit", function (event) {
    event.preventDefault()
    // Get input values (replace with actual input elements)
    const nameInput = document.getElementById("ProjectName").value;
    const descriptionInput = document.getElementById("ProjectDescription").value;

    // Create a new Person instance
    const newProject = new project(nameInput, descriptionInput);

    // Store the newPerson instance in the people object using the name as the key
    projects[nameInput] = newProject;

    // Call the introduce method on the new instance
    newProject.introduce();
    projectForm.reset()


    domchange(nameInput)
    console.log(projects)
});

projectList.addEventListener("click", function (e) {
    //taskbox.innerHTML = tableElement;
    taskbox.appendChild(tableElement);
    let test = e.target.dataset.userId
    console.log(test)

    let projectSelect = e.target.dataset.userid;

    console.log(show)

})



console.log(taskbox)
export { list, projectList }