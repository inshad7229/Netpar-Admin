import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http'
import { ResponseContentType } from '@angular/http';
import { Observable} from 'rxjs/Rx'
import FileSaver from 'file-saver';
import "rxjs"


import  {ENV} from '../env'
// import {Admin} from './edit.model.component'

@Injectable()
export class UserService {


    constructor(private http: Http)
    { }


     onGetAllUser():  Observable<any> {
        let api =  ENV.mainApi+"getAllMembers";
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


    getAllContributions():  Observable<any> {
        let api =  ENV.mainApi+"getAllContributions";
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
   

    onEditContentMultipal(Status,id): Observable <any> {
        let api = ENV.mainApi + "updateContriStatus"
        let a={
            contriIds:id,
            status:Status
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
       getMedia():  Observable<any> {
            let api ="http://52.15.178.19:3002/netpar/downloadFile";
             let headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            });
            let options = new RequestOptions({ headers: headers });
            return this.http.get(api,options).map(response => {
                console.log("customer Info datais " + response);
                return response;
            }).catch(error => {
                return error;
            });
        }
  setMultipartHeader(headers:Headers){
headers.append('method', 'GET');
//any headers you want to set
} 
// getMultipart(){
// var headers = new Headers();
// this.setMultipartHeader(headers);
// let requestOptions = new RequestOptions({
// headers: headers,
// responseType:ResponseContentType.Blob,//dont forget to import the enum
// //In case you get Module not found: Error: Can't resolve '@angular/http/src/enums', just use 3 instead ex "responseType:3"
// });

// return this.http.get("http://52.15.178.19:3002/netpar/downloadFile",requestOptions => {
// return new Blob( [res.blob()], { type: "application/octet-stream"} );
// })
// }
download() {
        this.http.get("http://52.15.178.19:3002/netpar/downloadFile",  {
            method: RequestMethod.Get,
            responseType: ResponseContentType.Blob,
            headers: new Headers({'Content-type': 'application/json'})
        }).subscribe(
            (response) => {
                var blob = new Blob([response.blob()], {type: 'audio/*'});
                var filename = '1509535392.mp3';
                FileSaver.saveAs(blob, filename);
        }
    );
    // private throwPromise(error: any): Promise<any> {
    //     let details = error.json().messages;
    //     alert("Failure :" + details);
    //     return Promise.reject(error);
    // }

}
}