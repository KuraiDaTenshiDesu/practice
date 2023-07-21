import { ITask } from "./task_interface";
import { key_available, key_current, key_done, min_letters } from "./constants.js";

function deleteTaskFromStorage(task: ITask): void {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    if (tasks_available && tasks_current && tasks_done) {
        if (task.type === 'available') {
            let tasks_available_parsed: Array<ITask> = JSON.parse(tasks_available);
            let tasks_available_names = tasks_available_parsed.map((task) => {return task.title});

            let index = tasks_available_names.indexOf(task.title);
            
            if (index !== -1) {
                tasks_available_parsed.splice(index, 1);
                localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            }
        }

        if (task.type === 'current') {
            let tasks_current_parsed: Array<ITask> = JSON.parse(tasks_current);
            let tasks_current_names = tasks_current_parsed.map((task) => {return task.title});

            let index = tasks_current_names.indexOf(task.title);

            if (index !== -1) {
                tasks_current_parsed.splice(index, 1);
                localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));
            }
        }

        if (task.type === 'done') {
            let tasks_done_parsed: Array<ITask> = JSON.parse(tasks_done);
            let tasks_done_names = tasks_done_parsed.map((task) => {return task.title});

            let index = tasks_done_names.indexOf(task.title);

            if (index !== -1) {
                tasks_done_parsed.splice(index, 1);
                localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            }
        }
    }
}


export default deleteTaskFromStorage;