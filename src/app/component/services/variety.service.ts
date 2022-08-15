import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { allApis } from '../../../apiconfig';
@Injectable({
  providedIn: 'root'
})
export class VarietyService {
allvariety:string= allApis.variety;
allSamosa:string= allApis.allSamosa;
  constructor(private http: HttpClient) { }

  getAllVarity(): Observable<any>{
    const url = this.allvariety;  
    return this.http.get(url).pipe(catchError(this.errorHander.bind(this))); 
  }

  getAllSamosaDetails(): Observable<any>{
    const url = this.allSamosa;  
    return this.http.get(url).pipe(catchError(this.errorHander.bind(this))); 
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
