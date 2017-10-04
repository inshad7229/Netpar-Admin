import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable} from 'rxjs/Rx'
import "rxjs"
import  {ENV} from '../../env'
import {Admin} from './edit.model.component'



@Injectable()
export class AdminService {


    constructor(private http: Http) {}
    onRegister(loginModel: Admin): Observable < any > {
        let api = ENV.mainApi + "adminSignup";
        let headers = new Headers({
            'Content-Type': 'application/json',
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(api, JSON.stringify(loginModel), options).map(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    onEditAdminProfile(loginModel: Admin): Observable < any > {
        let api = ENV.mainApi + "editAdminProfile/" + loginModel._id;
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage['token']
        });
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.put(api, JSON.stringify(loginModel), options).map(response => {
            console.log("customer Info datais " + response);
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    onEditAdminStatus(loginModel: Admin): Observable < any > {
        let api = ENV.mainApi + "editAdminStatus/" + loginModel._id + '/0';
        let a = {
            status: loginModel.status,
            _id: loginModel._id
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

    onEditAdminPassword(id, pass): Observable < any > {
        let api = ENV.mainApi + "changePassword/" + id;
        let a = {
            password: pass,
            plain: window.btoa(pass),
            _id: id
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

    onAdminDelete(loginModel: Admin): Observable < any > {
        let api = ENV.mainApi + "editAdminStatus/" + loginModel._id + '/1';
        let a = {
            delstatus: loginModel.delstatus,
            _id: loginModel._id
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
}

