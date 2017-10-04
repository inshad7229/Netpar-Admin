import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAnalyticsComponent } from './template-analytics.component';

describe('TemplateAnalyticsComponent', () => {
  let component: TemplateAnalyticsComponent;
  let fixture: ComponentFixture<TemplateAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
