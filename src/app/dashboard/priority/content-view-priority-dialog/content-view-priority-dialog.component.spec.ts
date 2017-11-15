import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewPriorityDialogComponent } from './content-view-priority-dialog.component';

describe('ContentViewPriorityDialogComponent', () => {
  let component: ContentViewPriorityDialogComponent;
  let fixture: ComponentFixture<ContentViewPriorityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentViewPriorityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentViewPriorityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
