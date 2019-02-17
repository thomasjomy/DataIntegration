export class ReportDocument {
    id: string;
    name: string;

    constructor(init?: Partial<ReportDocument>) {
        Object.assign(this, init);
      }
  }
