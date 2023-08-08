console.log("this works")
import "./style.css";

const form = document.getElementById('form');
const newTask = document.querySelector(".createNew");
const modal = document.querySelector(".modal");
const taskbox = document.querySelector(".tasks")
const list = [];

form.addEventListener('submit', submit);


newTask.addEventListener("click", popUp);
function popUp() {
    modal.style.display = "flex";
    console.log("run")
}

function submit(event) {
    event.preventDefault();
addtoList()
domManipulation()

    modal.style.display = "none"
    form.reset()


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

function updatebox(x){
console.log(x)
for(let q of x){
taskbox.textContent= q;
}

}
console.log(list, "MO")
