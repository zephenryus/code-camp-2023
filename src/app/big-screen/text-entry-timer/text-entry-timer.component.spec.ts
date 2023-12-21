import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEntryTimerComponent } from './text-entry-timer.component';

describe('TextEntryTimerComponent', () => {
  let component: TextEntryTimerComponent;
  let fixture: ComponentFixture<TextEntryTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextEntryTimerComponent]
    });
    fixture = TestBed.createComponent(TextEntryTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
