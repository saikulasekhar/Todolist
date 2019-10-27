import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { ScoreCardModule } from './score-card/score-card.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ScoreCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
