const form = document.getElementById('form');
const newTask = document.querySelector(".createNew");
const modal = document.querySelector(".modal");
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")
const classname = "project"


export function createProjectElement() {

    const divElement = document.createElement("div");
    divElement.className = "className";

    const liElement = document.createElement("li");
    liElement.id = "projectName";
    liElement.textContent = "projectName";

    const buttonElement = document.createElement("button");
    buttonElement.className = "delete-button";
    buttonElement.textContent = "x";

    liElement.appendChild(buttonElement);
    divElement.appendChild(liElement);




    projectList.insertAdjacentHTML("beforeend", divElement);
    modal.style.display = "none"
    form.reset()



    return divElement;
}