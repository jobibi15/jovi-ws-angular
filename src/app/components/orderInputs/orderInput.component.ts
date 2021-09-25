import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Order } from "../models/order";

const TYPE_ADD = "ADD";
const TYPE_UPDATE = "UPDATE";
const TYPE_DELETE = "DELETE";
const TYPE_VIEW_ONLY = "VIEW_ONLY";

@Component({
  selector: 'order-input',
  templateUrl: './orderInput.component.html',
  styleUrls: ['./orderInput.component.css']
})
export class OrderInputComponent implements OnInit {

    private orderValue_initial : Order = new Order();

    ngOnInit() : void {
    }

    @Input() inputType : String = TYPE_ADD;
    @Input() orderValue : Order = new Order();
    @Output() submit : EventEmitter<Object> = new EventEmitter<Object>();

    doSubmit(isDelete = false) : void {
      if (isDelete) {
        this.submit.emit({"type": TYPE_DELETE, "value": this.orderValue});
      } else {
        this.submit.emit({"type": this.inputType, "value": this.orderValue});
        if (this.inputType === TYPE_ADD) {
          this.orderValue = new Order();
        } else {
          this.inputType = TYPE_VIEW_ONLY;
          this.orderValue_initial = this.orderValue;
        }
      }
    }

    doCancel() : void {
      this.inputType = 'VIEW_ONLY';
      this.orderValue = this.orderValue_initial;
    }

    enterUpdateMode() : void {
      this.inputType = 'UPDATE';
      this.orderValue_initial = Object.assign({}, this.orderValue);
    }

    isAdd() : Boolean {
      return this.inputType === TYPE_ADD;
    }

    isUpdate() : Boolean {
      return this.inputType === TYPE_UPDATE;
    }

    isViewOnly() : Boolean {
      return this.inputType === TYPE_VIEW_ONLY;
    }
}