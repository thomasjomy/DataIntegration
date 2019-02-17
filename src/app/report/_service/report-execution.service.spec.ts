import { TestBed } from "@angular/core/testing";

import { ReportExecutionService } from "./report-execution.service";

describe("ReportExecutionService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ReportExecutionService = TestBed.get(ReportExecutionService);
    expect(service).toBeTruthy();
  });
});
