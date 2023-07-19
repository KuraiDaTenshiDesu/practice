import getTask from "./getTask.js";
function showTask(value) {
    let tasks_container = document.querySelector('.tasks-container');
    if (tasks_container !== null) {
        tasks_container.innerHTML += getTask(value);
    }
    else {
        console.error('Cannot Find Task Container');
    }
}
export default showTask;
