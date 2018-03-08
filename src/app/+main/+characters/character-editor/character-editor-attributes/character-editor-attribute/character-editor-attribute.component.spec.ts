import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEditorAttributeComponent } from './character-editor-attribute.component';

describe('CharacterEditorAttributeComponent', () => {
  let component: CharacterEditorAttributeComponent;
  let fixture: ComponentFixture<CharacterEditorAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterEditorAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditorAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
