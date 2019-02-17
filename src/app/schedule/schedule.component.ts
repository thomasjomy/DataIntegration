import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {
  loadIndicatorVisible = false;
  buttonText = "Save";

  constructor() {}

  ngOnInit() {}

  onClick(data) {
    this.buttonText = "Saving";
    this.loadIndicatorVisible = true;

    setTimeout(() => {
      this.buttonText = "Save";
      this.loadIndicatorVisible = false;
    }, 2000);
  }
}
