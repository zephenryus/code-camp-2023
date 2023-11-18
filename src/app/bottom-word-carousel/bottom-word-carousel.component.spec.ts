import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomWordCarouselComponent } from './bottom-word-carousel.component';

describe('BottomWordCarouselComponent', () => {
  let component: BottomWordCarouselComponent;
  let fixture: ComponentFixture<BottomWordCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomWordCarouselComponent]
    });
    fixture = TestBed.createComponent(BottomWordCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
