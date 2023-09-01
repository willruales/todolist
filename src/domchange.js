const form = document.querySelector('.form');
const projectpopup = document.getElementById("project-popup")
const projectList = document.querySelector(".projectList")


export default function domchange(x) {

    const projectItem = document.createElement("div");
    let htmlString = `<li class="project" data-userid =${x}>${x}<button class="delete-button">x</button></li> `;

    projectItem.innerHTML = htmlString;
    projectList.appendChild(projectItem)
    projectpopup.style.display = "none"
    form.reset()

    return projectItem
}