import { Component, OnInit } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CartService, Todo } from '../../../shared/cart/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [FaConfig],
})
export class HeaderComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  faUser = faUser;
  faCartPlus = faCartPlus;
  isactiveMiniCart: boolean = false;
  public carts: any = [];
  cartTotal: Number = 0;
  constructor(readonly cartService: CartService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.cartService.data.subscribe(response => {
      this.carts = response; 
      if(this.carts.length>=1)
      {
        this.isactiveMiniCart=true;
      }
      else{
        this.isactiveMiniCart=false;
      }
    });
  }
  totalAmount() {
    let sum: number = 0;
    for (let i = 0; i < this.carts.length; i++) {
      sum = sum + Number(this.carts[i].price);
    }
    this.cartTotal = sum;
  }

  removeFromCart(varietyID: any) {
    this.carts.forEach((element: any, index: any) => {
      if (varietyID == index) { this.carts.splice(index, 1); }
    });
    this.totalAmount();
  }

  showMinicart(): void {
    this.isactiveMiniCart = !this.isactiveMiniCart;
  }
}
