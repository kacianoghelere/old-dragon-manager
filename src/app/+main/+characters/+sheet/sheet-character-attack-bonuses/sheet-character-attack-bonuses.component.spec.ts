import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterAttackBonusesComponent } from './sheet-character-attack-bonuses.component';

describe('SheetCharacterAttackBonusesComponent', () => {
  let component: SheetCharacterAttackBonusesComponent;
  let fixture: ComponentFixture<SheetCharacterAttackBonusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterAttackBonusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterAttackBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
