import { ITask } from "./task_interface";
import renameTaskInStorage from "./rename_task_in_storage.js";

function renameTask(task: ITask, task_element: HTMLElement, name: string): void {
    renameTaskInStorage(task, name);
    task.title = name;
    let task_element_title = task_element.querySelector('.task_name');

    if (task_element_title) {
        task_element_title.innerHTML = name;
    }
}

export default renameTask;