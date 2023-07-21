import { key_available, key_current, key_done } from "./constants.js";
import showTask from "./show_task.js";
function getTasksFromStorage() {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);
    if (tasks_available && tasks_done && tasks_current) {
        let tasks_available_parsed = JSON.parse(tasks_available);
        let tasks_done_parsed = JSON.parse(tasks_done);
        let tasks_current_parsed = JSON.parse(tasks_current);
        tasks_available_parsed.forEach((task) => {
            showTask(task);
        });
        tasks_done_parsed.forEach((task) => {
            showTask(task);
        });
        tasks_current_parsed.forEach((task) => {
            showTask(task);
        });
    }
}
export default getTasksFromStorage;
