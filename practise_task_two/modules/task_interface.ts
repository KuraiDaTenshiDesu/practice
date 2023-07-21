export interface ITask {
    title: string;
    date: string;
    html: string;
    type: "available" | "done" | "current";
}