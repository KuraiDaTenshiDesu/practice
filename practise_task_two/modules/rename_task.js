import renameTaskInStorage from "./rename_task_in_storage.js";
import isTaskNameFree from "./is_task_name_free.js";
function renameTask(task, task_element, name) {
    task.title = name;
    let task_element_title = task_element.querySelector('.task_name');
    if (task_element_title && isTaskNameFree(name)) {
        renameTaskInStorage(task, name);
        task_element_title.innerHTML = name;
    }
}
export default renameTask;
