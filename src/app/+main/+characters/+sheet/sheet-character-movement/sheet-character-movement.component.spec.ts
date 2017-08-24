import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetCharacterMovementComponent } from './sheet-character-movement.component';

describe('SheetCharacterMovementComponent', () => {
  let component: SheetCharacterMovementComponent;
  let fixture: ComponentFixture<SheetCharacterMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetCharacterMovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetCharacterMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
