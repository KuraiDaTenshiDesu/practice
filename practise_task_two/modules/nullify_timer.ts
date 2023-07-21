function nullifyTimer(): void {
    let timer = document.getElementById('timer_container');

    if (timer) {
        timer.innerHTML = `0:00:00`;
    }
}

export default nullifyTimer;