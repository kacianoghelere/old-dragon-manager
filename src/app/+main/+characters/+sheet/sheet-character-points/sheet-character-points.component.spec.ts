import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterPointsComponent } from './sheet-character-points.component';

describe('SheetCharacterPointsComponent', () => {
  let component: SheetCharacterPointsComponent;
  let fixture: ComponentFixture<SheetCharacterPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
