import { TestBed } from '@angular/core/testing';

import { MocService } from './moc-service';

describe('MocService', () => {
  let service: MocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
