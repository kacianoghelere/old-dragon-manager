import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesHomeComponent } from './classes-home.component';

describe('ClassesHomeComponent', () => {
  let component: ClassesHomeComponent;
  let fixture: ComponentFixture<ClassesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
