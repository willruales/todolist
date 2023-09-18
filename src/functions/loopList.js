import project from "../project";
import list from "../storage/list";

export default function createProjectListItem() {
    const projects = list.map(data => new project(data._name, data._description));
    console.log(list);


    projects.forEach((project) => {
        project.appendProject();
        console.log("loop works!")
    });


}
