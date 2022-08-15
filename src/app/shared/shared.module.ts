import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { OwlModule } from "ngx-owl-carousel";
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from './cart/cart.module'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    OwlModule,
    CartModule 
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    OwlModule,
    CartModule 
  ]
})
export class SharedModule { }
