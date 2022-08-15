import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';  
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
//import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule ,
    FontAwesomeModule,
    SharedModule,
  ],
  exports:[  
    HeaderComponent,
    FooterComponent]
})
export class LayoutModule { 
  
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar);
  }
}
