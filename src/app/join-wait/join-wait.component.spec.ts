import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinWaitComponent } from './join-wait.component';

describe('JoinWaitComponent', () => {
  let component: JoinWaitComponent;
  let fixture: ComponentFixture<JoinWaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinWaitComponent]
    });
    fixture = TestBed.createComponent(JoinWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
