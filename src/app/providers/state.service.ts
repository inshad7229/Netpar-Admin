import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable} from 'rxjs/Rx'
import "rxjs"
import { of } from 'rxjs/observable/of';
import {StateList,State} from '../models/stateResources'



import  {ENV} from '../env'
// import {Admin} from './edit.model.component'

@Injectable()
export class StateService {
     //stateResource :StateResource=new StateResource()
     gobhi
    constructor(private http: Http)
    { 

}
  

  getStates(): Promise<State[]> {
    return Promise.resolve(StateList);
  }
  
  // getUnionTerritories():Promise<state[]>{
  //  return Promise.resolve(unionTerritories);
  // }

}