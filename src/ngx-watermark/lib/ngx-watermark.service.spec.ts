import { TestBed } from '@angular/core/testing';

import { NgxWatermarkService } from './ngx-watermark.service';

describe('NgxWatermarkService', () => {
  let service: NgxWatermarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWatermarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
