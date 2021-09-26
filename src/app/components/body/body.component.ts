import { Component, OnInit } from '@angular/core';
import { BodyService } from './body.service';
import { Order } from "../models/order";
import { NgEventBusWrapper } from '../ngEventBusWrapper.component';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    orderList : Order[] = [];
    totalRegularBill : number = 0;
    totalDiscountedBill : number = 0;

    constructor(private bodyService : BodyService, private ngEventBusWrapper : NgEventBusWrapper) {
    }

    ngOnInit() : void {
      this.refreshList();
    }

    refreshList() : void {

      this.bodyService.getOrderList((data : any) => {
        this.orderList = data;
      });

      this.bodyService.getTotalRegularBill((data : any) => {
        this.totalRegularBill = data.totalBill;
      });

      this.bodyService.getTotalDiscountedBill((data : any) => {
        this.totalDiscountedBill = data.totalBill;
      });
    }

    submitListener(data : Object) : void {
      let type = (data as any).type;
      if ( type === "UPDATE" ) {
        this.bodyService.addOrder((data as any).value, () => { 
          this.ngEventBusWrapper.emitSuccessMessage("Order is successfully updated.");
          this.refreshList()
        }, (errResp) => {
          if (errResp.status == 0) {
            this.ngEventBusWrapper.emitErrorMessage("Unable to update order. Something went wrong.");
          } else {
            this.refreshList();
          }
        });
      } else if ( type === "ADD" ) {
        this.bodyService.addOrder((data as any).value, () => {
          this.ngEventBusWrapper.emitSuccessMessage("Order successfully added.");
          this.refreshList()
        }, (errResp) => {
          if (errResp.status == 0) {
            this.ngEventBusWrapper.emitErrorMessage("Unable to add order. Something went wrong.");
          } else {
            this.refreshList();
          }
        })
      } else if( type === "DELETE" ) {
        this.bodyService.deleteOrder((data as any).value, () => {
          this.ngEventBusWrapper.emitSuccessMessage("Order is successfully deleted.");
          this.refreshList()
        }, (errResp) => {
          if (errResp.status == 0) {
            this.ngEventBusWrapper.emitErrorMessage("Unable to delete order. Something went wrong.");
          } else {
            this.refreshList();
          }
        });
      }
    }
}
