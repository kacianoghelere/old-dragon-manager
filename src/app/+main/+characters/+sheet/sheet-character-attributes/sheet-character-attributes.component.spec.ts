import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterAttributesComponent } from './sheet-character-attributes.component';

describe('SheetCharacterAttributesComponent', () => {
  let component: SheetCharacterAttributesComponent;
  let fixture: ComponentFixture<SheetCharacterAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
