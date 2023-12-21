import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEntryIntroComponent } from './text-entry-intro.component';

describe('TextEntryIntroComponent', () => {
  let component: TextEntryIntroComponent;
  let fixture: ComponentFixture<TextEntryIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextEntryIntroComponent]
    });
    fixture = TestBed.createComponent(TextEntryIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
