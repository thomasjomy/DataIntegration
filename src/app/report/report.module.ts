import {
  DxNavBarModule,
  DxButtonModule,
  DxLoadIndicatorModule,
  DxTemplateModule
} from "devextreme-angular";
import { DxContextMenuModule } from "devextreme-angular";
import { DxDataGridModule } from "devextreme-angular";
import { DevExtremeModule } from "devextreme-angular";
import { ReportExecutionService } from "./_service/report-execution.service";
import { RouterModule, Routes } from "@angular/router";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportExecutionComponent } from "./report-execution/report-execution.component";
import { ReportDefinitionComponent } from "./report-definition/report-definition.component";
import { ReportDefinitionFormComponent } from "./report-definition-form/report-definition-form.component";
import { ReportDefinitionService } from "./_service/report-definition.service";
import { ReportRoutingModule } from "./report-routing.module";

@NgModule({
  declarations: [
    ReportDefinitionComponent,
    ReportDefinitionFormComponent,
    ReportExecutionComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    DevExtremeModule,
    DxDataGridModule,
    DxContextMenuModule,
    DxNavBarModule,
    DxButtonModule,
    DxLoadIndicatorModule,
    DxTemplateModule
  ],
  exports: [RouterModule]
})
export class ReportModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReportModule,
      providers: [ReportExecutionService, ReportDefinitionService]
    };
  }
}
