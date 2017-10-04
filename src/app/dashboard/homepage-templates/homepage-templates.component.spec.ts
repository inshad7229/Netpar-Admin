import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTemplatesComponent } from './homepage-templates.component';

describe('HomepageTemplatesComponent', () => {
  let component: HomepageTemplatesComponent;
  let fixture: ComponentFixture<HomepageTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
