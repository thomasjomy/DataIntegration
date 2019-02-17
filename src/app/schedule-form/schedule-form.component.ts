import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-schedule-form",
  templateUrl: "./schedule-form.component.html",
  styleUrls: ["./schedule-form.component.css"]
})
export class ScheduleFormComponent implements OnInit {
  scheduleName = new FormControl("", Validators.required);

  scheduleForm: FormGroup = this.builder.group({
    scheduleName: this.scheduleName
  });

  constructor(private builder: FormBuilder) {}

  ngOnInit() {}

  saveSchedule() {
    console.log("saved schedule name=" + this.scheduleForm.value);
  }
}
