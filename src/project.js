const form = document.querySelector('.form');
const projectpopup = document.getElementById("project-popup")
const projectList = document.querySelector(".projectList")


export default class project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    appendProject() {
        // console.log(`Hi, my name is ${this.name} and I am ${this.description} years old.`);
        const projectItem = document.createElement("div");
        let htmlString = `<li class="project" data-userid =${this.name}>${this.name}<button class="delete-button">x</button></li> `;

        projectItem.innerHTML = htmlString;
        projectList.appendChild(projectItem)
        projectpopup.style.display = "none"
        form.reset()

        return projectItem
    }
}