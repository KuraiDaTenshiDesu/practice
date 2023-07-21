function hideAddTaskPropsPopup() {
    let add_task_props_popup = document.querySelector('.add-task-props-container');
    if (add_task_props_popup) {
        add_task_props_popup.classList.remove('add-task-props-container__active');
    }
}
export default hideAddTaskPropsPopup;
