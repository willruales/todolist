import { list } from './index.js';
import projects from './projects.js';


const form = document.getElementById('form');
const newTask = document.querySelector(".createNew");
const modal = document.querySelector(".modal");
const projectList = document.querySelector(".projectList")
const taskbox = document.querySelector(".tasks")

export default function domchange(event, callback) {
    event.preventDefault();



    let projectName = projects.projectName;

    const newElement = document.createElement("li");
    newElement.className = "project";
    newElement.textContent = projects.projectName;







    let htmlString = `<button class="delete-button">x</button></li> </div>`;
    const temporaryContainer = document.createElement("div");
    temporaryContainer.innerHTML = htmlString;
    const buttonElement = temporaryContainer.firstChild;




    // const selectedElement = createdElement.querySelector(className);


    // // Append the htmlString content to the target div using insertAdjacentHTML
    // 





    newElement.appendChild(buttonElement)
    // projectList.insertAdjacentHTML('beforeend', newElement.textContent);

    projectList.appendChild(newElement)


    modal.style.display = "none"
    form.reset()


    console.log(newElement.className, newElement.textContent, buttonElement)


}
