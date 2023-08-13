import { list } from './index.js';
export default function domchange(event, callback) {

    const form = document.getElementById('form');
    const newTask = document.querySelector(".createNew");
    const modal = document.querySelector(".modal");
    const projectList = document.querySelector(".projectList")
    const taskbox = document.querySelector(".tasks")
    const list = [];
    const todo = document.querySelector(".todolist")

    event.preventDefault();
    console.log(event, callback, 2)


    let string = callback.get("projectName");

    let htmlString = `<li>${string}</li>`;



    projectList.insertAdjacentHTML("beforeend", htmlString);
    modal.style.display = "none"
    form.reset()


}  