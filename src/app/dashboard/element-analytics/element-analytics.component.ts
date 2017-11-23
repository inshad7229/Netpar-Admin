import { Component, OnInit } from '@angular/core';
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
  selector: 'app-element-analytics',
  templateUrl: './element-analytics.component.html',
  styleUrls: ['./element-analytics.component.scss'],
  providers:[ContentService,SectionService,AdminService]
})
export class ElementAnalyticsComponent implements OnInit {
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
    getPageView(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].pageView
        }
        return value
      }else{
        return value
      }

    }
    getUniquePageView(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].uniqueViews
        }
        return value
      }else{
        return value
      }
    }
    getLike(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].likeCount
        }
        return value
      }else{
        return value
      }
      
    }
    getShare(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].shareCount
        }
        return value
      }else{
        return value
      }
      
    }
    getComment(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].commentCount
        }
        return value
      }else{
        return value
      }
      
    }
    getSave(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].saveCount
        }
        return value
      }else{
        return value
      }
      
    }
    getDownload(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].downloadCount
        }
        return value
      }else{
        return value
      }
      
    }
    getApply(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].applyCount
        }
        return value
      }else{
        return value
      }
      
    }
    getCall(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].callCount
        }
        return value
      }else{
        return value
      }
      
    }
    getCallMeBAck(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].callMeBackCount
        }
        return value
      }else{
        return value
      }
      
    }
    getIntrested(mimeType){
       let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].imIntrestedCount
        }
        return value
      }else{
        return value
      }
      
    }
}
