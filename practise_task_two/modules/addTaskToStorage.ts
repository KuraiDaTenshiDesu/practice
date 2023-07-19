function addTaskToStorage(task: string): number {
    let key = 'tasks';
    let stored_tasks = localStorage.getItem(key)

    if (stored_tasks !== null) {
        let parsed_tasks: Array<string> = JSON.parse(stored_tasks)
        let index = parsed_tasks.indexOf(task);

        if (index === -1) {
            parsed_tasks.push(task);
            localStorage.setItem(key, JSON.stringify(parsed_tasks));
            return 1;
        }
    } else {
        let tasks: Array<string> = [];
        tasks.push(task);
        localStorage.setItem(key, JSON.stringify(tasks));
        return 1;
    }

    return -1;
}

export default addTaskToStorage;