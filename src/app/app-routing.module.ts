import { TaskListComponent } from "./task-list/task-list.component";
import { Routes, RouterModule } from "@angular/router";
import { DocumentComponent } from "./document/document.component";
import { ScheduleFormComponent } from "./schedule-form/schedule-form.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { MultiAlertsComponent } from "./multi-alerts/multi-alerts.component";
import { TransferComponent } from "./transfer/transfer.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

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
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
