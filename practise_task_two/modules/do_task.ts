import { ITask } from "./task_interface";
import moveTasksInStorage from "./move_tasks_in_storage.js";

function doTask(task: ITask, task_element: HTMLElement): void {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');

    if (tasks_current) {
        if (tasks_current.childElementCount <= 1) {
            if (task.type === 'available' && tasks_available) {
                tasks_available.removeChild(task_element);
            }

        
            if (tasks_current) {
                task.type = 'current';
                task_element.classList.remove('task_done');
                task_element.classList.add('task_current');
                tasks_current.append(task_element);
            }
        }
    }

    moveTasksInStorage(task);
}

export default doTask;