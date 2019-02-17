export class ReportExecution {
  id: string;
  name: string;
  status: ExecutionStatus;

  constructor(init?: Partial<ReportExecution>) {
    Object.assign(this, init);
  }
}


export enum ExecutionStatus {
    Running = "Running",
    Completed = "Completed",
    Error = "Error",
    Init = "Init",
}
