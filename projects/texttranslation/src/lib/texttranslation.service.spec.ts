import { TestBed } from '@angular/core/testing';

import { TexttranslationService } from './texttranslation.service';

describe('TexttranslationService', () => {
  let service: TexttranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TexttranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
