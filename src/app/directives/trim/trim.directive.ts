import { Directive, HostListener, OnInit }  from '@angular/core';
import { NgControl } from "@angular/forms";
import {TrimPipe } from '../../pipes/trim/trim.pipe'
import { Http, Response, Jsonp, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import {AppProvider} from '../../providers/app.provider'


@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

 private trimPipe : TrimPipe ;
    lang
    constructor(private ngControl: NgControl,private http: Http,private appProvider:AppProvider) {
        this.trimPipe = new TrimPipe ();
    }

    ngOnInit() {
        if (!this.ngControl) {
            return;
        }
        //setTimeout(() => this.ngControl.valueAccessor.writeValue(this.trimPipe.transform(this.ngControl.value)), 100);
    }

    @HostListener("focus", ["$event.target.value"])
    onFocus(value) {
        // alert('hy')
        // if (!this.ngControl) {
        //     return;
        // }
        // if(value==0.00 || value=='0.00'){
        //  this.ngControl.valueAccessor.writeValue(null);
        // }else{
        //  this.ngControl.valueAccessor.writeValue(this.trimPipe.parse(value));

        // }
    }
///// target_lang=hindi&domain=3&mt_context=generic_english_proper"
    @HostListener("blur", ["$event.target.value"])
    onBlur(value) {
        if (this.appProvider.current.currentLanguage=="Hindi") {
            this.lang='hindi'
        }else if (this.appProvider.current.currentLanguage=="Bengali") {
            this.lang='bengali'
        }else if (this.appProvider.current.currentLanguage=="Gujarati") {
             this.lang='gujarati'
        }else if (this.appProvider.current.currentLanguage=="Kannada") {
             this.lang='kannada'
        }else if (this.appProvider.current.currentLanguage=="Marathi") {
             this.lang='marathi'
        }else if (this.appProvider.current.currentLanguage=="Malayalam") {
             this.lang='malayalam'
        }else if (this.appProvider.current.currentLanguage=="Telugu") {
             this.lang='telugu'
        }else if (this.appProvider.current.currentLanguage=="Tamil") {
             this.lang='tamil'
        }else if (this.appProvider.current.currentLanguage=="Punjabi") {
             this.lang='punjabi'
        }else if (this.appProvider.current.currentLanguage=="English") {
             this.lang='english'
        }else {
             this.lang='marathi'
        }
        let a=[]
        a[0]=value
        let b={
            data:a
        }
        console.log(value)
        if (!this.ngControl) {
            return;
        }
        let api =  "https://api-gw.revup.reverieinc.com/apiman-gateway/PROMATICS/transliteration/1.0?source_lang=english&target_lang="+this.lang+"&content_lang=&abbreviate=&noOfsuggestions=1&domain=1";
         let params: URLSearchParams = new URLSearchParams();
         params.set('source_lang','english'); 
         params.set('target_lang','hindi'); 
         params.set('domain','3'); 
         params.set('mt_context','generic_english_proper'); 
         let options = new RequestOptions({
                    headers: new Headers({
                       "rev-api-key": "5c3a548b01cce02490127a5f50c3fb47",
                       "rev-app-id": "NETPAR_APP",
                       "content-type": "application/json"
                    }),
                  //  search:params
         });
        return this.http.post(api,JSON.stringify(b),options).subscribe(response => {
            console.log("customer Info datais " + response);
            let responsee=response.json();
            this.ngControl.valueAccessor.writeValue(responsee.responseList[0].outString[0]);
            this.ngControl.viewToModelUpdate(responsee.responseList[0].outString[0]);

        },error => {
            let errorr=error;
        });
        //let  demo=value.trim()
        //let transformed = this.trimPipe.transform(value);
       // this.ngControl.valueAccessor.writeValue(demo);
       // this.ngControl.viewToModelUpdate(demo);
    }

}
