import getDateString from "./get_date_string.js";
import moveTasksInStorage from "./move_tasks_in_storage.js";
import showError from "./show_error.js";
import isTaskNameFree from "./is_task_name_free.js";
function getTask(name, type) {
    let date = getDateString();
    if (isTaskNameFree(name)) {
        let task = {
            title: name,
            date: date,
            html: `
                <div class="task task-${type}">
                    <h2 class="task_name">${name}</h2>
                    <p class="task_date">${date}</p>
                    <p class="task_do">Start Task</p>
    
                    <a class="task_button task_button__edit"></a>
                    <a class="task_button task_button__done"></a>
                    <a class="task_button task_button__remove"></a>
                </div>
            `,
            type,
        };
        moveTasksInStorage(task);
        return task;
    }
    showError('Task name should be unique');
}
export default getTask;
