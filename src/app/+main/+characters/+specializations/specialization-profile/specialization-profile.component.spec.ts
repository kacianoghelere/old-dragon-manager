import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationProfileComponent } from './specialization-profile.component';

describe('SpecializationProfileComponent', () => {
  let component: SpecializationProfileComponent;
  let fixture: ComponentFixture<SpecializationProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
