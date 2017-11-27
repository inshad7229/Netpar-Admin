import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAnalyticsComponent } from './element-analytics.component';

describe('ElementAnalyticsComponent', () => {
  let component: ElementAnalyticsComponent;
  let fixture: ComponentFixture<ElementAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
