import { key_available, key_current, key_done } from "./constants.js";
function renameTaskInStorage(task, name) {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);
    if (tasks_available && tasks_done && tasks_current) {
        let tasks_available_parsed = JSON.parse(tasks_available);
        let tasks_done_parsed = JSON.parse(tasks_done);
        let tasks_current_parsed = JSON.parse(tasks_current);
        let tasks_available_names = tasks_available_parsed.map((task) => { return task.title; });
        let tasks_done_names = tasks_done_parsed.map((task) => { return task.title; });
        let tasks_current_names = tasks_current_parsed.map((task) => { return task.title; });
        let task_available_index = tasks_available_names.indexOf(task.title);
        let task_done_index = tasks_done_names.indexOf(task.title);
        let task_current_index = tasks_current_names.indexOf(task.title);
        console.log(task_available_index);
        console.log(task_done_index);
        console.log(task_current_index);
        if (task_available_index !== -1) {
            tasks_available_parsed[task_available_index].title = name;
            tasks_available_parsed[task_available_index].html = `
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
        if (task_done_index !== -1) {
            tasks_done_parsed[task_done_index].title = name;
            tasks_done_parsed[task_done_index].html = `
                <div class="task task-${tasks_done_parsed[task_done_index].type}">
                    <h2 class="task_name">${tasks_done_parsed[task_done_index].title}</h2>
                    <p class="task_date">${tasks_done_parsed[task_done_index].date}</p>
    
                    <a class="task_button task_button__edit"></a>
                    <a class="task_button task_button__done"></a>
                    <a class="task_button task_button__remove"></a>
                </div>
            `,
                localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            return;
        }
        if (task_current_index !== -1) {
            tasks_current_parsed[task_current_index].title = name;
            tasks_current_parsed[task_current_index].html = `
                <div class="task task-${tasks_current_parsed[task_current_index].type}">
                    <h2 class="task_name">${tasks_current_parsed[task_current_index].title}</h2>
                    <p class="task_date">${tasks_current_parsed[task_current_index].date}</p>
    
                    <a class="task_button task_button__edit"></a>
                    <a class="task_button task_button__done"></a>
                    <a class="task_button task_button__remove"></a>
                </div>
            `,
                localStorage.setItem(key_available, JSON.stringify(tasks_current_parsed));
            return;
        }
    }
}
export default renameTaskInStorage;
