function sortDoneTasks(mode: "added" | "finished" | "name", to: "forward" | "backward") {
    let done_tasks_container = document.querySelector('.tasks-done');
    let done_tasks = document.querySelectorAll('.task_done');
    let done_tasks_arr = Array.from(done_tasks);

    if (done_tasks_container) {

        if (to === 'forward') {
            if (mode === 'name') {
                done_tasks_arr.sort((a: Element, b: Element) => {
                    let header_a = a.querySelector('.task_name');
                    let header_b = b.querySelector('.task_name');
        
                    if (header_a && header_b) {
                        let title_a = header_a.innerHTML;
                        let title_b = header_b.innerHTML;
        
                        return title_a.localeCompare(title_b);
                    }
        
                    return 0;
                })
            }
    
            if (mode === 'added') {
                done_tasks_arr.sort((a: Element, b: Element) => {
                    let date_a = a.querySelector('.task_date');
                    let date_b = b.querySelector('.task_date');
        
                    if (date_a && date_b) {
                        let date_a_string = date_a.innerHTML;
                        let date_b_string = date_b.innerHTML;
        
                        return date_a_string.localeCompare(date_b_string);
                    }
        
                    return 0;
                })
            }
    
            if (mode === 'finished') {
                done_tasks_arr.sort((a: Element, b: Element) => {
                    let time_a = a.querySelector('span');
                    let time_b = b.querySelector('span');
        
                    if (time_a && time_b) {
                        let time_a_string = time_a.innerHTML;
                        let time_b_string = time_b.innerHTML;
        
                        return time_a_string.localeCompare(time_b_string);
                    }
        
                    return 0;
                })
            }
        }

        if (to === 'backward') {
            if (mode === 'name') {
                done_tasks_arr.sort((a: Element, b: Element) => {
                    let header_a = a.querySelector('.task_name');
                    let header_b = b.querySelector('.task_name');
        
                    if (header_a && header_b) {
                        let title_a = header_a.innerHTML;
                        let title_b = header_b.innerHTML;
        
                        return title_b.localeCompare(title_a);
                    }
        
                    return 0;
                })
            }
    
            if (mode === 'added') {
                done_tasks_arr.sort((a: Element, b: Element) => {
                    let date_a = a.querySelector('.task_date');
                    let date_b = b.querySelector('.task_date');
        
                    if (date_a && date_b) {
                        let date_a_string = date_a.innerHTML;
                        let date_b_string = date_b.innerHTML;
        
                        return date_b_string.localeCompare(date_a_string);
                    }
        
                    return 0;
                })
            }
    
            if (mode === 'finished') {
                done_tasks_arr.sort((a: Element, b: Element) => {
                    let time_a = a.querySelector('span');
                    let time_b = b.querySelector('span');
        
                    if (time_a && time_b) {
                        let time_a_string = time_a.innerHTML;
                        let time_b_string = time_b.innerHTML;
        
                        return time_b_string.localeCompare(time_a_string);
                    }
        
                    return 0;
                })
            }
        }

        done_tasks.forEach((elem) => {
            if (done_tasks_container) done_tasks_container.removeChild(elem);
        })

        done_tasks_arr.forEach(elem => {
            if (done_tasks_container) done_tasks_container.append(elem);
        })
    } 
}

export default sortDoneTasks;