import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPagesHomeComponent } from './campaign-pages-home.component';

describe('CampaignPagesHomeComponent', () => {
  let component: CampaignPagesHomeComponent;
  let fixture: ComponentFixture<CampaignPagesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignPagesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPagesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
