import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersHomeComponent } from './characters-home.component';

describe('CharactersHomeComponent', () => {
  let component: CharactersHomeComponent;
  let fixture: ComponentFixture<CharactersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
