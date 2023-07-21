import { ITask } from "./task_interface";
import moveTasksInStorage from "./move_tasks_in_storage.js";
import TaskTimer from "./task_timer.js";

function doTask(task: ITask, task_element: HTMLElement): void {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');
    let task_do_button = task_element.querySelector('.task_do');
    let task_time = task_element.querySelector('.task_date');

    if (tasks_current && task_do_button) {

        if (task.type === 'current' && tasks_available) {
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
            task_element.classList.remove('task_done');
            task_element.classList.remove('task_current');
            tasks_current.removeChild(task_element);
            task_do_button.innerHTML = 'Start Task';
            tasks_available.append(task_element);
            TaskTimer.stopTimer();
        } else if (tasks_current.childElementCount <= 1) {

            if (task.type === 'available' && tasks_available) {
                tasks_available.removeChild(task_element);
            }

            if (tasks_current && task_time) {
                task.type = 'current';
                task.html = `
                    <div class="task task-${task.type}">
                        <h2 class="task_name">${task.title}</h2>
                        <p class="task_date">${task.date}</p>
                        <p class="task_do">Return Task</p>
    
                        <a class="task_button task_button__edit"></a>
                        <a class="task_button task_button__done"></a>
                        <a class="task_button task_button__remove"></a>
                    </div>
                `;
                task_element.classList.remove('task_done');
                task_element.classList.add('task_current');
                task_do_button.innerHTML = 'Return Task';
                let finished_in = task_time.querySelector('span');
                if (finished_in) task_time.removeChild(finished_in);
                TaskTimer.setTime(task.timer);
                TaskTimer.startTimer();
                tasks_current.append(task_element);
            }
        }
    }

    moveTasksInStorage(task);
}

export default doTask;