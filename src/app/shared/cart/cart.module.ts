import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    CartComponent,
    MiniCartComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    CartComponent,
    MiniCartComponent
  ]
})
export class CartModule { }
