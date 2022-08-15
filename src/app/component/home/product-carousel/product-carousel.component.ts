import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options: OwlOptions = {
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
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  product = [
    {
      "_id": "62ea645f1e4e5e061885192c",
      "varietyID": "1",
      "varietyname": "malai samosa",
      "description": "filled with malai, paneer & pyaj",
      "url":"/",
      "createdAt": "2022-08-03T12:04:47.318Z",
      "updatedAt": "2022-08-05T15:13:58.882Z",
      "__v": 0,
      "samosadetails": [
          {
              "_id": "62eb7a804cb4d94b146232e4",
              "varietyID": "1",
              "detailsID": "1",
              "shortdescription": "anoop1",
              "longdescription": "description anoop1",
              "mainimage": "description anoop1",
              "otherimages": "description anoop1",
              "createdAt": "2022-08-04T07:51:28.102Z",
              "updatedAt": "2022-08-04T07:51:28.102Z",
              "__v": 0
          }
      ]
  },
  {
      "_id": "62ea649a1e4e5e061885192d",
      "varietyID": "2",
      "varietyname": "paneer samosa",
      "description": "filled with paneer & aalo",
      "url":"/",
      "createdAt": "2022-08-03T12:05:46.328Z",
      "updatedAt": "2022-08-05T15:15:30.013Z",
      "__v": 0,
      "samosadetails": [
          {
              "_id": "62eb7aa04cb4d94b146232e5",
              "varietyID": "2",
              "detailsID": "2",
              "shortdescription": "anoop2",
              "longdescription": "description anoop2",
              "mainimage": "description anoop2",
              "otherimages": "description anoop2",
              "createdAt": "2022-08-04T07:52:00.861Z",
              "updatedAt": "2022-08-04T07:52:00.861Z",
              "__v": 0
          },
          {
              "_id": "62ed34640f9f6fa3b43d53d1",
              "varietyID": "2",
              "detailsID": "2",
              "shortdescription": "anoop2",
              "longdescription": "description anoop2",
              "mainimage": "description anoop2",
              "otherimages": "description anoop2",
              "createdAt": "2022-08-05T15:16:52.432Z",
              "updatedAt": "2022-08-05T15:16:52.432Z",
              "__v": 0
          }
      ]
  },
  {
      "_id": "62ea64f81e4e5e061885192e",
      "varietyID": "3",
      "varietyname": "aaloo samosa - plane",
      "description": "filled with aaloo , matar & paneer",
      "url":"/",
      "createdAt": "2022-08-03T12:07:20.402Z",
      "updatedAt": "2022-08-05T15:16:36.426Z",
      "__v": 0,
      "samosadetails": [
          {
              "_id": "62eb72a773b0c8508c798f40",
              "varietyID": "3",
              "detailsID": "5",
              "shortdescription": "anoop33",
              "longdescription": "description anoop3",
              "mainimage": "description anoop3",
              "otherimages": "description anoop3",
              "createdAt": "2022-08-04T07:17:59.894Z",
              "updatedAt": "2022-08-04T07:17:59.894Z",
              "__v": 0
          }
      ]
  }
]
  //   {
  //     id: "1", 
  //     img: "../../../../../assets/images/banner_01.png", 
  //   imgm: "../../../../../assets/images/banner_m1.png"
  // },

  //   {id: "2", img: "../../../../../assets/images/banner_02.png", imgm: "../../../../../assets/images/banner_m2.png"},
  //   {id: "3", img: "../../../../../assets/images/banner_03.png", imgm: "../../../../../assets/images/banner_m3.png"}, 
  // ];
  
}
