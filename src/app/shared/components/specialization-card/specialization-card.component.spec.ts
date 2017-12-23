import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationCardComponent } from './specialization-card.component';

describe('SpecializationCardComponent', () => {
  let component: SpecializationCardComponent;
  let fixture: ComponentFixture<SpecializationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
