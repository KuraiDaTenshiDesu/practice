function showAddTaskPropsPopup() {
    let add_task_props_popup = document.querySelector('.add-task-props-container');

    if (add_task_props_popup) {
        add_task_props_popup.classList.add('add-task-props-container__active')
    }
}

export default showAddTaskPropsPopup;