import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable} from 'rxjs/Rx'
import {AddContentRequest} from '../models/content.modal'
import "rxjs"


import  {ENV} from '../env'
// import {Admin} from './edit.model.component'

@Injectable()
export class ContentService {
    constructor(private http: Http) {}

    onAddSection(addSectionRequest:AddContentRequest): Observable <any> {
        let api = ENV.mainApi + "addSection";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addSectionRequest), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    ongetSuggestedArticle(request): Observable <any> {
        let api = ENV.mainApi + "listSuggestedArticles";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(request), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
   
}