import list from "../storage/list"
export default function deleteProject(value) {

    const projectIndex = list.findIndex(item => item.modifiedName === value);

    if (projectIndex !== -1) {
        list.splice(projectIndex, 1);
        console.log(`Deleted project with name: ${value}`);
    } else {
        console.log(`Project with name: ${value} not found.`);
    }
}