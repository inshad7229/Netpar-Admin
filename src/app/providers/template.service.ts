import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable} from 'rxjs/Rx'
import {StringResource} from '../models/saredResources'
import "rxjs"


import  {ENV} from '../env'
// import {Admin} from './edit.model.component'

@Injectable()
export class TemplateService {

    stringResource:StringResource=new  StringResource()
    constructor(private http: Http)
    { }


     onGetTemplate(flag):  Observable<any> {
        let api =  ENV.mainApi+"getCategoryTemplates/"+flag;
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(api,options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
     onEditStatus(user:any):  Observable<any> {
        let api =  ENV.mainApi+"editMemberStatus/"+user._id;
        let b=!user.status
        let a={
            status:user.status
        }
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(api,JSON.stringify(a), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }
     onEditInfluencer(user:any):  Observable<any> {
        let api =  ENV.mainApi+"editMemberInfluence/"+user._id;
        let b=!user.influencer
        let a={
            influencer:user.influencer
        }
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(api,JSON.stringify(a), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    onAddCategoryTemplate(tempName,categoryName):  Observable<any> {
        if (!tempName) {
            return
        }
        let api =  ENV.mainApi+"setCategoryTemplates";
       let tempData=this.stringResource.categoryTemplate.filter(arg=>arg.templateName==tempName)
        let a={
            id:tempData[0]._id,
            categoryName:categoryName
        }
         let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(api,JSON.stringify(a), options).map(response => {
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