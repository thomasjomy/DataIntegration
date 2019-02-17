import { Component, OnInit } from "@angular/core";
import { ReportDocument } from "../_models/report-document";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html",
  styleUrls: ["./document.component.css"]
})
export class DocumentComponent implements OnInit {
  reportDocuments: ReportDocument[];

  constructor() {}

  ngOnInit() {}
}
