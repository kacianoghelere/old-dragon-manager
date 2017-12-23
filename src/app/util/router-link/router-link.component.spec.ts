/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterLinkComponent } from './router-link.component';

describe('RouterLinkComponent', () => {
  let component: RouterLinkComponent;
  let fixture: ComponentFixture<RouterLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
