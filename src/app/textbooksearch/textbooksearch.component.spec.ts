import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbooksearchComponent } from './textbooksearch.component';

describe('TextbooksearchComponent', () => {
  let component: TextbooksearchComponent;
  let fixture: ComponentFixture<TextbooksearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbooksearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbooksearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
