import { ITimer } from "./timer_interface";
import { ITask } from "./task_interface";
import { key_current } from "./constants.js";

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

            if (this.#seconds >= 60) {
                this.#minutes++;
                this.#seconds = 0;
            }

            if (this.#minutes >= 60) {
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

            this.saveTimer();

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

    static getTimeString(timer: ITimer): string {
        let seconds_string: string;
        let minutes_string: string;

        if (timer.seconds < 10) {
            seconds_string = `0${timer.seconds}`;
        } else {
            seconds_string = `${timer.seconds}`;
        }

        if (timer.minutes < 10) {
            minutes_string = `0${timer.minutes}`;
        } else {
            minutes_string = `${timer.minutes}`;
        }

        let time = `${timer.hours}:${minutes_string}:${seconds_string}`;
        return time;
    }

    static getMinutes(timer: ITimer): number {
        let minutes = timer.hours * 60 + timer.minutes + timer.seconds / 60;

        return minutes;
    }

    static saveTimer() {
        let current = localStorage.getItem(key_current);
        
        if (current) {
            let current_parsed: Array<ITask> = JSON.parse(current);
            current_parsed[0].timer = this.getTime();
            localStorage.setItem(key_current, JSON.stringify(current_parsed));
        }
    }
}

export default TaskTimer;