import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGameComponent } from './join-game.component';

describe('JoinGameComponent', () => {
  let component: JoinGameComponent;
  let fixture: ComponentFixture<JoinGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinGameComponent]
    });
    fixture = TestBed.createComponent(JoinGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
