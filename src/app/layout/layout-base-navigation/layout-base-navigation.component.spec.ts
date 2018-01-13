import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBaseNavigationComponent } from './layout-base-navigation.component';

describe('LayoutBaseNavigationComponent', () => {
  let component: LayoutBaseNavigationComponent;
  let fixture: ComponentFixture<LayoutBaseNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutBaseNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBaseNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
