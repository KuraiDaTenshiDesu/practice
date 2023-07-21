import deleteTaskFromStorage from "./delete_task_from_storage.js";
import TaskTimer from "./task_timer.js";
function removeTask(task, task_element) {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');
    let tasks_done = document.querySelector('.tasks-done');
    if (task.type === 'available' && tasks_available) {
        tasks_available.removeChild(task_element);
    }
    if (task.type === 'done' && tasks_done) {
        tasks_done.removeChild(task_element);
    }
    if (task.type === 'current' && tasks_current) {
        tasks_current.removeChild(task_element);
        TaskTimer.stopTimer();
    }
    deleteTaskFromStorage(task);
}
export default removeTask;
