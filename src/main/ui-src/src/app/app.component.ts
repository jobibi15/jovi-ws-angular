import { Component, OnInit} from '@angular/core';
import { NgEventBusWrapper } from './components/ngEventBusWrapper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kopeetearia';

  message : string = "";
  isError : boolean = true;
  showRemoveBtn : boolean = true;

  constructor(private ngEventBusWrapper : NgEventBusWrapper) {
  }

  ngOnInit() {
    this.ngEventBusWrapper.getSuccessMessagePipe().subscribe((meta) => {
      this.message = meta.data.message;
      this.showRemoveBtn = meta.data.showRemoveBtn;
      this.isError = false;
    });

    this.ngEventBusWrapper.getErrorMessagePipe().subscribe((meta) => {
      this.message = meta.data.message;
      this.showRemoveBtn = meta.data.showRemoveBtn;
      this.isError = true;
    });

    this.ngEventBusWrapper.getMessageClearPipe().subscribe((meta) => {
      this.message = "";
    });
  }

  clearMessage() : void {
    this.message = "";
  }
}
