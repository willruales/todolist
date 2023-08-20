import "./style.css";
import asign from "./asign";
import domchange from "./domchange";
import taskdomchange from "./taskdomchage";
import projects from './projects.js';
import { table } from "./templates.js/tasktable";
import { first } from "lodash";
import { newRow } from "./templates.js/tableRow";



const form = document.getElementById('form');
const newTask = document.querySelector(".createNew");
const modal = document.querySelector(".modal");
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")

const list = [];
const todo = document.querySelector(".todolist")
const classs = document.querySelector(".project")

form.addEventListener('submit', submit);
newTask.addEventListener("click", popUp);

function addEventListenerToDynamicElement(element) {
    element.addEventListener("click", function () {
        console.log("Dynamic element clicked!", table);


        // Use insertAdjacentHTML to add the new row HTML to the table body
        taskbox.innerHTML = table;


    });
}






function myfunction() {
    const addRowButton = document.getElementById("addRowButton");
    const taskTableBody = document.getElementById("taskTableBody");

    addRowButton.addEventListener("click", function () {
        const row = document.createElement("tr");
        row.innerHTML = newRow;

        //         `
        //     <tr>
        //       <td>New Task</td>
        //       <td>Enter task description</td>
        //       <td><input type="checkbox"></td>
        //     </tr>
        //   `;
        taskTableBody.insertAdjacentHTML("beforeend", newRow);
    });
}



function popUp() {
    modal.style.display = "flex";
    console.log("run")
}


function submit(event) {
    event.preventDefault();

    const myFormData = new FormData(event.target);


    asign(myFormData);
    domchange(event, projects);

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



console.log(taskbox)
export { list, projectList }