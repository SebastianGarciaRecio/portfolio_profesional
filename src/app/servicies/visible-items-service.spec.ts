import { TestBed } from '@angular/core/testing';

import { VisibleItemsServiceService } from './visible-items-service';

describe('VisibleItemsServiceService', () => {
  let service: VisibleItemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibleItemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
