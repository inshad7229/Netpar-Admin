import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ImageResizerComponent } from './imageResizer.component';

describe('ImageResizerComponent', () => {
  let component: ImageResizerComponent;
  let fixture: ComponentFixture<ImageResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
