import { Transfer, TransferStatus } from "./../_models/transfer";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TransferService {
  transfers: Transfer[];

  constructor() {
    this.transfers = [
      {
        id: "1231",
        name: "rcco-instruments",
        status: TransferStatus.Ok,
        count: 1
      },
      {
        id: "1232",
        name: "rcco-credit",
        status: TransferStatus.Ack,
        count: 1
      },
      {
        id: "1233",
        name: "rcco-collateral",
        status: TransferStatus.Ready,
        count: 0
      },
      {
        id: "1234",
        name: "rcco-instruments",
        status: TransferStatus.Ready,
        count: 0
      },
      {
        id: "1235",
        name: "mbis-data-file-1",
        status: TransferStatus.Ready,
        count: 1
      },
      {
        id: "1236",
        name: "mbis-date_file-2",
        status: TransferStatus.Paused,
        count: 0
      }
    ];
  }

  getTransfer() {
    return this.transfers;
  }
}
