import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ScoreCardModule } from './score-card/score-card.module';
const routes: Routes = [
  { path: '',   redirectTo: '/score-card/calculator', pathMatch: 'full' , runGuardsAndResolvers: 'always'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true,
    onSameUrlNavigation: 'reload',
    enableTracing: false
  }),SharedModule,ScoreCardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
