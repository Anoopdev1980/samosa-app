import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/cart/cart.service';
import { VarietyService } from '../../services/variety.service';

@Component({
  selector: 'app-popular-product',
  templateUrl: './popular-product.component.html',
  styleUrls: ['./popular-product.component.scss']
})
export class PopularProductComponent implements OnInit {

  productList: any = [];
  public carts:any[]=new Array();
  public products = [];
  
  constructor(readonly variety: VarietyService, readonly cartService:CartService) { 
   }

  ngOnInit(): void {
    this.allSamosaList();
  }

  allSamosaList() {
    this.variety.getAllSamosaDetails().subscribe(res => {
      this.productList = res; 
    });
  }
  addToCart(prod:any,i:number){   
    if(this.carts.length>=1)
    {
      const index = this.carts.findIndex(object => {
        return object.varietyID === prod.varietyID;
      }); 
      if (index !== -1) {
        let qty;
      
        
        qty=this.carts[index].qty+1;
        console.log(qty*this.carts[index].price,'=====<><><');
        this.carts[index].qty = qty;
        this.carts[index].subtotal=qty*this.carts[index].price;
      }
      else
      {
        let item={
          "index":i,
          "varietyID" : prod.varietyID,
          "varietyname" : prod.varietyname,
          "price": prod.price[0].offer_price_formated,
          "thumbnail":prod.samosadetails[0].thumbnail,
          "qty":1,
          "subtotal":prod.price[0].offer_price_formated
        };
        this.carts.push(item);
        this.cartService.sendData(this.carts);
      } 
    }
    else
    {
      console.log('new items'); 
      let item={
        "index":i,
        "varietyID" : prod.varietyID,
        "varietyname" : prod.varietyname,
        "price": prod.price[0].offer_price_formated,
        "thumbnail":prod.samosadetails[0].thumbnail,
        "qty":1,
        "subtotal":prod.price[0].offer_price_formated
      };
      this.carts.push(item);
      this.cartService.sendData(this.carts);
    }    
  }

  options: OwlOptions = {
    autoplayHoverPause: true,
    navText: ["<img src='../../../../../assets/icons/left-arrow-carousel.svg'>", "<img src='../../../../../assets/icons/right-arrow-carousel.svg'>"],
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
      "url": "/",
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
          "thumbnail": "thumb_prod_1.png",
          "mainimage": "description anoop1",
          "otherimages": "description anoop1",
          "createdAt": "2022-08-04T07:51:28.102Z",
          "updatedAt": "2022-08-04T07:51:28.102Z",
          "__v": 0
        }
      ],
      "price": [
        {
          "_id": "62eb7a804cb4d94b14623223",
          "varietyID": "1",
          "detailsID": "1",
          "offer_price": 18,
          "price": 35,
          "offer_price_formated": 18,
          "price_formated": 35,
        }
      ]
    },
    {
      "_id": "62ea649a1e4e5e061885192d",
      "varietyID": "2",
      "varietyname": "paneer samosa",
      "description": "filled with paneer & aalo",
      "url": "/",
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
          "thumbnail": "thumb_prod_2.png",
          "mainimage": "description anoop2",
          "otherimages": "description anoop2",
          "createdAt": "2022-08-04T07:52:00.861Z",
          "updatedAt": "2022-08-04T07:52:00.861Z",
          "__v": 0
        }
      ],
      "price": [
        {
          "_id": "62eb7a804cb4d94b14623223",
          "varietyID": "1",
          "detailsID": "1",
          "price": 30,
          "offer_price": 15,
          "price_formated": 30,
          "offer_price_formated": 15,
        }
      ]
    },
    {
      "_id": "62ea64f81e4e5e061885192e",
      "varietyID": "3",
      "varietyname": "aaloo samosa - plane",
      "description": "filled with aaloo , matar & paneer",
      "url": "/",
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
          "thumbnail": "thumb_prod_3.png",
          "mainimage": "description anoop3",
          "otherimages": "description anoop3",
          "createdAt": "2022-08-04T07:17:59.894Z",
          "updatedAt": "2022-08-04T07:17:59.894Z",
          "__v": 0
        }
      ],
      "price": [
        {
          "_id": "62eb7a804cb4d94b14623223",
          "varietyID": "1",
          "detailsID": "1",
          "price": 15,
          "offer_price": 8,
          "price_formated": 15,
          "offer_price_formated": 8,
        }
      ]
    }
  ]
}
