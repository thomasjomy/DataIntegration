export class ReportDefinition {
    id: string;
    name: string;
    status: ReportDefinitionStaus;

    constructor(init?: Partial<ReportDefinition>) {
        Object.assign(this, init);
      }
  }

  export enum ReportDefinitionStaus {
    Active,
   Inactive,
  }