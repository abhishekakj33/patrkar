import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterContentsComponent } from './filter-contents.component';

describe('FilterContentsComponent', () => {
  let component: FilterContentsComponent;
  let fixture: ComponentFixture<FilterContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
