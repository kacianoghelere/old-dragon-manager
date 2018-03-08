import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEditorAttributesComponent } from './character-editor-attributes.component';

describe('CharacterEditorAttributesComponent', () => {
  let component: CharacterEditorAttributesComponent;
  let fixture: ComponentFixture<CharacterEditorAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterEditorAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditorAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
