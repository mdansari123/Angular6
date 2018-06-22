import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollbarComponent } from './ngx-scrollbar.component';

describe('NgxScrollbarComponent', () => {
  let component: NgxScrollbarComponent;
  let fixture: ComponentFixture<NgxScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
