import { TestBed } from '@angular/core/testing';

import { JobAvailabilityService } from './job-availability.service';

describe('JobAvailabilityServiceService', () => {
  let service: JobAvailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAvailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
