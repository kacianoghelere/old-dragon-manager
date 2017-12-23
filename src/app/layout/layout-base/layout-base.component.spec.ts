import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBaseComponent } from './layout-base.component';

describe('LayoutBaseComponent', () => {
  let component: LayoutBaseComponent;
  let fixture: ComponentFixture<LayoutBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
