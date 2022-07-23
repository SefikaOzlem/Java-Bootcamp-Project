import { TestBed } from '@angular/core/testing';

import { ActsService } from './acts.service';

describe('ActsService', () => {
  let service: ActsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
