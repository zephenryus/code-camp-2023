import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeSelectionComponent } from './meme-selection.component';

describe('MemeSelectionComponent', () => {
  let component: MemeSelectionComponent;
  let fixture: ComponentFixture<MemeSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemeSelectionComponent]
    });
    fixture = TestBed.createComponent(MemeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
