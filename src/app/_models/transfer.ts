export class Transfer {
    id: string;
    name: string;
    status: TransferStatus;
    count: number;

    constructor(init?: Partial<Transfer>) {
        Object.assign(this, init);
      }
  }

  export enum TransferStatus {
    Ok = "Ok",
    Ready = "Ready",
    Initialized =  "Initialized",
    Ack = "Ack",
    Paused = "Paused"
  }
