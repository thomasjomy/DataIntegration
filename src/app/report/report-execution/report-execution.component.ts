import { Component, OnInit } from "@angular/core";
import { ReportExecutionService } from "../_service/report-execution.service";
import { ReportExecution } from "../_models/report-execution";

@Component({
  selector: "app-report-execution",
  templateUrl: "./report-execution.component.html",
  styleUrls: ["./report-execution.component.css"]
})
export class ReportExecutionComponent implements OnInit {
  reportExecutions: ReportExecution[];

  constructor(private reportExecutionService: ReportExecutionService) {
    this.reportExecutions = reportExecutionService.getReportExecution();
  }

  ngOnInit() {}
}
