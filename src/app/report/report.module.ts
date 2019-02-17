import { ReportExecutionService } from './_service/report-execution.service';
import { RouterModule, Routes } from "@angular/router";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportExecutionComponent } from "./report-execution/report-execution.component";
import { ReportDefinitionComponent } from "./report-definition/report-definition.component";
import { ReportDefinitionFormComponent } from "./report-definition-form/report-definition-form.component";

const reportRoutes: Routes = [
  { path: "report-def", component: ReportDefinitionComponent },
  { path: "report-def/create", component: ReportDefinitionFormComponent },
  { path: "report-def/:id/detail", component: ReportDefinitionComponent },
  { path: "report-def/:id/edit", component: ReportDefinitionFormComponent },
  { path: "report-execution", component: ReportExecutionComponent }
];

@NgModule({
  declarations: [
    ReportDefinitionComponent,
    ReportDefinitionFormComponent,
    ReportExecutionComponent
  ],
  imports: [CommonModule]
})

export class ReportModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReportModule,
      providers: [ReportExecutionService]
    };
  }
}

export const userRouting = RouterModule.forChild(reportRoutes);
