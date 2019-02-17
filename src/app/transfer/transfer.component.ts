import { TransferService } from "./../_service/transfer.service";
import { Transfer, TransferStatus } from "./../_models/transfer";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.component.html",
  styleUrls: ["./transfer.component.css"]
})
export class TransferComponent implements OnInit {
  transfers: Transfer[];

  constructor(private transferService: TransferService) {
    this.transfers = transferService.getTransfer();
    console.log(this.transfers);
  }

  ngOnInit() {}

  getTransfer() {
    console.log("Fetchig transfers");
  }
}
