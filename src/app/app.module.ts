import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { DevExtremeModule } from "devextreme-angular";
import { DxDataGridModule } from "devextreme-angular";
import { DxContextMenuModule } from "devextreme-angular";
import { DxNavBarModule } from "devextreme-angular";
import {
  DxButtonModule,
  DxLoadIndicatorModule,
  DxTemplateModule
} from "devextreme-angular";

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

import { ReportModule } from "./report/report.module";
import { AppRoutingModule } from "./app-routing.module";

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
    ReactiveFormsModule,
    DevExtremeModule,
    DxDataGridModule,
    DxContextMenuModule,
    DxNavBarModule,
    DxButtonModule,
    DxLoadIndicatorModule,
    DxTemplateModule,
    ReportModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
