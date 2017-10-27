import { Directive, HostListener, OnInit }  from '@angular/core';
import { NgControl } from "@angular/forms";
import {TrimPipe } from '../../pipes/trim/trim.pipe'


@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

 private trimPipe : TrimPipe ;

    constructor(private ngControl: NgControl) {
        this.trimPipe = new TrimPipe ();
    }

    ngOnInit() {
        if (!this.ngControl) {
            return;
        }
        //setTimeout(() => this.ngControl.valueAccessor.writeValue(this.trimPipe.transform(this.ngControl.value)), 100);
    }

    @HostListener("focus", ["$event.target.value"])
    // onFocus(value) {
    //     alert('hy')
    //     if (!this.ngControl) {
    //         return;
    //     }
    //     if(value==0.00 || value=='0.00'){
    //      this.ngControl.valueAccessor.writeValue(null);
    //     }else{
    //      this.ngControl.valueAccessor.writeValue(this.trimPipe.parse(value));

    //     }
    // }

    @HostListener("blur", ["$event.target.value"])
    onBlur(value) {
        console.log(value)
        if (!this.ngControl) {
            return;
        }
        let  demo=value.trim()
        //let transformed = this.trimPipe.transform(value);
        this.ngControl.valueAccessor.writeValue(demo);
        this.ngControl.viewToModelUpdate(demo);
    }

}
