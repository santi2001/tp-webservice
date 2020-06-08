import { TestBed } from '@angular/core/testing';

import { PuntocService } from './puntoc.service';

describe('PuntocService', () => {
  let service: PuntocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
