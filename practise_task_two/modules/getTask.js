import getDateString from "./getDateString.js";
import addTaskToStorage from "./addTaskToStorage.js";
function getTask(value) {
    let date = getDateString();
    let task = `
        <div class="task">
            <h2 class = "task_name">${value}</h2>
            <p class="task_date">${date}</p>

            <a class="task_button task_button__edit"></a>
            <a class="task_button task_button__done"></a>
            <a class="task_button task_button__remove"></a>
        </div>
    `;
    if (addTaskToStorage(value) === 1) {
        return task;
    }
    return ``;
}
export default getTask;
