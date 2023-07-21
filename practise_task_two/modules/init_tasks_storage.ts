import { key_available, key_current, key_done, min_letters } from "./constants.js";

function initTasksStorages(): void {
    let emty_array_string = JSON.stringify([]);

    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    if (!tasks_available) {
        localStorage.setItem(key_available, emty_array_string)
    }

    if (!tasks_done) {
        localStorage.setItem(key_done, emty_array_string)
    }

    if (!tasks_current) {
        localStorage.setItem(key_current, emty_array_string)
    }
}

export default initTasksStorages;