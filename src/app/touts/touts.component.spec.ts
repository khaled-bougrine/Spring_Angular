import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutsComponent } from './touts.component';

describe('ToutsComponent', () => {
  let component: ToutsComponent;
  let fixture: ComponentFixture<ToutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
