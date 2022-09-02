import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';  
import { HttpClient } from '@angular/common/http';  
import { catchError } from 'rxjs/operators';
import { allApis } from '../../../apiconfig'; 
export interface Todo {
  varietyID: any;
  varietyname: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addtocart:string= allApis.addtocart;
  cartbycartid:string=allApis.getcartbycartId;
  removecart:string= allApis.removecart;
  userCarts:string=allApis.userCarts;

  private isActiveMinicartPopup = new BehaviorSubject(false);
  currentFlag = this.isActiveMinicartPopup.asObservable();

  private  = new Subject<boolean>();

  private dataSource: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  data: Observable<[]> = this.dataSource.asObservable(); 
  constructor(private http: HttpClient,) { }
 
  sendData(cart: any) {  
    this.dataSource.next(cart);  
  } 

  updateFlag(isActive: boolean) {
    this.isActiveMinicartPopup.next(isActive);
    }
     

  addToCart(cart: any): Observable<any> {
    const url = this.addtocart; 
    return  this.http.post(url,cart).pipe(catchError(this.errorHander.bind(this))); 
  }
  getCartByUser(userID:any){
    const url = this.userCarts+'/'+userID;  
    return  this.http.get(url).pipe(catchError(this.errorHander.bind(this))); 
  }
  getIDbycartID(cartID:number){
    const url = this.cartbycartid+'/'+cartID;  
    return  this.http.get(url).pipe(catchError(this.errorHander.bind(this))); 
  }

  removeCart(cartID: number): Observable<any> {
    const url = this.removecart+'/'+cartID;  
    return  this.http.delete(url).pipe(catchError(this.errorHander.bind(this))); 
  }
  remove(id: number) {
    
  }
  private errorHander(response:any){
    const error=response.error;
    const keys=Object.keys(error);
    const key=keys[0];
    let message=error[key];
    if(response.status===401)
    {
      
    }
    if(error[key] instanceof Array)
    {
      message=error[key][0];
    }
    if(key ==='isTrusted')
    {
      
    }
    else
    {
      
    }
    return throwError({message:message,error});
  }
}
