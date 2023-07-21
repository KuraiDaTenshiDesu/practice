import { ITask } from "./task_interface";
import checkTask from "./check_task.js";
import removeTask from "./remove_task.js";
import showRenamePopup from "./show_rename_popup.js";
import hideRenamePopup from "./hide_rename_popup.js";
import showError from "./show_error.js";
import doTask from "./do_task.js";
import { key_available, key_current, key_done, min_letters } from "./constants.js";
import renameTaskInStorage from "./rename_task_in_storage.js";

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
                            renameTaskInStorage(task, task_element, value);
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

export default addTaskEventListener;