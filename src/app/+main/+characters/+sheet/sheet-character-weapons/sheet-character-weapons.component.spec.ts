import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterWeaponsComponent } from './sheet-character-weapons.component';

describe('SheetCharacterWeaponsComponent', () => {
  let component: SheetCharacterWeaponsComponent;
  let fixture: ComponentFixture<SheetCharacterWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
