import editTaskInStorage from "./editTaskInStorage.js";
import removeTaskFromStorage from "./removeTaskFromStorage.js";

function modifyTasks(event: MouseEvent): void {
    // let tasks_container = document.querySelector('.tasks-container');
    // let task_rename_popup = document.querySelector('.rename-task-container');
    // let task_delete_popup = document.querySelector('.delete-task-container');

    // let target = <HTMLElement> event.target;

    // if (target.classList.contains('task_button__remove')) {
    //     if (tasks_container !== null && task_delete_popup !== null) {
    //         task_delete_popup.classList.add('delete-task-container__active');

    //         let delete_buttons = document.querySelector('.delete-task-popup_buttons');
            
    //         if (delete_buttons !== null) {
    //             delete_buttons.addEventListener('click', (event) => {
    //                 let button = <HTMLElement> event.target;
                    
    //                 if (button.classList.contains('delete-task-popup_button__yes')) {
    //                     let task_to_remove = <HTMLElement> target.parentNode;
    //                     let title_elem = task_to_remove.querySelector('.task_name');
                        
                                        
    //                     if (title_elem !== null && tasks_container !== null && task_delete_popup !== null) {
    //                         let title = title_elem.innerHTML;
                                            
    //                         tasks_container.removeChild(task_to_remove);
    //                         removeTaskFromStorage(title);
    //                         task_delete_popup.classList.remove('delete-task-container__active');
    //                     }
    //                 } else if (button.classList.contains('delete-task-popup_button__no') && task_delete_popup !== null) {
    //                     task_delete_popup.classList.remove('delete-task-container__active');
    //                 }
    //             })
    //         }
    //     }
    // }

    // if (target.classList.contains('task_button__done')) {
    //     let task_done = <HTMLElement> target.parentNode;
    //     task_done.classList.toggle('task_done');
    // }

    // if (target.classList.contains('task_button__edit')) {
    //     let new_task = prompt('Type new task:', 'My Task');

    //     let task_to_edit = <HTMLElement> target.parentNode;
    //     let title = task_to_edit.querySelector('.task_name');

    //     if (title !== null && new_task !== null) {
    //         editTaskInStorage(title.innerHTML, new_task);
    //         title.innerHTML = new_task;
    //     }

    // }
}

export default modifyTasks;