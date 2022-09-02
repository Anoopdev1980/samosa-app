import { Component, OnInit } from '@angular/core';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBellSlash, faHandPaper, faUser, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { CartService, Todo } from '../../../shared/cart/cart.service';
import { Observable } from 'rxjs';  
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider,  SocialUser, } from "angularx-social-login";
import { Router } from '@angular/router';

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
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  constructor(readonly cartService: CartService,private authService: SocialAuthService,
    private socialAuthService: SocialAuthService, private router: Router ) { }

  ngOnInit(): void {
    this.getData();
    this.cartService.currentFlag.subscribe(res=>{
      console.log(res,'===>>'); 
      this.isactiveMiniCart=res;
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
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
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  login():void{
    this.isactiveMiniCart=false;
    this.router.navigate(['login']);
  }
  signOut(): void {
    this.authService.signOut();
  }
}
