const form = document.querySelector('.form');
const projectpopup = document.getElementById("project-popup")
const projectList = document.querySelector(".projectList")
const taskSubmit = document.querySelector(".task-submit")


export default class project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this._tasks = [];
    }

    appendProject() {
        // console.log(`Hi, my name is ${this.name} and I am ${this.description} years old.`);
        const projectItem = document.createElement("div");
        let htmlString = `<li class="project" ><div data-userid =${this.name}>${this.name}</div>  <div class="modify">  <div class="edit">⚙</div><button class="delete-button">🗑</button>      </div></li> `;

        projectItem.innerHTML = htmlString;
        projectList.appendChild(projectItem)
        projectpopup.style.display = "none"
        form.reset()

        return projectItem
    }

    createTable = () => {
        console.log("testworks!");

        taskSubmit.dataset.userid = this.name;
        //projectSelect.dataset.userid = this.name;

        const taskpopup = document.getElementById("task-popup")
        const taskForm = document.getElementById('taskForm');
        const table = document.querySelector(".table")

        const addRowButton = document.querySelector(".add-row-button")

        table.style.display = "table";


        addRowButton.addEventListener("click", addRow); // Replace with the actual function
        function addRow() {

            taskpopup.style.display = "flex"
            // Create the new row using DOM manipulation



        }


    }

    get tasks() {
        return this._tasks
    }
    set tasks(value) {
        this._tasks = value
    }
    addTasks(obj) {
        this.tasks.push(obj);
    }

    // addLogToTask(taskEventSelect){

    //         const selectedInstance = eventSelect.tasks.find(item => item.id === taskSelect);
    //         console.log(selectedInstance)
    //         return selectedInstance

    // }
}