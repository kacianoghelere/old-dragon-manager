import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationEditorComponent } from './specialization-editor.component';

describe('SpecializationEditorComponent', () => {
  let component: SpecializationEditorComponent;
  let fixture: ComponentFixture<SpecializationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
