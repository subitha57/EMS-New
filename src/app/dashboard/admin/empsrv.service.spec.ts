import { TestBed } from '@angular/core/testing';

import { EmpsrvService } from './empsrv.service';

describe('EmpsrvService', () => {
  let service: EmpsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
