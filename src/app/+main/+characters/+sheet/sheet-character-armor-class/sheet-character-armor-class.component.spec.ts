import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterArmorClassComponent } from './sheet-character-armor-class.component';

describe('SheetCharacterArmorClassComponent', () => {
  let component: SheetCharacterArmorClassComponent;
  let fixture: ComponentFixture<SheetCharacterArmorClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterArmorClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterArmorClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
