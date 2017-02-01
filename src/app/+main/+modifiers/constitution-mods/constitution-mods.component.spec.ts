/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConstitutionModsComponent } from './constitution-mods.component';

describe('ConstitutionModsComponent', () => {
  let component: ConstitutionModsComponent;
  let fixture: ComponentFixture<ConstitutionModsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstitutionModsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstitutionModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
