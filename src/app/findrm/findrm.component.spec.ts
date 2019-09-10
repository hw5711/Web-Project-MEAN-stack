import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindrmComponent } from './findrm.component';

describe('FindrmComponent', () => {
  let component: FindrmComponent;
  let fixture: ComponentFixture<FindrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
