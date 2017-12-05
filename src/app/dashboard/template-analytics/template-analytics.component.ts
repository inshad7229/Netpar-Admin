import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material';
import { forkJoin } from "rxjs/observable/forkJoin";
import {TemplateService} from '../../providers/template.service'
@Component({
  selector: 'app-template-analytics',
  templateUrl: './template-analytics.component.html',
  styleUrls: ['./template-analytics.component.scss'],
  providers:[TemplateService]
})
export class TemplateAnalyticsComponent implements OnInit {
  waitLoader
  categoryResult
  listingResult
  constructor(private templateService:TemplateService) { }
  
  ngOnInit() {
  	 forkJoin([this.templateService.onGetTemplate('4'),this.templateService.onGetTemplate('1')])
        .subscribe(data => {
                    this.waitLoader = false;
                    if (data[0].success == false || data[1].success == false) {                        
                        // this.toastr.error('failed Please try again', 'Error !!. ', {
                        //     toastLife: 3000,
                        //     showCloseButton: true
                        // });
                    }
                    else if (data[0].success == true || data[1].success == true) {
                    	this.categoryResult=data[0].response
                    	this.listingResult=data[1].response
                     // this.categortTemplateList=data[0].response;response
                     // this.categoryList=data[1].filter(arg=>arg.deleteStatus!=true);
                  
                    }                 
                },error=>{
                  this.waitLoader = false;
                })
  }

}
