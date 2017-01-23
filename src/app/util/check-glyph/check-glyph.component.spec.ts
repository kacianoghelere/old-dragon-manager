/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckGlyphComponent } from './check-glyph.component';

describe('CheckGlyphComponent', () => {
  let component: CheckGlyphComponent;
  let fixture: ComponentFixture<CheckGlyphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckGlyphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
