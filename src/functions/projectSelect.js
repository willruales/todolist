//import { list } from "../storage/lists";
import list from "../storage/list";
export default function projectSelect(event) {

    let projectSelect = event.target.dataset.userid
    console.log(projectSelect)
    const selectedInstance = list.find(item => item.modifiedName === projectSelect);
    return selectedInstance

}