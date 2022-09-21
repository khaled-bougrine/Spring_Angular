import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutlesModelComponent } from './toutles-model.component';

describe('ToutlesModelComponent', () => {
  let component: ToutlesModelComponent;
  let fixture: ComponentFixture<ToutlesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutlesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutlesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
