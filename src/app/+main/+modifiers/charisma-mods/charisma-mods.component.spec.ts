/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharismaModsComponent } from './charisma-mods.component';

describe('CharismaModsComponent', () => {
  let component: CharismaModsComponent;
  let fixture: ComponentFixture<CharismaModsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharismaModsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharismaModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
