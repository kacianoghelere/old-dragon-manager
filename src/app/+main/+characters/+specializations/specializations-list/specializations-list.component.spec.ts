import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationsListComponent } from './specializations-list.component';

describe('SpecializationsListComponent', () => {
  let component: SpecializationsListComponent;
  let fixture: ComponentFixture<SpecializationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
