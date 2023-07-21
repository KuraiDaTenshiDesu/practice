interface ITask {
    title: string;
    date: string;
    html: string;
    type: "available" | "done" | "current";
}

const key_available = 'tasks';
const key_done = 'tasks-done';
const key_current = 'tasks-current';

const min_letters = 5;

function initTasksStorages(): void {
    let emty_array_string = JSON.stringify([]);

    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    if (!tasks_available) {
        localStorage.setItem(key_available, emty_array_string)
    }

    if (!tasks_done) {
        localStorage.setItem(key_done, emty_array_string)
    }

    if (!tasks_current) {
        localStorage.setItem(key_current, emty_array_string)
    }
}

initTasksStorages();

function getDateString(): string {
    let date = new Date()

    let minutes: string | number = date.getMinutes();
    let hours: string | number = date.getHours();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = `${date.getFullYear() % 100}`;

    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    
    if (hours < 10) {
        hours = `0${hours}`
    }

    return `${hours}:${minutes} | ${date.getDate()}.${months[date.getMonth()]}.${year}`;
} 

function getTask(name: string, type: "available" | "done" | "current"): ITask {
    let date = getDateString();

    if (isTaskNameFree(name)) {
        let task: ITask = {
            title: name,
            date: date,
            html: `
                <div class="task task-${type}">
                    <h2 class="task_name">${name}</h2>
                    <p class="task_date">${date}</p>
    
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

function showTask(task: ITask): void {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');
    let tasks_done = document.querySelector('.tasks-done');

    let task_element = turnStringIntoElement(task.html);
    addTaskEventListener(task, task_element);

    if (task.type === 'available' && tasks_available) {
        tasks_available.append(task_element);
    }

    if (task.type === 'current' && tasks_current) {
        task_element.classList.add('task_current');
        tasks_current.append(task_element);
    }

    if (task.type === 'done' && tasks_done) {
        task_element.classList.add('task_done');
        tasks_done.append(task_element);
    }
}

function turnStringIntoElement(string: string): HTMLElement {
    let container = document.createElement('div');
    container.innerHTML = string;

    return <HTMLElement> container.firstElementChild;
}

function checkTask(task: ITask, task_element: HTMLElement): void {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');
    let tasks_done = document.querySelector('.tasks-done');

    if (task.type === 'available' && tasks_available) {
        tasks_available.removeChild(task_element);
    }

    if (task.type === 'current' && tasks_current) {
        tasks_current.removeChild(task_element);
    }

    if (task.type === 'done') {
        if (tasks_available && tasks_done) {
            task.type = 'available';
            task_element.classList.remove('task_current');
            task_element.classList.remove('task_done');
            tasks_done.removeChild(task_element);
            tasks_available.append(task_element);
            return; 
        }
    };

    if (tasks_done) {
        task.type = 'done';
        task_element.classList.remove('task_current');
        task_element.classList.add('task_done');
        tasks_done.append(task_element);
    }
    
    moveTasksInStorage(task);
}

function removeTask(task: ITask, task_element: HTMLElement): void {
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
    }

    deleteTaskFromStorage(task);
}

function doTask(task: ITask, task_element: HTMLElement): void {
    let tasks_available = document.querySelector('.tasks-available');
    let tasks_current = document.querySelector('.tasks-current');

    if (task.type === 'current') {
        if (tasks_available && tasks_current) {
            task.type = 'available';
            task_element.classList.remove('task_current');
            task_element.classList.remove('task_done');
            tasks_current.removeChild(task_element);
            tasks_available.append(task_element);
            return;
        }
    };

    if (tasks_current) {
        if (tasks_current.childElementCount <= 1) {
            if (task.type === 'available' && tasks_available) {
                tasks_available.removeChild(task_element);
            }

        
            if (tasks_current) {
                task.type = 'current';
                task_element.classList.remove('task_done');
                task_element.classList.add('task_current');
                tasks_current.append(task_element);
            }
        }
    }

    moveTasksInStorage(task);
}

function renameTask(task: ITask, task_element: HTMLElement, name: string): void {
    renameTaskInStorage(task, name);
    task.title = name;
    let task_element_title = task_element.querySelector('.task_name');

    if (task_element_title) {
        task_element_title.innerHTML = name;
    }
}

function addTaskEventListener(task: ITask, task_element: HTMLElement): void {
    let task_check_button = task_element.querySelector('.task_button__done');

    if (task_check_button) {
        task_check_button.addEventListener('click', () => {
            checkTask(task, task_element);
        })
    }

    let task_remove_button = task_element.querySelector('.task_button__remove');

    if (task_remove_button) {
        task_remove_button.addEventListener('click', () => {
            removeTask(task, task_element);
        })
    }

    let task_edit_button = task_element.querySelector('.task_button__edit');

    if (task_edit_button) {
        task_edit_button.addEventListener('click', () => {
            showRenamePopup();

            let rename_task = <HTMLInputElement> document.getElementById('rename-task');

            if (rename_task) {
                rename_task.addEventListener('keypress', (event: KeyboardEvent) => {
                    if (event.key === 'Enter') {
                        let value = rename_task.value;

                        if (value.length >= min_letters) {
                            renameTask(task, task_element, value);
                            hideRenamePopup();
                        } else {
                            showError(`At least ${min_letters} characters`);
                        }
                    }
                })
            }
        })
    }

    let task_do_button = task_element.querySelector('.task_name');

    if (task_do_button) {
        task_do_button.addEventListener('click', () => {
            doTask(task, task_element);
        })
    }
}

function showRenamePopup(): void {
    let rename_popup = document.querySelector('.rename-task-container');

    if (rename_popup) {
        rename_popup.classList.add('rename-task-container__active');
    }
}

function hideRenamePopup(): void {
    let rename_popup = document.querySelector('.rename-task-container');

    if (rename_popup) {
        rename_popup.classList.remove('rename-task-container__active');
    }
}

function showError(message: string): void {
    let error = document.querySelector('.error');

    if (error) {
        error.innerHTML = message;
        error.classList.add('error__active');

        setInterval(() => {
            if (error) error.classList.remove('error__active');
        }, 5000);
    }
}

function moveTasksInStorage(task: ITask): void {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    let tasks_available_parsed: Array<ITask>;
    let tasks_done_parsed: Array<ITask>;
    let tasks_current_parsed: Array<ITask>;

    let task_available_index: number;
    let task_done_index: number;
    let task_current_index: number;

    if (tasks_available && tasks_current && tasks_done) {
        tasks_available_parsed = JSON.parse(tasks_available);
        tasks_current_parsed = JSON.parse(tasks_current);
        tasks_done_parsed = JSON.parse(tasks_done);

        let tasks_available_names = tasks_available_parsed.map((task) => {return task.title});
        let tasks_current_names = tasks_current_parsed.map((task) => {return task.title});
        let tasks_done_names = tasks_done_parsed.map((task) => {return task.title});

        task_available_index = tasks_available_names.indexOf(task.title);
        task_current_index = tasks_current_names.indexOf(task.title);
        task_done_index = tasks_done_names.indexOf(task.title);

        console.log(task_available_index);
        console.log(task_current_index);
        console.log(task_done_index);
        
        if (task.type === 'available' && tasks_available && task_available_index === -1) {
            tasks_available_parsed.push(task);
            localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));

            if (task_current_index !== -1) {
                tasks_current_parsed.splice(task_current_index, 1);
                localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));
            }

            if (task_done_index !== -1) {
                tasks_done_parsed.splice(task_done_index, 1);
                localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            }

            return;
        }
    
        if (task.type === 'current' && tasks_current && task_current_index === -1) {
            tasks_current_parsed.push(task);
            localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));

            if (task_available_index !== -1) {
                tasks_available_parsed.splice(task_available_index, 1);
                localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            }

            if (task_done_index !== -1) {
                tasks_done_parsed.splice(task_done_index, 1);
                localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            }

            return;
        }
        
        if (task.type === 'done' && tasks_done && task_done_index === -1) {
            tasks_done_parsed.push(task);
            localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));

            if (task_current_index !== -1) {
                tasks_current_parsed.splice(task_current_index, 1);
                localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));
            }

            if (task_available_index !== -1) {
                tasks_available_parsed.splice(task_available_index, 1);
                localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            }

            return;
        }
    }
}

function deleteTaskFromStorage(task: ITask): void {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    if (tasks_available && tasks_current && tasks_done) {
        if (task.type === 'available') {
            let tasks_available_parsed: Array<ITask> = JSON.parse(tasks_available);
            let tasks_available_names = tasks_available_parsed.map((task) => {return task.title});

            let index = tasks_available_names.indexOf(task.title);
            
            if (index !== -1) {
                tasks_available_parsed.splice(index, 1);
                localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));
            }
        }

        if (task.type === 'current') {
            let tasks_current_parsed: Array<ITask> = JSON.parse(tasks_current);
            let tasks_current_names = tasks_current_parsed.map((task) => {return task.title});

            let index = tasks_current_names.indexOf(task.title);

            if (index !== -1) {
                tasks_current_parsed.splice(index, 1);
                localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));
            }
        }

        if (task.type === 'done') {
            let tasks_done_parsed: Array<ITask> = JSON.parse(tasks_done);
            let tasks_done_names = tasks_done_parsed.map((task) => {return task.title});

            let index = tasks_done_names.indexOf(task.title);

            if (index !== -1) {
                tasks_done_parsed.splice(index, 1);
                localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));
            }
        }
    }

    // let tasks_available_parsed: Array<ITask>;
    // let tasks_done_parsed: Array<ITask>;
    // let tasks_current_parsed: Array<ITask>;

    // let task_available_index: number;
    // let task_done_index: number;
    // let task_current_index: number;

    // if (tasks_available && tasks_current && tasks_done) {
    //     tasks_current_parsed = JSON.parse(tasks_current);
    //     tasks_done_parsed = JSON.parse(tasks_done);

    //     task_available_index = tasks_available_parsed.indexOf(task);
    //     task_done_index = tasks_done_parsed.indexOf(task);
    //     task_current_index = tasks_current_parsed.indexOf(task);

    //     if (task.type === 'available' && tasks_available && task_available_index === -1) {
    //         tasks_available_parsed.push(task);
    //         localStorage.setItem(key_available, JSON.stringify(tasks_available_parsed));

    //         if (task_current_index !== -1) {
    //             tasks_current_parsed.splice(task_current_index, 1);
    //         }

    //         if (task_done_index !== -1) {
    //             tasks_done_parsed.splice(task_done_index, 1);
    //         }

    //         return;
    //     }
    
    //     if (task.type === 'current' && tasks_current && task_current_index === -1) {
    //         tasks_current_parsed.push(task);
    //         localStorage.setItem(key_current, JSON.stringify(tasks_current_parsed));

    //         if (task_available_index !== -1) {
    //             tasks_available_parsed.splice(task_available_index, 1);
    //         }

    //         if (task_done_index !== -1) {
    //             tasks_done_parsed.splice(task_done_index, 1);
    //         }

    //         return;
    //     }
    
    //     if (task.type === 'done' && tasks_done && task_done_index === -1) {
    //         tasks_done_parsed.push(task);
    //         localStorage.setItem(key_done, JSON.stringify(tasks_done_parsed));

    //         if (task_current_index !== -1) {
    //             tasks_current_parsed.splice(task_current_index, 1);
    //         }

    //         if (task_available_index !== -1) {
    //             tasks_available_parsed.splice(task_available_index, 1);
    //         }

    //         return;
    //     }
    // }
}

function getTasksFromStorage() {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    if (tasks_available && tasks_done && tasks_current) {
        let tasks_available_parsed: Array<ITask> = JSON.parse(tasks_available);
        let tasks_done_parsed: Array<ITask> = JSON.parse(tasks_done);
        let tasks_current_parsed: Array<ITask> = JSON.parse(tasks_current);

        tasks_available_parsed.forEach((task) => {
            showTask(task);
        });

        tasks_done_parsed.forEach((task) => {
            showTask(task);
        });

        tasks_current_parsed.forEach((task) => {
            showTask(task);
        });
    }
}

function renameTaskInStorage(task: ITask, name: string): void {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

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

        if (task_available_index !== -1) {
            tasks_available_names[task_available_index] = name;
            return;
        }

        if (task_done_index !== -1) {
            tasks_done_names[task_done_index] = name;
            return;
        }

        if (task_current_index !== -1) {
            tasks_current_names[task_current_index] = name;
            return;
        }
    }
}

function isTaskNameFree(name: string): boolean {
    let tasks_available = localStorage.getItem(key_available);
    let tasks_done = localStorage.getItem(key_done);
    let tasks_current = localStorage.getItem(key_current);

    if (tasks_available && tasks_done && tasks_current) {
        let tasks_available_parsed: Array<ITask> = JSON.parse(tasks_available);
        let tasks_done_parsed: Array<ITask> = JSON.parse(tasks_done);
        let tasks_current_parsed: Array<ITask> = JSON.parse(tasks_current);

        let tasks_available_names: Array<string> = tasks_available_parsed.map((task) => {return task.title});
        let tasks_done_names: Array<string> = tasks_done_parsed.map((task) => {return task.title});
        let tasks_current_names: Array<string> = tasks_current_parsed.map((task) => {return task.title});

        let task_available_index = tasks_available_names.indexOf(name);
        let task_done_index = tasks_done_names.indexOf(name);
        let task_current_index = tasks_current_names.indexOf(name);

        if (task_available_index !== -1) return false;

        if (task_done_index !== -1) return false;

        if (task_current_index !== -1) return false;

        return true;
    }

    return false;
}

let add_task_input = <HTMLInputElement> document.getElementById('add-task');
let add_task_button = document.querySelector('.app_add-task-button');

if (add_task_input && add_task_button) {
    add_task_input.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            let value = add_task_input.value;

            if (value.length >= min_letters) {
                add_task_input.value = '';
                let task = getTask(value, "available");
                showTask(task);
            } else {
                showError(`At least ${min_letters} characters`);
            }
        }
    });

    add_task_button.addEventListener('click', () => {
        let value = add_task_input.value;

        if (value.length >= 3) {
            let task = getTask(value, "available");
            showTask(task);
        } else {
            showError(`At least ${min_letters} characters`);
        }
    })
}

getTasksFromStorage();