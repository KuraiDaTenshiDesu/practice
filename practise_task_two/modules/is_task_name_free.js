import { key_available, key_current, key_done } from "./constants.js";
function isTaskNameFree(name) {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);
    if (tasks_available && tasks_done && tasks_current) {
        let tasks_available_parsed = JSON.parse(tasks_available);
        let tasks_done_parsed = JSON.parse(tasks_done);
        let tasks_current_parsed = JSON.parse(tasks_current);
        let tasks_available_names = tasks_available_parsed.map((task) => { return task.title; });
        let tasks_done_names = tasks_done_parsed.map((task) => { return task.title; });
        let tasks_current_names = tasks_current_parsed.map((task) => { return task.title; });
        let task_available_index = tasks_available_names.indexOf(name);
        let task_done_index = tasks_done_names.indexOf(name);
        let task_current_index = tasks_current_names.indexOf(name);
        if (task_available_index !== -1)
            return false;
        if (task_done_index !== -1)
            return false;
        if (task_current_index !== -1)
            return false;
        return true;
    }
    return false;
}
export default isTaskNameFree;
