import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAnalyticsComponent } from './section-analytics.component';

describe('SectionAnalyticsComponent', () => {
  let component: SectionAnalyticsComponent;
  let fixture: ComponentFixture<SectionAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
