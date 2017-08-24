import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterInfoComponent } from './sheet-character-info.component';

describe('SheetCharacterInfoComponent', () => {
  let component: SheetCharacterInfoComponent;
  let fixture: ComponentFixture<SheetCharacterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
