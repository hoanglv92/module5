import { TestBed } from '@angular/core/testing';

import { DateUltiService } from './date-ulti.service';

describe('DateUltiService', () => {
  let service: DateUltiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateUltiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
