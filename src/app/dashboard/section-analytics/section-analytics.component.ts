import { Component, OnInit } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import {SectionService} from '../../providers/section.service'
import {ContentService} from '../../providers/content.service'
import {AppProvider} from '../../providers/app.provider'
import { forkJoin } from "rxjs/observable/forkJoin";
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-section-analytics',
  templateUrl: './section-analytics.component.html',
  styleUrls: ['./section-analytics.component.scss'],
  providers:[SectionService,ContentService]
})
export class SectionAnalyticsComponent implements OnInit {
waitLoader
sectiondata
forFilterData=[]
contentData
  constructor(private sectionService: SectionService, private contentService:ContentService) { }

  ngOnInit() {
  		$('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });
        this.getSectionViewData()
  }

  getSectionViewData() {
        this.waitLoader = true;
        this.sectiondata = []
        forkJoin([this.sectionService.onGetSectionData(),this.contentService.ongetContentList(),this.sectionService.onGetSection()])
            .subscribe(data => {
                this.waitLoader = false;
                if (!data) {
                    // this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                    //     toastLife: 3000,
                    //     showCloseButton: true
                    // });
                } else if (data) {
                    let local = data[0].FinalArray;
                    this.contentData=data[1].response
                    for (let i = 0; i < local.length; i++) {
                        var obj = local[i];
                        console.log(JSON.stringify(obj))
                        if (obj.section_categories.length > 0) {
                             this.sectiondata.push(obj)
                             this.forFilterData.push(obj)
                            for (let j = 0; j < obj.section_categories.length; j++) {
                                var obj2 = obj.section_categories[j]
                                // if (obj2.section_subcategories.length > 0) {
                                //     for (let k = 0; k < obj2.section_subcategories.length; k++) {
                                //         var obj3 = obj2.section_subcategories[k]
                                //         obj3.contributionForm=obj2.contributionForm;
                                //         this.sectiondata.push(obj3)
                                //         this.forFilterData.push(obj3)
                                //     }
                                // } else {

                                    this.sectiondata.push(obj2)
                                    this.forFilterData.push(obj2)
                               /// }

                            }
                        } else {
                            this.sectiondata.push(obj)
                            this.forFilterData.push(obj)

                        }
                    }
                    console.log(JSON.stringify(this.sectiondata))
                }
            }, error => {
               this.waitLoader = false;
            })
    }
    getPageView(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].pageView
        }
        return value
      }else{
        return value
      }

    }
    getUniquePageView(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].uniqueViews
        }
        return value
      }else{
        return value
      }
    }
    getLike(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].likeCount
        }
        return value
      }else{
        return value
      }
      
    }
    getShare(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].shareCount
        }
        return value
      }else{
        return value
      }
      
    }
    getComment(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].commentCount
        }
        return value
      }else{
        return value
      }
      
    }
    getSave(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].saveCount
        }
        return value
      }else{
        return value
      }
      
    }
    getDownload(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].downloadCount
        }
        return value
      }else{
        return value
      }
      
    }
    getApply(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].applyCount
        }
        return value
      }else{
        return value
      }
      
    }
    getCall(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].callCount
        }
        return value
      }else{
        return value
      }
      
    }
    getCallMeBAck(id,flag){
      let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].callMeBackCount
        }
        return value
      }else{
        return value
      }
      
    }
    getIntrested(id,flag){
       let value=0
      let data
      if(flag=='category'){
        data= this.contentData.filter(arg=>arg.categoryId==id)

      }else if (flag=='section') {
      data= this.contentData.filter(arg=>arg.sectionId==id)  // code...
      }
      
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
