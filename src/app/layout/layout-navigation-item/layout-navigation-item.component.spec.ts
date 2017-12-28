import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNavigationItemComponent } from './layout-navigation-item.component';

describe('LayoutNavigationItemComponent', () => {
  let component: LayoutNavigationItemComponent;
  let fixture: ComponentFixture<LayoutNavigationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNavigationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
