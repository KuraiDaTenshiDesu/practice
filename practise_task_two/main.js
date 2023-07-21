import initTasksStorages from "./modules/init_tasks_storage.js";
import getTask from "./modules/get_task.js";
import { min_letters } from "./modules/constants.js";
import showTask from "./modules/show_task.js";
import getTasksFromStorage from "./modules/get_tasks_from_storage.js";
import sortDoneTasks from "./modules/sort_done_tasks.js";
import showAddTaskPropsPopup from "./modules/show_add_task_props_popup.js";
import hideAddTaskPropsPopup from "./modules/hide_add_task_props_popup.js";
initTasksStorages();
let add_task_input = document.getElementById('add-task');
let add_task_button = document.querySelector('.app_add-task-button');
let time_input = document.querySelector('.add-task-props-popup_input');
if (add_task_input && add_task_button && time_input) {
    add_task_input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            let value;
            showAddTaskPropsPopup();
            time_input.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    let time = parseInt(time_input.value);
                    value = add_task_input.value;
                    if (value.length >= min_letters) {
                        add_task_input.value = '';
                        let task = getTask(value, "available", time);
                        time_input.value = '';
                        showTask(task);
                    }
                    hideAddTaskPropsPopup();
                }
            });
        }
    });
    add_task_button.addEventListener('click', () => {
        let value = add_task_input.value;
        showAddTaskPropsPopup();
        time_input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                let time = parseInt(time_input.value);
                if (value.length >= min_letters) {
                    add_task_input.value = '';
                    let task = getTask(value, "available", time);
                    time_input.value = '';
                    showTask(task);
                }
                hideAddTaskPropsPopup();
            }
        });
    });
}
let sort = document.querySelector('.app_sort_done');
if (sort) {
    sort.addEventListener('click', (event) => {
        let target = event.target;
        if (target.tagName === 'SELECT') {
            switch (target.value) {
                case 'name-fwd':
                    sortDoneTasks("name", "forward");
                    break;
                case 'name-bwd':
                    sortDoneTasks("name", "backward");
                    break;
                case 'date-fwd':
                    sortDoneTasks("added", "forward");
                    break;
                case 'date-bwd':
                    sortDoneTasks("added", "backward");
                    break;
                case 'fin-fwd':
                    sortDoneTasks("finished", "forward");
                    break;
                case 'fin-bwd':
                    sortDoneTasks("finished", "backward");
                    break;
                default:
                    break;
            }
        }
    });
}
let tasks_current = document.querySelector('.tasks-current');
// if (tasks_current && tasks_current.childElementCount <= 2) {
//     let current = localStorage.getItem(key_current);
//     if (current) {
//         let current_parsed: Array<ITask> = JSON.parse(current);
//         TaskTimer.setTime(current_parsed[0].timer);
//         TaskTimer.startTimer();
//     }
// }
getTasksFromStorage();
