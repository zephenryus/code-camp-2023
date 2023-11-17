import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPoolComponent } from './text-pool.component';

describe('TextPoolComponent', () => {
  let component: TextPoolComponent;
  let fixture: ComponentFixture<TextPoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextPoolComponent]
    });
    fixture = TestBed.createComponent(TextPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
