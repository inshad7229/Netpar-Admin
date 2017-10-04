import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTemplatesComponent } from './category-templates.component';

describe('CategoryTemplatesComponent', () => {
  let component: CategoryTemplatesComponent;
  let fixture: ComponentFixture<CategoryTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
