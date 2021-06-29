import { TestBed } from '@angular/core/testing';

import { BeginnerServiceService } from './beginner-service.service';

describe('BeginnerServiceService', () => {
  let service: BeginnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeginnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
