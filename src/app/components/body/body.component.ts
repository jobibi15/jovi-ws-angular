import { Component, OnInit } from '@angular/core';
import { BodyService } from './body.service';
import { Order } from "../models/order";

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    orderList : Order[] = [];
    totalRegularBill : number = 0;
    totalDiscountedBill : number = 0;

    constructor(private bodyService : BodyService) {
    }

    ngOnInit() : void {
      this.refreshList();
    }

    refreshList() : void {
      this.bodyService.getOrderList().subscribe((data : any) => {
          this.orderList = data;
      });

      this.bodyService.getTotalRegularBill().subscribe((data : any) => {
          this.totalRegularBill = data.totalBill;
      });

      this.bodyService.getTotalDiscountedBill().subscribe((data : any) => {
          this.totalDiscountedBill = data.totalBill;
      });
    }

    submitListener(data : Object) : void {
      let type = (data as any).type;
      if ( type === "UPDATE" ) {
        this.bodyService.addOrder((data as any).value).subscribe((data : any) => {
          this.refreshList();
        });
      } else if ( type === "ADD" ) {
        this.bodyService.addOrder((data as any).value).subscribe((data : any) => {
          this.refreshList();
        });
      } else if( type === "DELETE" ) {
        this.bodyService.deleteOrder((data as any).value).subscribe((data : any) => {
          this.refreshList();
        });
      }
    }
}
