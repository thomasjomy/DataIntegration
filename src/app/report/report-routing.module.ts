import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { ReportExecutionComponent } from "./report-execution/report-execution.component";
import { ReportDefinitionFormComponent } from "./report-definition-form/report-definition-form.component";
import { ReportDefinitionComponent } from "./report-definition/report-definition.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const reportRoutes: Routes = [
  { path: "report-def", component: ReportDefinitionComponent },
  { path: "report-def/create", component: ReportDefinitionFormComponent },
  { path: "report-def/:id/detail", component: ReportDefinitionComponent },
  { path: "report-def/:id/edit", component: ReportDefinitionFormComponent },
  { path: "report-execution", component: ReportExecutionComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(reportRoutes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
