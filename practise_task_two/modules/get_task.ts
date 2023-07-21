import getDateString from "./get_date_string.js";
import { ITask } from "./task_interface";
import moveTasksInStorage from "./move_tasks_in_storage.js";
import showError from "./show_error.js";
import isTaskNameFree from "./is_task_name_free.js";

function getTask(name: string, type: "available" | "done" | "current"): ITask {
    let date = getDateString();

    if (isTaskNameFree(name)) {
        let task: ITask = {
            title: name,
            date: date,
            type,
            timer: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
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
        };
        
        moveTasksInStorage(task);
    
        return task;
    }

    showError('Task name should be unique');
}

export default getTask;