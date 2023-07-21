function hideRenamePopup() {
    let rename_popup = document.querySelector('.rename-task-container');
    if (rename_popup) {
        rename_popup.classList.remove('rename-task-container__active');
    }
}
export default hideRenamePopup;
