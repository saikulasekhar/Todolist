import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ScoreCardComponent } from './score-card/score-card.component';
import { ScoreCardCalculatorComponent } from './score-card-calculator/score-card-calculator.component';

const calculatorRoutes: Routes = [
  {
    path: "score-card",
    component: ScoreCardComponent,
    runGuardsAndResolvers: "always",
    children:[
      {path: 'calculator',component: ScoreCardCalculatorComponent, runGuardsAndResolvers: "always"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(calculatorRoutes,
    {
    useHash: true,
    onSameUrlNavigation: 'reload',
    enableTracing: false
  }
  )],
  exports: [RouterModule]
})
export class ScoreCardRoutingModule { }
