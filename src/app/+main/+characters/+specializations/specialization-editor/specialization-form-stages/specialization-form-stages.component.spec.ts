import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationFormStagesComponent } from './specialization-form-stages.component';

describe('SpecializationFormStagesComponent', () => {
  let component: SpecializationFormStagesComponent;
  let fixture: ComponentFixture<SpecializationFormStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationFormStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationFormStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
