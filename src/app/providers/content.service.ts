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
   onEditContent(addContentRequest:AddContentRequest): Observable <any> {
        let api = ENV.mainApi + "editContent/"+addContentRequest._id;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(addContentRequest), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    onEditContentMultipal(flag,id): Observable <any> {
        let api = ENV.mainApi + "editSelectedContent/"+flag;
        let a={
            _id:id
        }
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(a), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
   onGetPageWiseContent(flag): Observable <any> {
        let api = ENV.mainApi + "getSelectedContent/"+flag;
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

     onApplyFilter(flag): Observable <any> {
        let api = ENV.mainApi + "listFilteredContent";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api,JSON.stringify(flag), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

     onApplyFilterHome(flag): Observable <any> {
        let api = ENV.mainApi + "filteredHomeContent";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api,JSON.stringify(flag), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    onApplyFilterCategory(flag): Observable <any> {
        let api = ENV.mainApi + "filteredCategoryContent";
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api,JSON.stringify(flag), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    onPriorityHomepage(data): Observable <any> {
        let api = ENV.mainApi + "setArticlePriority";
        // let a={
        //     _id:id
        // }
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(data), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    onPriorityOnCategorypage(data): Observable <any> {
        let api = ENV.mainApi + "setCategoryArticlePriority"
        // let a={
        //     _id:id
        // }
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(data), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
    onEmailExcel(user,filename,reciver): Observable <any> {
        let api = ENV.mainApi + "exportedData"
        let a={
            exportedData:user,
            filename:filename,
            receiverMail:reciver

        }
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(a), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}