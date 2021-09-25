import { Component, Injectable } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Injectable()
export class EventBusMethods {

  ngEventBus : NgEventBus;

  constructor(ngEventBus : NgEventBus) {
    this.ngEventBus = ngEventBus;
  }

  putErrorMessage(errorMessage : string) {
    this.ngEventBus.cast("error:message", errorMessage);
  }

  clearErrorMessage() {
    this.ngEventBus.cast("error:clear", "");
  }
}
