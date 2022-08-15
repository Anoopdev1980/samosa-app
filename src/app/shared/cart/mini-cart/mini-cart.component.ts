import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { faBellSlash, faTrashAlt, faRupeeSign, faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit { 
  isactiveMiniCart: boolean = false;
  public carts: any = [];
  cartTotal: Number = 0;
  faTrash = faTrashAlt;
  faInr = faRupeeSign;
  constructor(readonly cartService: CartService) { 
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.cartService.data.subscribe(response => {
      this.carts = response;
      this.totalAmount();
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
    this.cartService.sendData(this.carts);
    this.totalAmount();
  }
  checkOut(cart:any){

  }

}
