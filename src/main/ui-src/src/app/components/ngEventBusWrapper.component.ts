import { Component, Injectable, OnInit} from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Injectable()
export class NgEventBusWrapper extends NgEventBus{

  emitSuccessMessage(successMessage : string, showRemoveBtn = true) {
    this.cast("success:message", { "message" : successMessage, "showRemoveBtn" : showRemoveBtn});
  }

  emitErrorMessage(errorMessage : string, showRemoveBtn = true) {
    this.cast("error:message", { "message" : errorMessage, "showRemoveBtn" : showRemoveBtn});
  }

  emitClearMessage() {
    this.cast("message:clear", "");
  }

  getSuccessMessagePipe() {
    return this.on("success:message");
  }

  getErrorMessagePipe() {
    return this.on("error:message");
  }

  getMessageClearPipe() {
    return this.on("message:clear");
  }
}
