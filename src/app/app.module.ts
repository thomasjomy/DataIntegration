import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule, Routes } from "@angular/router";

import { AlertComponent } from "./_directives/index";
import { AlertService } from "./service/index";
import { HomeComponent } from "./home/index";
import {
  MultiAlertsComponent,
  MultiAlertsSectionComponent
} from "./multi-alerts/index";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "multi-alerts", component: MultiAlertsComponent },
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
    MultiAlertsSectionComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
