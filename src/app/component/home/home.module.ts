import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
//import { ButtonsModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { PopularProductComponent } from './popular-product/popular-product.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainCarouselComponent,
    ProductCarouselComponent,
    PopularProductComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule,
    OwlModule,
    CarouselModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
