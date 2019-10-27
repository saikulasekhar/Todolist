import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardCalculatorComponent } from './score-card-calculator.component';

describe('ScoreCardCalculatorComponent', () => {
  let component: ScoreCardCalculatorComponent;
  let fixture: ComponentFixture<ScoreCardCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreCardCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
