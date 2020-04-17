import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWatermarkComponent } from './ngx-watermark.component';

describe('NgxWatermarkComponent', () => {
  let component: NgxWatermarkComponent;
  let fixture: ComponentFixture<NgxWatermarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWatermarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWatermarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
