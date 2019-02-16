export class Task {
    taskId: string;
    name: string;
    status: TaskStatus;

    constructor(init?: Partial<Task>) {
        Object.assign(this, init);
      }
  }

  export enum TaskStatus {
    Completed,
    Failed,
    Running,
    Queued
  }