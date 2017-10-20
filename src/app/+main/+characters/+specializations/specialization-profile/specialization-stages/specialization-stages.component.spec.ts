import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationStagesComponent } from './specialization-stages.component';

describe('SpecializationStagesComponent', () => {
  let component: SpecializationStagesComponent;
  let fixture: ComponentFixture<SpecializationStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
