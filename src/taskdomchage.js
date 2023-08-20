import { list } from './index.js';
import projects from './projects.js';

export default function taskdomchange(event, callback) {

    const form = document.getElementById('form');
    const newTask = document.querySelector(".createNew");
    const modal = document.querySelector(".modal");
    const projectList = document.querySelector(".projectList")
    const taskbox = document.querySelector(".tasks")
    const list = [];
    const todo = document.querySelector(".todolist");

    event.preventDefault();
    console.log(event, callback, 2)


    //let projectName = callback.get("projectName");
    let description = projects.description;


    let htmlString = `<li id="${description}">${description}</li>`;



    taskbox.insertAdjacentHTML("beforeend", htmlString);
    modal.style.display = "none"
    form.reset()


}  