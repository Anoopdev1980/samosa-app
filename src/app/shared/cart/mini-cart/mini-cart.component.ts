import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { faBellSlash, faTrashAlt, faRupeeSign, faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {
  [x: string]: any;
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
    let localUserID = localStorage.getItem('userID');
    this.cartService.getCartByUser(localUserID).subscribe(res => {
      console.log(res);

    });
    this.cartService.data.subscribe(response => {
      this.carts = response;
      this.totalAmount();
    });
  }
  totalAmount() {
    let sum: number = 0;
    for (let i = 0; i < this.carts.length; i++) {
      sum = sum + Number(this.carts[i].subtotal);
    }
    this.cartTotal = sum;
  }

  removeFromCart(varietyID: any) {
    this.carts.forEach((element: any, index: any) => {
      if (varietyID == index) {
        this.carts.splice(index, 1);

        this.cartService.getIDbycartID(element.cartID).subscribe(res => {
          console.log(res,'details');
          let id=res[0]._id;
          this.cartService.removeCart(id).subscribe(res1 => {
            console.log(res1);

           });
        });
        // this.cartService.removeCart(varietyID).subscribe(res => {
        // });
      }
    });

    this.cartService.sendData(this.carts);
    this.totalAmount();
  }
  checkOut(cart:any){

    this.router.navigate(['/checkout']);
  }

}
