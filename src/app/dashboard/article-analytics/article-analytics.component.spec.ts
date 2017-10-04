import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAnalyticsComponent } from './article-analytics.component';

describe('ArticleAnalyticsComponent', () => {
  let component: ArticleAnalyticsComponent;
  let fixture: ComponentFixture<ArticleAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
