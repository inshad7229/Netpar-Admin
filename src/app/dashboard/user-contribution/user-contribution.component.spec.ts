import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContributionComponent } from './user-contribution.component';

describe('UserContributionComponent', () => {
  let component: UserContributionComponent;
  let fixture: ComponentFixture<UserContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
