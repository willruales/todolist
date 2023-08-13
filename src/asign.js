import { list } from './index.js';
import projects from './projects.js';
export default function asign(callback) {
    console.log("pingping");

    console.log(list)

    // let builss = {
    //     tasks: 0,
    // }



    for (const [key, value] of callback.entries()) {
        projects[key] = value;
    }
    console.log(projects)
    list.push(projects)

}
