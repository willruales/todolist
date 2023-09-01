export default class project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.description} years old.`);
    }
}