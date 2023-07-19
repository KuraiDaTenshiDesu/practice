function removeTaskFromStorage(task: string) {
    let tasks = localStorage.getItem('tasks');

    if (tasks !== null) {
        let parsed_tasks: Array<string> = JSON.parse(tasks);

        let index = parsed_tasks.indexOf(task)

        parsed_tasks.splice(index, 1);

        localStorage.setItem('tasks', JSON.stringify(parsed_tasks));
    }
}

export default removeTaskFromStorage;