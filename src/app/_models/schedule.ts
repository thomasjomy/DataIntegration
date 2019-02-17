export class Schedule {
    id: string;
    name: string;
    status: ScheduleStatus;

    constructor(init?: Partial<Schedule>) {
        Object.assign(this, init);
      }
  }

  export enum ScheduleStatus {
    Active,
    Inactive
  }
