import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-grid',
  templateUrl: './orderGrid.component.html',
  styleUrls: ['./orderGrid.component.css']
})
export class OrderGridComponent implements OnInit {

    @Input() clerk : string = "";

    ngOnInit(): void {
    }
}
