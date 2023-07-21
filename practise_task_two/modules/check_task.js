import moveTasksInStorage from "./move_tasks_in_storage.js";
import TaskTimer from "./task_timer.js";
function checkTask(task, task_element) {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');
    let tasks_done = document.querySelector('.tasks-done');
    let task_time = task_element.querySelector('.task_date');
    let timer = document.getElementById('timer');
    let task_do_button = task_element.querySelector('.task_do');
    let finished_in = document.createElement('span');
    if (task.type === 'available' && tasks_available) {
        tasks_available.removeChild(task_element);
    }
    if (task.type === 'current' && tasks_current) {
        tasks_current.removeChild(task_element);
    }
    if (task.type !== 'done' && tasks_done && task_do_button && task_time && timer) {
        finished_in.innerHTML = `| Finished in: ${timer.innerHTML}`;
        task.type = 'done';
        task.html = `
            <div class="task task-${task.type}">
                <h2 class="task_name">${task.title}</h2>
                <p class="task_date">${task.date}<span>${finished_in.innerHTML}</span></p>
                <p class="task_do">Return Task</p>

                <a class="task_button task_button__edit"></a>
                <a class="task_button task_button__done"></a>
                <a class="task_button task_button__remove"></a>
            </div>
        `;
        task_element.classList.remove('task_current');
        task_element.classList.add('task_done');
        task_time.append(finished_in);
        task_do_button.innerHTML = 'Return Task';
        tasks_done.append(task_element);
        task.timer = TaskTimer.getTime();
        TaskTimer.stopTimer();
    }
    else if (task.type === 'done' && tasks_available && tasks_done && task_do_button && task_time) {
        task.type = 'available';
        task.html = `
            <div class="task task-${task.type}">
                <h2 class="task_name">${task.title}</h2>
                <p class="task_date">${task.date}</p>
                <p class="task_do">Start Task</p>

                <a class="task_button task_button__edit"></a>
                <a class="task_button task_button__done"></a>
                <a class="task_button task_button__remove"></a>
            </div>
        `;
        task_element.classList.remove('task_current');
        task_element.classList.remove('task_done');
        tasks_done.removeChild(task_element);
        finished_in = task_time.querySelector('span');
        if (finished_in)
            task_time.removeChild(finished_in);
        task_do_button.innerHTML = 'Start Task';
        tasks_available.append(task_element);
    }
    moveTasksInStorage(task);
}
export default checkTask;
