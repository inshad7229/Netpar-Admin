import { Component, OnInit } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import {ContentService} from '../../providers/content.service'
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {AddContentRequest} from '../../models/content.modal'
import {AppProvider} from '../../providers/app.provider'
import {AdminService} from '../../providers/admin.service'

import { forkJoin } from "rxjs/observable/forkJoin";
import { Sort } from '@angular/material';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-article-analytics',
  templateUrl: './article-analytics.component.html',
  styleUrls: ['./article-analytics.component.scss'],
  providers:[ContentService,SectionService,AdminService]
})
export class ArticleAnalyticsComponent implements OnInit {
 waitLoader
 contentData
 sectionData
  constructor(private sectionService:SectionService,
            private appProvider: AppProvider,
            private adminService:AdminService,
            private contentService:ContentService) { }

  	ngOnInit() {
  		$('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });
        this.getData()
  	}

    getData(){
      forkJoin([this.contentService.ongetContentList(),this.sectionService.onGetSection()])
         .subscribe(results => {
                    this.waitLoader = false;
                    if (results) {
                      this.contentData=results[0].response;
                      this.sectionData=results[1]
                    }
                    
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 
    }

}
