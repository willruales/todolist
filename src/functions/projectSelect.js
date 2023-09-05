//import { list } from "../storage/lists";
import list from "../storage/list";
export default function projectSelect(event) {

    let projectSelect = event.target.dataset.userid
    const selectedInstance = list.find(item => item.name === projectSelect);
    return selectedInstance

}