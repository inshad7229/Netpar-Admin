import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTemplatesComponent } from './section-templates.component';

describe('SectionTemplatesComponent', () => {
  let component: SectionTemplatesComponent;
  let fixture: ComponentFixture<SectionTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
