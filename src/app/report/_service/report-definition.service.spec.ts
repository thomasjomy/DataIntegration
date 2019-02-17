import { TestBed } from "@angular/core/testing";

import { ReportDefinitionService } from "./report-definition.service";

describe("ReportDefinitionService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ReportDefinitionService = TestBed.get(
      ReportDefinitionService
    );
    expect(service).toBeTruthy();
  });
});
