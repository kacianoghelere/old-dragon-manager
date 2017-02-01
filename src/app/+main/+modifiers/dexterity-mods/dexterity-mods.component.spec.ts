/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DexterityModsComponent } from './dexterity-mods.component';

describe('DexterityModsComponent', () => {
  let component: DexterityModsComponent;
  let fixture: ComponentFixture<DexterityModsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexterityModsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexterityModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
