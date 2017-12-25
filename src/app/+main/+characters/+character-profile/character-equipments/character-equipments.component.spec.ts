import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEquipmentsComponent } from './character-equipments.component';

describe('CharacterEquipmentsComponent', () => {
  let component: CharacterEquipmentsComponent;
  let fixture: ComponentFixture<CharacterEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterEquipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
