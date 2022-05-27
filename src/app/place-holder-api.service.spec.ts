import { TestBed } from '@angular/core/testing';

import { PlaceHolderApiService } from './place-holder-api.service';

describe('PlaceHolderApiService', () => {
  let service: PlaceHolderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceHolderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
