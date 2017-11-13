import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { Observable} from 'rxjs/Rx'
import "rxjs"
import { of } from 'rxjs/observable/of';
import {StateResource,state} from '../models/stateResources'



import  {ENV} from '../env'
// import {Admin} from './edit.model.component'

@Injectable()
export class StateService {
     stateResource :StateResource=new StateResource()
     gobhi
    constructor(private http: Http)
    { 

    let a={
        a:this.stateResource
    }
    this.gobhi=a
}
  

  getState(): Observable<any> {
     console.log(JSON.stringify(this.gobhi)) 
    // Todo: send the message _after_ fetching the heroes
   // this.messageService.add('HeroService: fetched heroes');
    return ;
  }

}