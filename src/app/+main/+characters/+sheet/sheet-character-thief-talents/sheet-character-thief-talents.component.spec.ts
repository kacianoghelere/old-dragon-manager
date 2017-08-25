import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterThiefTalentsComponent } from './sheet-character-thief-talents.component';

describe('SheetCharacterThiefTalentsComponent', () => {
  let component: SheetCharacterThiefTalentsComponent;
  let fixture: ComponentFixture<SheetCharacterThiefTalentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterThiefTalentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterThiefTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
