import { key_available, key_current, key_done, min_letters } from "./constants.js";
import { ITask } from "./task_interface";

function isTaskNameFree(name: string): boolean {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    if (tasks_available && tasks_done && tasks_current) {
        let tasks_available_parsed: Array<ITask> = JSON.parse(tasks_available);
        let tasks_done_parsed: Array<ITask> = JSON.parse(tasks_done);
        let tasks_current_parsed: Array<ITask> = JSON.parse(tasks_current);

        let tasks_available_names: Array<string> = tasks_available_parsed.map((task) => {return task.title});
        let tasks_done_names: Array<string> = tasks_done_parsed.map((task) => {return task.title});
        let tasks_current_names: Array<string> = tasks_current_parsed.map((task) => {return task.title});

        let task_available_index = tasks_available_names.indexOf(name);
        let task_done_index = tasks_done_names.indexOf(name);
        let task_current_index = tasks_current_names.indexOf(name);

        if (task_available_index !== -1) return false;

        if (task_done_index !== -1) return false;

        if (task_current_index !== -1) return false;

        return true;
    }

    return false;
}

export default isTaskNameFree