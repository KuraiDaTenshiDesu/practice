import { ITask } from "./task_interface";
import turnStringIntoElement from "./turn_string_into_element.js";
import addTaskEventListener from "./add_task_event_listener.js";

function showTask(task: ITask): void {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');
    let tasks_done = document.querySelector('.tasks-done');

    let task_element = turnStringIntoElement(task.html);
    addTaskEventListener(task, task_element);

    if (task.type === 'available' && tasks_available) {
        tasks_available.append(task_element);
    }

    if (task.type === 'current' && tasks_current) {
        tasks_current.append(task_element);
    }

    if (task.type === 'done' && tasks_done) {
        tasks_done.append(task_element);
    }
}

export default showTask;