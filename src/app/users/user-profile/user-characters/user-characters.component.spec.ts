import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCharactersComponent } from './user-characters.component';

describe('UserCharactersComponent', () => {
  let component: UserCharactersComponent;
  let fixture: ComponentFixture<UserCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
