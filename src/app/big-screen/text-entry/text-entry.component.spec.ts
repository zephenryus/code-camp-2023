import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEntryComponent } from './text-entry.component';

describe('TextEntryComponent', () => {
  let component: TextEntryComponent;
  let fixture: ComponentFixture<TextEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextEntryComponent]
    });
    fixture = TestBed.createComponent(TextEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
