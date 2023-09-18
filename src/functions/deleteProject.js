import list from "../storage/list"
export default function deleteProject(value) {

    // Find the index of the project with matching data-userid
    const projectIndex = list.findIndex(item => item.modifiedName === value);

    if (projectIndex !== -1) {
        // Remove the project from the array
        list.splice(projectIndex, 1);
        // Update your UI or perform any other necessary actions
        console.log(`Deleted project with name: ${value}`);
    } else {
        console.log(`Project with name: ${value} not found.`);
    }
}