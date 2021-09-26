import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgEventBusWrapper } from './ngEventBusWrapper.component';

const APP_URL = "http://localhost:8090/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient, private spinner : NgxSpinnerService, private eventBus : NgEventBusWrapper) {
  }

  doSubmitGet(endpoint : string, data = {}, responseCatcher = (response : any) => {}, errorCatcher = (response : any) => {}) {
    this.spinner.show();
    this.http.get<Object[]>(APP_URL + endpoint, data).subscribe(responseCatcher, (errRep) => {
      this.catchError(errRep);
      errorCatcher(errRep);
    }).add( () => { this.spinner.hide(); });
  }

  doSubmitPost(endpoint : string, data = {}, responseCatcher = (response : any) => {}, errorCatcher = (response : any) => {}) {
    this.spinner.show();
    this.http.post<Object>(APP_URL + endpoint, data, httpOptions).subscribe(responseCatcher, (errRep) => {
      this.catchError(errRep);
      errorCatcher(errRep);
    }).add( () => { this.spinner.hide(); });
  }

  catchError(errorResponse: any) {
    let errorMessage;
    if (errorResponse.status == 0) {
      errorMessage = "Cannot load details. Something went wrong.";
    } else {
      errorMessage = errorResponse.error.message;
    }
    if (!!this.eventBus) {
      this.eventBus.emitErrorMessage(errorMessage);
    }
  }
}