import {  Injectable} from '@angular/core';
import { ApiService } from '../apiService.component';
import { NgEventBusWrapper } from '../ngEventBusWrapper.component';

@Injectable({
  providedIn: 'root',
})
export class BodyService extends ApiService {

  getClerk(responseCatcher = (response : any) => {}) {
    this.doSubmitGet("getClerk", {}, responseCatcher);
  }

  getOrderList(responseCatcher = (response : any) => {}) {
    this.doSubmitGet("getOrderList", {}, responseCatcher);
  }

  getTotalRegularBill(responseCatcher = (response : any) => {}) {
   this.doSubmitGet("getTotalRegularBill", {}, responseCatcher);
  }

  getTotalDiscountedBill(responseCatcher = (response : any) => {}) {
   return this.doSubmitGet("getTotalDiscountedBill", {}, responseCatcher);
  }

  addOrder(data : Object, responseCatcher = (response : any) => {}, errorCatcher = (response : any) => {}) {
    return this.doSubmitPost("addOrder", data, responseCatcher, errorCatcher);
  }

  udateOrder(data : Object, responseCatcher = (response : any) => {}, errorCatcher = (response : any) => {}) {
    return this.doSubmitPost("updateOrder", data, responseCatcher, errorCatcher);
  }

  deleteOrder(data : Object, responseCatcher = (response : any) => {}, errorCatcher = (response : any) => {}) {
    return this.doSubmitPost("deleteOrder", data, responseCatcher, errorCatcher);
  }
}