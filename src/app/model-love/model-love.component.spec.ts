import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelLoveComponent } from './model-love.component';

describe('ModelLoveComponent', () => {
  let component: ModelLoveComponent;
  let fixture: ComponentFixture<ModelLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
