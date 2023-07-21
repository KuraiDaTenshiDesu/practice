import { ITimer } from "./timer_interface";

class TaskTimer {
    static #seconds: number = 0;
    static #minutes: number = 0;
    static #hours: number = 0;

    static time: number;

    static startTimer() {
        let timer = setInterval(() => {
            let seconds_string: string;
            let minutes_string: string;

            this.#seconds++;

            if (this.#seconds > 60) {
                this.#minutes++;
                this.#seconds = 0;
            }

            if (this.#minutes > 60) {
                this.#hours++;
                this.#minutes = 0;
            }

            if (this.#seconds < 10) {
                seconds_string = `0${this.#seconds}`;
            } else {
                seconds_string = `${this.#seconds}`;
            }

            if (this.#minutes < 10) {
                minutes_string = `0${this.#minutes}`;
            } else {
                minutes_string = `${this.#minutes}`;
            }

            let time = `${this.#hours}:${minutes_string}:${seconds_string}`;
            
            let timer_container = document.getElementById('timer');

            if (timer_container) {
                timer_container.innerHTML = time;
            }
        }, 1000);

        this.time = timer;
    }

    static stopTimer() {
        clearInterval(this.time);
        this.#seconds = 0;
        this.#minutes = 0;
        this.#hours = 0;
            
        let timer_container = document.getElementById('timer');

        if (timer_container) {
            timer_container.innerHTML = '0:00:00';
        }
    }

    static getTime(): ITimer {
        return {
            hours: this.#hours,
            minutes: this.#minutes,
            seconds: this.#seconds
        }
    }

    static setTime(time: ITimer): void {
        this.#hours = time.hours;
        this.#minutes = time.minutes;
        this.#seconds = time.seconds;
    }
}

export default TaskTimer;