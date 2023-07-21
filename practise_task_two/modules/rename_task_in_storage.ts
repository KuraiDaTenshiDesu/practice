import { ITask } from "./task_interface";
import { key_available, key_current, key_done, min_letters } from "./constants.js";
import isTaskNameFree from "./is_task_name_free.js";
import showError from "./show_error.js";

function renameTaskInStorage(task: ITask, task_element: HTMLElement, name: string): void {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    let task_element_title = task_element.querySelector('.task_name');
    task.title = name;

    if (tasks_available && tasks_done && tasks_current) {
        let tasks_available_parsed: Array<ITask> = JSON.parse(tasks_available);
        let tasks_done_parsed: Array<ITask> = JSON.parse(tasks_done);
        let tasks_current_parsed: Array<ITask> = JSON.parse(tasks_current);

        let tasks_available_names: Array<string> = tasks_available_parsed.map((task) => {return task.title});
        let tasks_done_names: Array<string> = tasks_done_parsed.map((task) => {return task.title});
        let tasks_current_names: Array<string> = tasks_current_parsed.map((task) => {return task.title});

        let task_available_index = tasks_available_names.indexOf(task.title);
        let task_done_index = tasks_done_names.indexOf(task.title);
        let task_current_index = tasks_current_names.indexOf(task.title);

        if (task_available_index !== -1 && isTaskNameFree(name) && task_element_title) {
            task_element_title.innerHTML = name;
            tasks_available_parsed[task_available_index].title = name;
            tasks_available_parsed[task_available_index].html =  `
                <div class="task task-${tasks_available_parsed[task_available_index].type}">
                    <h2 class="task_name">${tasks_available_parsed[task_available_index].title}</h2>
                    <p class="task_date">${tasks_available_parsed[task_available_index].date}</p>
    
                    <a class="task_button task_button__edit"></a>
                    <a class="task_button task_button__done"></a>
                    <a class="task_button task_button__remove"></a>
                </div>
            `,

            localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            return;
        }

        if (task_done_index !== -1 && isTaskNameFree(name) && task_element_title) {
            task_element_title.innerHTML = name;
            tasks_done_parsed[task_done_index].title = name;
            tasks_done_parsed[task_done_index].html =  `
                <div class="task task-${tasks_done_parsed[task_done_index].type}">
                    <h2 class="task_name">${tasks_done_parsed[task_done_index].title}</h2>
                    <p class="task_date">${tasks_done_parsed[task_done_index].date}</p>
    
                    <a class="task_button task_button__edit"></a>
                    <a class="task_button task_button__done"></a>
                    <a class="task_button task_button__remove"></a>
                </div>
            `,
            localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed))
            return;
        }

        if (task_current_index !== -1 && isTaskNameFree(name) && task_element_title) {
            task_element_title.innerHTML = name;
            tasks_current_parsed[task_current_index].title = name;
            tasks_current_parsed[task_current_index].html =  `
                <div class="task task-${tasks_current_parsed[task_current_index].type}">
                    <h2 class="task_name">${tasks_current_parsed[task_current_index].title}</h2>
                    <p class="task_date">${tasks_current_parsed[task_current_index].date}</p>
    
                    <a class="task_button task_button__edit"></a>
                    <a class="task_button task_button__done"></a>
                    <a class="task_button task_button__remove"></a>
                </div>
            `,
            localStorage.setItem(key_available, JSON.stringify(tasks_current_parsed))
            return;
        }

        showError('Task name should be unique');
    }
}

export default renameTaskInStorage;