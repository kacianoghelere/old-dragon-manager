import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesListComponent } from './races-list.component';

describe('RacesListComponent', () => {
  let component: RacesListComponent;
  let fixture: ComponentFixture<RacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
