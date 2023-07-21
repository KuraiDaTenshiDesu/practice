import moveTasksInStorage from "./move_tasks_in_storage.js";
function checkTask(task, task_element) {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');
    let tasks_done = document.querySelector('.tasks-done');
    if (task.type === 'available' && tasks_available) {
        tasks_available.removeChild(task_element);
    }
    if (task.type === 'current' && tasks_current) {
        tasks_current.removeChild(task_element);
    }
    if (task.type === 'done') {
        if (tasks_available && tasks_done) {
            task.type = 'available';
            task_element.classList.remove('task_current');
            task_element.classList.remove('task_done');
            tasks_done.removeChild(task_element);
            tasks_available.append(task_element);
            return;
        }
    }
    ;
    if (tasks_done) {
        task.type = 'done';
        task_element.classList.remove('task_current');
        task_element.classList.add('task_done');
        tasks_done.append(task_element);
    }
    moveTasksInStorage(task);
}
export default checkTask;
