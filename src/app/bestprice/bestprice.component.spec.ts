import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpriceComponent } from './bestprice.component';

describe('BestpriceComponent', () => {
  let component: BestpriceComponent;
  let fixture: ComponentFixture<BestpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
