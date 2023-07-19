import removeTaskFromStorage from "./removeTaskFromStorage.js";
import showTask from "./showTask.js";

function getTasksFromStorage() {
    let tasks = localStorage.getItem('tasks');

    if (tasks !== null) {
        let parsed_tasks: Array<string> = JSON.parse(tasks);

        parsed_tasks.forEach((elem) => {
            removeTaskFromStorage(elem);
            showTask(elem);
        })
    }
}

export default getTasksFromStorage;