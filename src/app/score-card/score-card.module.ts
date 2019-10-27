import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ScoreCardRoutingModule } from './score-card-routing.module';
import { ScoreCardComponent } from './score-card/score-card.component';
import { ScoreCardCalculatorComponent } from './score-card-calculator/score-card-calculator.component';

@NgModule({
  declarations: [ScoreCardComponent, ScoreCardCalculatorComponent],
  imports: [
    CommonModule,
    ScoreCardRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class ScoreCardModule { }
