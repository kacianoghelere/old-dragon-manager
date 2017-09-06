import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceAttributesComponent } from './race-attributes.component';

describe('RaceAttributesComponent', () => {
  let component: RaceAttributesComponent;
  let fixture: ComponentFixture<RaceAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
