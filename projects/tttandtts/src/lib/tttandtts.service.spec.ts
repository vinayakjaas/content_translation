import { TestBed } from '@angular/core/testing';

import { TTTANDTTSService } from './tttandtts.service';

describe('TTTANDTTSService', () => {
  let service: TTTANDTTSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TTTANDTTSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
