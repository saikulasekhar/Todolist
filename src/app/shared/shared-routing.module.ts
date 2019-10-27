import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
{
    path: 'shared',
    component: SharedComponent,
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'navbar',  component: NavbarComponent, runGuardsAndResolvers: 'always'},
      { path: 'footer',  component: FooterComponent, runGuardsAndResolvers: 'always'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
