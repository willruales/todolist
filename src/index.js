console.log("this works")
import "./style.css";

const form = document.getElementById('form');

form.addEventListener('submit', callbackFunction);
let list = []

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData);

    list.push(myFormData)
    console.log(list)
}
const NewTask = function (name, weight) {
    this.name = name
    this.weight = weight
}

let doit = new NewTask(1, 2)
console.log(doit)
