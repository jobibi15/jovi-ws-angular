import { Component, OnInit} from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kopeetearia';

  errorMessage = "";

  ngEventBus : NgEventBus;

  constructor(ngEventBus : NgEventBus) {
    this.ngEventBus = ngEventBus;
  }

  ngOnInit() {
    console.log("here app 1");
    this.ngEventBus.on("error:message").subscribe((meta) => {
      this.errorMessage = meta.data;
    });

    this.ngEventBus.on("error:clear").subscribe((meta) => {
      this.errorMessage = "";
    });
    console.log("here app 2");
  }
}
