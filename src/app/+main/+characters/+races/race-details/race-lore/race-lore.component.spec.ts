import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceLoreComponent } from './race-lore.component';

describe('RaceLoreComponent', () => {
  let component: RaceLoreComponent;
  let fixture: ComponentFixture<RaceLoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceLoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
