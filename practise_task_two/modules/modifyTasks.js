import editTaskInStorage from "./editTaskInStorage.js";
import removeTaskFromStorage from "./removeTaskFromStorage.js";
function modifyTasks(event) {
    let tasks_container = document.querySelector('.tasks-container');
    let target = event.target;
    if (target.classList.contains('task_button__remove')) {
        if (confirm('Are you sure?') && tasks_container !== null) {
            let task_to_remove = target.parentNode;
            let title_elem = task_to_remove.querySelector('.task_name');
            if (title_elem !== null) {
                let title = title_elem.innerHTML;
                tasks_container.removeChild(task_to_remove);
                removeTaskFromStorage(title);
            }
        }
    }
    if (target.classList.contains('task_button__done')) {
        let task_done = target.parentNode;
        task_done.classList.toggle('task_done');
    }
    if (target.classList.contains('task_button__edit')) {
        let new_task = prompt('Type new task:', 'My Task');
        let task_to_edit = target.parentNode;
        let title = task_to_edit.querySelector('.task_name');
        if (title !== null && new_task !== null) {
            editTaskInStorage(title.innerHTML, new_task);
            title.innerHTML = new_task;
        }
    }
}
export default modifyTasks;
