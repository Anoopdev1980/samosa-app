import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Todo {
  varietyID: any;
  varietyname: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private dataSource: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  data: Observable<[]> = this.dataSource.asObservable();
 
  constructor() { }
 
  sendData(data: any) {
    this.dataSource.next(data);
  }

  remove(id: number) {
    
  }

}
