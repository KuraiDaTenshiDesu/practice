import { ITimer } from "./timer_interface";

export interface ITask {
    title: string;
    date: string;
    html: string;
    type: "available" | "done" | "current";
    timer: ITimer;
    added: Date;
    time: number;
}