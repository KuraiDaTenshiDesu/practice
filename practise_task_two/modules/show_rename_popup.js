function showRenamePopup() {
    let rename_popup = document.querySelector('.rename-task-container');
    if (rename_popup) {
        rename_popup.classList.add('rename-task-container__active');
    }
}
export default showRenamePopup;
