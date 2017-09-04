import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUndeadBanesComponent } from './class-undead-banes.component';

describe('ClassUndeadBanesComponent', () => {
  let component: ClassUndeadBanesComponent;
  let fixture: ComponentFixture<ClassUndeadBanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassUndeadBanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassUndeadBanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
