import { ReportModule } from "./report/report.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { RouterModule, Routes } from "@angular/router";
import { DevExtremeModule } from "devextreme-angular";
import { DxDataGridModule } from "devextreme-angular";

import { AlertComponent } from "./_directives/index";
import { AlertService } from "./_service/index";
import { HomeComponent } from "./home/index";
import {
  MultiAlertsComponent,
  MultiAlertsSectionComponent
} from "./multi-alerts/index";
import { TransferComponent } from "./transfer/transfer.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { ScheduleFormComponent } from "./schedule-form/schedule-form.component";
import { DocumentComponent } from "./document/document.component";

import { FooterComponent } from "./layout/footer/footer.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "transfer", component: TransferComponent },
  { path: "multi-alerts", component: MultiAlertsComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "schedule/create", component: ScheduleFormComponent },
  { path: "schedule/:id/detail", component: ScheduleComponent },
  { path: "schedule/:id/edit", component: ScheduleFormComponent },
  { path: "document", component: DocumentComponent },
  {
    path: "tasklist",
    component: TaskListComponent
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NavbarComponent,
    AlertComponent,
    HomeComponent,
    MultiAlertsComponent,
    MultiAlertsSectionComponent,
    TransferComponent,
    ScheduleComponent,
    ScheduleFormComponent,
    DocumentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    DevExtremeModule,
    DxDataGridModule,
    ReportModule.forRoot()
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
