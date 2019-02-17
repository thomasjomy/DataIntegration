import { Injectable } from "@angular/core";
import {Task, TaskStatus} from "../_models/task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  tasks: Task[];
  taskFilterList: any = ["all", "open", "status"];
  selectedTaskFilter: string = "open";

  constructor() {
    this.tasks = [
      new Task({ name: "Task 1", status: TaskStatus.Completed }),
      new Task({ name: "Task 2", status: TaskStatus.Failed }),
      new Task({ name: "Task 3", status: TaskStatus.Failed }),
      new Task({ name: "Task 4", status: TaskStatus.Running }),
      new Task({ name: "Task 5", status: TaskStatus.Completed }),
    ];
  }

  getFilteredTask() {
    return this.tasks.filter(task => {
      if (this.selectedTaskFilter === "all") {
        return true;
      } else if (this.selectedTaskFilter === "open") {
        return !(task.status === TaskStatus.Completed);
      } else {
        return task.status;
      }
    });
  }

  addTask(name) {
    this.tasks.push(new Task({
      name: name,
      status: TaskStatus.Queued
    }));
  }
}
