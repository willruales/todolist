
export default class project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this._tasks = [];
        this.getModifiedName();
        this.modifiedName = this.getModifiedName()

    }
    get name() {
        return this._name;
    }

    set name(value) {
        return this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        return this._description = value;
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
    getModifiedName() {
        return this.modifiedName = this.name.replace(/ /g, "");
    }


    appendProject = () => {
        const projectList = document.querySelector(".projectList")
        const form = document.querySelector('.form');
        const modifiedName = this.name.replace(/ /g, "");


        const projectItem = document.createElement("li");

        projectItem.classList.add("project");
        projectItem.dataset.userid = this.name;

        const htmlString = `
            <div data-userid="${this.modifiedName}">${this.name}</div>
            <div class="modify" data-userid="${this.modifiedName}">
                <div class="edit" data-userid="${this.modifiedName}">⚙</div>
                <button data-userid="${this.modifiedName}"class="delete">🗑</button>
            </div>
        `;

        projectItem.innerHTML = htmlString;
        projectList.appendChild(projectItem)


        form.reset();

        return projectItem;
    }

    appendTable() {

        const tbodyElement = document.querySelector(".tbody")

        tbodyElement.innerHTML = "";

        this._tasks.forEach((task, index) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            nameCell.textContent = task.TaskName;
            nameCell.dataset.userid = index
            const descriptionCell = document.createElement("td");
            descriptionCell.textContent = task.TaskDescription;
            descriptionCell.dataset.userid = index
            const checkboxCell = document.createElement("td");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkboxCell.appendChild(checkbox);
            checkboxCell.dataset.userid = index

            checkbox.checked = task.completed;
            checkbox.addEventListener("change", function () {
                task.completed = checkbox.checked;
            });




            row.appendChild(nameCell)
            row.appendChild(descriptionCell);
            row.appendChild(checkboxCell);

            tbodyElement.appendChild(row);
        });
    }

    createTable = () => {
        console.log("testworks!");
        const taskSubmit = document.querySelector(".taskSubmit")

        taskSubmit.dataset.userid = this.modifiedName;

        const taskpopup = document.getElementById("task-popup")
        const taskForm = document.getElementById('taskForm');
        const table = document.querySelector(".table")

        const addRowButton = document.querySelector(".add-row-button")
        addRowButton.dataset.userid = this.name;

        table.style.display = "table";


        addRowButton.addEventListener("click", addRow);
        function addRow() {

            taskpopup.style.display = "flex"
        }


    }

}