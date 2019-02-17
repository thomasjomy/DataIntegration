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
    Ok,
    Ready,
    Init,
    Ack,
    Paused
  }
