import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownInstructionsComponent } from './markdown-instructions.component';

describe('MarkdownInstructionsComponent', () => {
  let component: MarkdownInstructionsComponent;
  let fixture: ComponentFixture<MarkdownInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
