import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mainBannerOptions: OwlOptions = {
    autoplayHoverPause: true,
     navText: ["<img src='../../../../../assets/icons/left-arrow-carousel.svg'>","<img src='../../../../../assets/icons/right-arrow-carousel.svg'>"],
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1.2
      },
      740: {
        items: 1.2
      },
      940: {
        items: 1.2
      }
    },
  }
  slides = [
    {id: "1", img: "../../../../../assets/images/banner_01.png", imgm: "../../../../../assets/images/banner_m1.png"},
    {id: "2", img: "../../../../../assets/images/banner_02.png", imgm: "../../../../../assets/images/banner_m2.png"},
    {id: "3", img: "../../../../../assets/images/banner_03.png", imgm: "../../../../../assets/images/banner_m3.png"},
  ];

}
