import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:44335/api";
constructor(private http: HttpClient) { }

  /*getAllApp(): Observable<any> {  
    return this.http.get(this.APIUrl);
  }*/

  addReview(val: any){
    return this.http.post(this.APIUrl+'/addReview', val);
  }

  getReview(val: any): Observable<any>{
    return this.http.get<any>(this.APIUrl+'/getReview?id='+val);
  }



}
