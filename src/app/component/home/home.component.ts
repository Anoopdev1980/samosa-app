import { Component, OnInit } from '@angular/core';
import { VarietyService } from '../services/variety.service'; 
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public radioModel: string = 'Middle';
  public checkModel: any = { left: false, middle: true, right: false };
  constructor(readonly variety: VarietyService) { }
  
  mainBannerOptions: OwlOptions = {
    // autoplayHoverPause: true,
    // loop: false,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    // dots: false,
    // navSpeed: 700,
    // nav: true,
    // navText: ["<img src='../../../../../assets/icons/left-arrow-carousel.svg'>","<img src='../../../../../assets/icons/right-arrow-carousel.svg'>"],
    // responsive: {
    //   0: {
    //     items: 1.6,
    //     nav: false,
    //     loop: true,
    //   },
    //   480: {
    //     items: 3,
    //     nav: false,
    //     loop: true,
    //   },
    //   767: {
    //     items: 3,
    //     nav: true,
    //     loop: false,
    //   },
    //   940: {
    //     items: 4,
    //     nav: true,
    //   }
    // },
    
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    // responsive: {
    //   0: {
    //     items: 1 
    //   },
    //   400: {
    //     items: 1
    //   },
    //   740: {
    //     items: 1
    //   },
    //   940: {
    //     items: 1
    //   }
    // },
  }
  
    
  carouselList = [
    {
      bannerImg: "./assets/banner_img/img_1.jpg",
      title: "Apple iPhone",
      description: "Explore iPhone, the world's most powerful personal device",
    },
    {
      bannerImg: "./assets/banner_img/img_3.jpg",
      title: "Never Settle - OnePlus",
      description:
        " OnePlus creates beautifully designed products with premium build quality & brings the best technology to users around the world",
    },
    {
      bannerImg: "./assets/banner_img/img_4.jpg",
      title: "Google Pixel",
      description: "Discover a better way to capture, store, and see the world",
    },
  ];

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }

  images = [
    {
      text: "Everfresh Flowers",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: "Festive Deer",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: "Morning Greens",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
      text: "Bunch of Love",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    },
    {
      text: "Blue Clear",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
    },
    {
      text: "Evening Clouds",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
    },
    {
      text: "Fontains in Shadows",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
    },
    {
      text: "Kites in the Sky",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
    },
    {
      text: "Sun Streak",
      image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
    }
  ]
 
  ngOnInit(): void {
    this.variety.getAllVarity().subscribe(res => {
      console.log(res, '==>>');
    });
  }

}
