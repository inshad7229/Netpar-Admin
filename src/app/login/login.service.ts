import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable} from 'rxjs/Rx'
import "rxjs"


import  {ENV} from '../env'

@Injectable()
export class LoginService {


    constructor(private http: Http)
    { }
  onLogin(loginModel:any):  Observable<any> {
        let api =  ENV.mainApi+"authenticate";
         let headers = new Headers({
            'Content-Type': 'application/json',
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(api,JSON.stringify(loginModel),options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }




    // private throwPromise(error: any): Promise<any> {
    //     let details = error.json().messages;
    //     alert("Failure :" + details);
    //     return Promise.reject(error);
    // }


}