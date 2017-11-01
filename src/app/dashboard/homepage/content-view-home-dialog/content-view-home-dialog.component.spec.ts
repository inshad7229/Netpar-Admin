import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentViewHomeDialogComponent } from './content-view-home-dialog.component';

describe('ContentViewHomeDialogComponent', () => {
  let component: ContentViewHomeDialogComponent;
  let fixture: ComponentFixture<ContentViewHomeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentViewHomeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentViewHomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
