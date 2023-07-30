console.log("this works")
import "./style.css";

const form = document.getElementById('form');
const createNew = document.querySelector(".createNew");
const modal = document.querySelector(".modal")

form.addEventListener('submit', callbackFunction);
let list = []
createNew.addEventListener("click", popUp)
function popUp() {
    modal.style.display = "flex";

}

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData);

    list.push(myFormData)
    console.log(list)
    modal.style.display = "none"
}
const NewTask = function (name, weight) {
    this.name = name
    this.weight = weight
}

let doit = new NewTask(1, 2)
console.log(doit)
