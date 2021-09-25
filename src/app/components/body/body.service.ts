import {  Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from "../models/order";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})
export class BodyService {
    constructor(private http: HttpClient) { }

  getOrderList() : Observable<Object[]> {
   return this.http.get<Object[]>("http://localhost:8090/getOrderList");
  }

  getTotalRegularBill() : Observable<Object> {
   return this.http.get<Object>("http://localhost:8090/getTotalRegularBill");
  }

  getTotalDiscountedBill() : Observable<Object> {
   return this.http.get<Object>("http://localhost:8090/getTotalDiscountedBill");
  }

  addOrder(data : Object): Observable<Object>{
    return this.http.post<Object>("http://localhost:8090/addOrder",data,httpOptions);
  }

  udateOrder(data : Object): Observable<Object>{
    return this.http.post<Object>("http://localhost:8090/updateOrder",data,httpOptions);
  }

  deleteOrder(data : Object) {
    return this.http.post<Object>("http://localhost:8090/deleteOrder",data,httpOptions);
  }
}