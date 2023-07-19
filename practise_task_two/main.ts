import showTask from "./modules/showTask.js";
import modifyTasks from "./modules/modifyTasks.js";
import getTasksFromStorage from "./modules/getTasksFromStorage.js";

let task_input = <HTMLInputElement> document.getElementById('add-task');
let tasks_container = document.querySelector('.tasks-container');

if (task_input !== null) {
    task_input.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter' && task_input !== null) {
                let value = task_input.value;
                showTask(value);
        }
    })
}

if (tasks_container !== null) {
    tasks_container.addEventListener('click', (event: Event) => {modifyTasks(<MouseEvent> event)})
}

getTasksFromStorage();
// localStorage.clear();