import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared/shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [SharedComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  exports:[NavbarComponent, FooterComponent]
})
export class SharedModule { }
