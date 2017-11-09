import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCreateEditComponent } from './poll-create-edit.component';

describe('PollCreateEditComponent', () => {
  let component: PollCreateEditComponent;
  let fixture: ComponentFixture<PollCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
