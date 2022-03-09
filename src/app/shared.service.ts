import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:44384/api";
constructor(public http: HttpClient) { }

  getAllApp(): Observable<any> {
    return this.http.get(this.APIUrl);
  }
}
