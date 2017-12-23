import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSpecializationsComponent } from './class-specializations.component';

describe('ClassSpecializationsComponent', () => {
  let component: ClassSpecializationsComponent;
  let fixture: ComponentFixture<ClassSpecializationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSpecializationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
