import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpriceitemComponent } from './bestpriceitem.component';

describe('BestpriceitemComponent', () => {
  let component: BestpriceitemComponent;
  let fixture: ComponentFixture<BestpriceitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestpriceitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestpriceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
