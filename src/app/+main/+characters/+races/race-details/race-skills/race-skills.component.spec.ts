import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSkillsComponent } from './race-skills.component';

describe('RaceSkillsComponent', () => {
  let component: RaceSkillsComponent;
  let fixture: ComponentFixture<RaceSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
