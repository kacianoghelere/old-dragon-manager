import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceTraitsComponent } from './race-traits.component';

describe('RaceTraitsComponent', () => {
  let component: RaceTraitsComponent;
  let fixture: ComponentFixture<RaceTraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceTraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
