import { Injectable } from "@angular/core";
import { ReportExecution, ExecutionStatus } from "../_models/report-execution";

@Injectable({
  providedIn: "root"
})
export class ReportExecutionService {
  reportExecutions: ReportExecution[];

  constructor() {
    this.reportExecutions = [
      new ReportExecution({
        id: "9087",
        name: "RCCO-v1",
        status: ExecutionStatus.Completed
      }),
      new ReportExecution({
        id: "9088",
        name: "MBIS-v1",
        status: ExecutionStatus.Error
      })
    ];
  }

  getReportExecution() {
    return this.reportExecutions;
  }
}
