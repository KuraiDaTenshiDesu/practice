var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _TaskTimer_seconds, _TaskTimer_minutes, _TaskTimer_hours;
class TaskTimer {
    static startTimer() {
        let timer = setInterval(() => {
            var _b, _c, _d;
            let seconds_string;
            let minutes_string;
            __classPrivateFieldSet(this, _a, (_b = __classPrivateFieldGet(this, _a, "f", _TaskTimer_seconds), _b++, _b), "f", _TaskTimer_seconds);
            if (__classPrivateFieldGet(this, _a, "f", _TaskTimer_seconds) > 60) {
                __classPrivateFieldSet(this, _a, (_c = __classPrivateFieldGet(this, _a, "f", _TaskTimer_minutes), _c++, _c), "f", _TaskTimer_minutes);
                __classPrivateFieldSet(this, _a, 0, "f", _TaskTimer_seconds);
            }
            if (__classPrivateFieldGet(this, _a, "f", _TaskTimer_minutes) > 60) {
                __classPrivateFieldSet(this, _a, (_d = __classPrivateFieldGet(this, _a, "f", _TaskTimer_hours), _d++, _d), "f", _TaskTimer_hours);
                __classPrivateFieldSet(this, _a, 0, "f", _TaskTimer_minutes);
            }
            if (__classPrivateFieldGet(this, _a, "f", _TaskTimer_seconds) < 10) {
                seconds_string = `0${__classPrivateFieldGet(this, _a, "f", _TaskTimer_seconds)}`;
            }
            else {
                seconds_string = `${__classPrivateFieldGet(this, _a, "f", _TaskTimer_seconds)}`;
            }
            if (__classPrivateFieldGet(this, _a, "f", _TaskTimer_minutes) < 10) {
                minutes_string = `0${__classPrivateFieldGet(this, _a, "f", _TaskTimer_minutes)}`;
            }
            else {
                minutes_string = `${__classPrivateFieldGet(this, _a, "f", _TaskTimer_minutes)}`;
            }
            let time = `${__classPrivateFieldGet(this, _a, "f", _TaskTimer_hours)}:${minutes_string}:${seconds_string}`;
            let timer_container = document.getElementById('timer');
            if (timer_container) {
                timer_container.innerHTML = time;
            }
        }, 1000);
        this.time = timer;
    }
    static stopTimer() {
        clearInterval(this.time);
        __classPrivateFieldSet(this, _a, 0, "f", _TaskTimer_seconds);
        __classPrivateFieldSet(this, _a, 0, "f", _TaskTimer_minutes);
        __classPrivateFieldSet(this, _a, 0, "f", _TaskTimer_hours);
        let timer_container = document.getElementById('timer');
        if (timer_container) {
            timer_container.innerHTML = '0:00:00';
        }
    }
    static getTime() {
        return {
            hours: __classPrivateFieldGet(this, _a, "f", _TaskTimer_hours),
            minutes: __classPrivateFieldGet(this, _a, "f", _TaskTimer_minutes),
            seconds: __classPrivateFieldGet(this, _a, "f", _TaskTimer_seconds)
        };
    }
    static setTime(time) {
        __classPrivateFieldSet(this, _a, time.hours, "f", _TaskTimer_hours);
        __classPrivateFieldSet(this, _a, time.minutes, "f", _TaskTimer_minutes);
        __classPrivateFieldSet(this, _a, time.seconds, "f", _TaskTimer_seconds);
    }
}
_a = TaskTimer;
_TaskTimer_seconds = { value: 0 };
_TaskTimer_minutes = { value: 0 };
_TaskTimer_hours = { value: 0 };
export default TaskTimer;
