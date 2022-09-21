import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SameseriesComponent } from './sameseries.component';

describe('SameseriesComponent', () => {
  let component: SameseriesComponent;
  let fixture: ComponentFixture<SameseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SameseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SameseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
