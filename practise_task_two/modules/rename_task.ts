import { ITask } from "./task_interface";
import renameTaskInStorage from "./rename_task_in_storage.js";
import isTaskNameFree from "./is_task_name_free.js";

function renameTask(task: ITask, task_element: HTMLElement, name: string): void {
    task.title = name;
    let task_element_title = task_element.querySelector('.task_name');
    
    if (task_element_title && isTaskNameFree(name)) {
        renameTaskInStorage(task, name);
        task_element_title.innerHTML = name;
    }
}

export default renameTask;