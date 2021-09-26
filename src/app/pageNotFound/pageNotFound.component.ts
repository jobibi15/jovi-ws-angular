import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgEventBusWrapper } from '../components/ngEventBusWrapper.component';
import { Router } from '@angular/router';

@Component({
  selector: 'page-not-found',
  templateUrl: 'papgeNotFound.component.html',
  styleUrls: ['./pageNotFound.component.css']
})
export class PageNotFoundComponent implements AfterViewInit {

    ngAfterViewInit() {
      setTimeout(() => {
        this.ngEventBusWrapper.emitErrorMessage("Unsupported web page URL.", false);
      }, 0);
    }

    constructor(private ngEventBusWrapper : NgEventBusWrapper, private router : Router) {
    }

    backToOrderPage() {
      this.ngEventBusWrapper.emitClearMessage();
      this.router.navigateByUrl("/");
    }

}
