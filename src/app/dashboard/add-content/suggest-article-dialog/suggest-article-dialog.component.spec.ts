import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestArticleDialogComponent } from './suggest-article-dialog.component';

describe('SuggestArticleDialogComponent', () => {
  let component: SuggestArticleDialogComponent;
  let fixture: ComponentFixture<SuggestArticleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestArticleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
