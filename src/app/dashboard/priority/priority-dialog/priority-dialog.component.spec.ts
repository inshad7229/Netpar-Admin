import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityDialogComponent } from './priority-dialog.component';

describe('PriorityDialogComponent', () => {
  let component: PriorityDialogComponent;
  let fixture: ComponentFixture<PriorityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
