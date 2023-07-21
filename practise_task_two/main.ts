import initTasksStorages from "./modules/init_tasks_storage.js";
import getTask from "./modules/get_task.js";
import { key_available, key_current, key_done, min_letters } from "./modules/constants.js";
import showTask from "./modules/show_task.js";
import showError from "./modules/show_error.js";
import getTasksFromStorage from "./modules/get_tasks_from_storage.js";


initTasksStorages();

let add_task_input = <HTMLInputElement> document.getElementById('add-task');
let add_task_button = document.querySelector('.app_add-task-button');

if (add_task_input && add_task_button) {
    add_task_input.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            let value = add_task_input.value;

            if (value.length >= min_letters) {
                add_task_input.value = '';
                let task = getTask(value, "available");
                showTask(task);
            } else {
                showError(`At least ${min_letters} characters`);
            }
        }
    });

    add_task_button.addEventListener('click', () => {
        let value = add_task_input.value;

        if (value.length >= 3) {
            let task = getTask(value, "available");
            showTask(task);
        } else {
            showError(`At least ${min_letters} characters`);
        }
    })
}

getTasksFromStorage();