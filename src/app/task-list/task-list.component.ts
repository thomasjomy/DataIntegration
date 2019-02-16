import { TaskService } from "./../service/task.service";
import { Component, OnInit } from "@angular/core";
import {Task, TaskStatus} from "../_models/task";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] ;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getFilteredTask();
    console.log(this.tasks);
  }

  ngOnInit() {}
}
