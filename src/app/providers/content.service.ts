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

    onAddSection(addContentRequest:AddContentRequest): Observable <any> {
        let api = ENV.mainApi + "addContent";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(addContentRequest), options).map(response => {
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
    ongetContentList(): Observable <any> {
        let api = ENV.mainApi + "listContent";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.get(api, options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
   
}