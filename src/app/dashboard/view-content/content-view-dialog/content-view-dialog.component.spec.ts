import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewDialogComponent } from './content-view-dialog.component';

describe('ContentViewDialogComponent', () => {
  let component: ContentViewDialogComponent;
  let fixture: ComponentFixture<ContentViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
