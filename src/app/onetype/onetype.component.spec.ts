import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnetypeComponent } from './onetype.component';

describe('OnetypeComponent', () => {
  let component: OnetypeComponent;
  let fixture: ComponentFixture<OnetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
