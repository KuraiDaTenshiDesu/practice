function editTaskInStorage(oldName, newName) {
    let tasks = localStorage.getItem('tasks');
    if (tasks !== null) {
        let parsed_tasks = JSON.parse(tasks);
        let index = parsed_tasks.indexOf(oldName);
        parsed_tasks[index] = newName;
        console.log(oldName);
        console.log(parsed_tasks);
        localStorage.setItem('tasks', JSON.stringify(parsed_tasks));
    }
}
export default editTaskInStorage;
