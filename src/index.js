console.log("this works")

const NewTask = function (name, weight) {
    this.name = name
    this.weight = weight
}

let doit = new NewTask(1, 2)
console.log(doit)
