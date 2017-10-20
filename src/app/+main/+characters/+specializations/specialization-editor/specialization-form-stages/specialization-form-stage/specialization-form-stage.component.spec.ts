import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationFormStageComponent } from './specialization-form-stage.component';

describe('SpecializationFormStageComponent', () => {
  let component: SpecializationFormStageComponent;
  let fixture: ComponentFixture<SpecializationFormStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationFormStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationFormStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
