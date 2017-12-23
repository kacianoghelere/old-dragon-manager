import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterProtectionComponent } from './sheet-character-protection.component';

describe('SheetCharacterProtectionComponent', () => {
  let component: SheetCharacterProtectionComponent;
  let fixture: ComponentFixture<SheetCharacterProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterProtectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
