import "./style.css";
import asign from "./asign";
import domchange from "./domchange";
import taskdomchange from "./taskdomchage";
import projects from './projects.js';



const form = document.getElementById('form');
const newTask = document.querySelector(".createNew");
const modal = document.querySelector(".modal");
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")
const list = [];
const todo = document.querySelector(".todolist")

form.addEventListener('submit', submit);
newTask.addEventListener("click", popUp);


//taskbox.addEventListener("click", test)



function popUp() {
    modal.style.display = "flex";
    console.log("run")
}


function submit(event) {
    event.preventDefault();

    const myFormData = new FormData(event.target);


    asign(myFormData);
    let change = domchange(event, projects);
    //taskdomchange(event, projects)



    console.log(projects)
    console.log(change)

}

function viewTasks() {


}


let addtoList = function addtoList() {
    let task = [];
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            task.push(element.value);

        }

    }
    list.push(task)
    console.log("list:", list);
}


function domManipulation() {
    for (let i of list) {
        updatebox(i)

    }
}

function updatebox(x) {
    console.log(x)
    for (let q of x) {
        taskbox.textContent = q;
    }

}
console.log(list, "MO")


export { list, projectList }