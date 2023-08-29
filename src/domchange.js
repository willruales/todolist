import { tableElement } from "./templates.js/tasktable";
import projects from './projects.js';
import { templateElement } from "./templates.js/tableRow";

const form = document.getElementById('form');
const modal = document.querySelector(".modal");
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")

export default function domchange(event, callback) {
    event.preventDefault();

    let projectName = projects.projectName;
    const projectItem = document.createElement("div");
    let htmlString = `<li class="project">${projectName}<button class="delete-button">x</button></li> `;

    projectItem.innerHTML = htmlString;
    projectList.appendChild(projectItem)
    modal.style.display = "none"

    projectList.addEventListener("click", function () {
        //taskbox.innerHTML = tableElement;
        taskbox.appendChild(tableElement);

    })
    form.reset()

    return projectItem
}
