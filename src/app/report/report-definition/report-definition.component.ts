import { Component, OnInit } from "@angular/core";
import {ReportDefinition, ReportDefinitionStaus} from "../_models/report-definition";
@Component({
  selector: "app-report-definition",
  templateUrl: "./report-definition.component.html",
  styleUrls: ["./report-definition.component.css"]
})
export class ReportDefinitionComponent implements OnInit {
  definitions: ReportDefinition[];

  constructor() {}

  ngOnInit() {}
}
