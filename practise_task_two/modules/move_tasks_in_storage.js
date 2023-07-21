import { key_available, key_current, key_done } from "./constants.js";
function moveTasksInStorage(task) {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);
    let tasks_available_parsed;
    let tasks_done_parsed;
    let tasks_current_parsed;
    let task_available_index;
    let task_done_index;
    let task_current_index;
    if (tasks_available && tasks_current && tasks_done) {
        tasks_available_parsed = JSON.parse(tasks_available);
        tasks_current_parsed = JSON.parse(tasks_current);
        tasks_done_parsed = JSON.parse(tasks_done);
        let tasks_available_names = tasks_available_parsed.map((task) => { return task.title; });
        let tasks_current_names = tasks_current_parsed.map((task) => { return task.title; });
        let tasks_done_names = tasks_done_parsed.map((task) => { return task.title; });
        task_available_index = tasks_available_names.indexOf(task.title);
        task_current_index = tasks_current_names.indexOf(task.title);
        task_done_index = tasks_done_names.indexOf(task.title);
        console.log(task_available_index);
        console.log(task_current_index);
        console.log(task_done_index);
        if (task.type === 'available' && tasks_available && task_available_index === -1) {
            tasks_available_parsed.push(task);
            localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            if (task_current_index !== -1) {
                tasks_current_parsed.splice(task_current_index, 1);
                localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));
            }
            if (task_done_index !== -1) {
                tasks_done_parsed.splice(task_done_index, 1);
                localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            }
            return;
        }
        if (task.type === 'current' && tasks_current && task_current_index === -1) {
            tasks_current_parsed.push(task);
            localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));
            if (task_available_index !== -1) {
                tasks_available_parsed.splice(task_available_index, 1);
                localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            }
            if (task_done_index !== -1) {
                tasks_done_parsed.splice(task_done_index, 1);
                localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            }
            return;
        }
        if (task.type === 'done' && tasks_done && task_done_index === -1) {
            tasks_done_parsed.push(task);
            localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            if (task_current_index !== -1) {
                tasks_current_parsed.splice(task_current_index, 1);
                localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));
            }
            if (task_available_index !== -1) {
                tasks_available_parsed.splice(task_available_index, 1);
                localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            }
            return;
        }
    }
}
export default moveTasksInStorage;
