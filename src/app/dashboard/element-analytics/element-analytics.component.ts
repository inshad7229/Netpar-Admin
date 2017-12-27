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
 stringResource:StringResource=new  StringResource()
    contentList
    filterValue:any;
    sections=[]
    categories=[]
    subCategory=[]
    sectionsBack
    categoriesBack
    subCategoryBack
    sectionFlag;
    filterSection=[]
    filterCategory=[]
    filterSubcategory=[]
    filterLanguage=[];
    filterLanguageSingle;
    filterStatus=[]
    sortListToHomePage=[];
    sortListToCategoryPage=[];
    editContent=[];
    selectedId=[]
    status=[
      {
        _id:"saveAsDraftStatus",
        value:"Draft",
        check:false

      },
      {
        _id:"rejectStatus",
        value:"Rejected",
        check:false

      },
      {
        _id:"sendForRevisionStatus",
        value:"Revision",
        check:false

      },
      {
        _id:"publishLaterStatus",
        value:"Scheduled",
        check:false

      },
      {
        _id:"publishStatus",
        value:"Published",
        check:false

      }
    ]
    statusPriority=[
      {
        _id:"activePriority",
        value:"Active priority content",
        check:false

      },
      {
        _id:"completed",
        value:"Completed priority content",
        check:false

      },
      {
        _id:"scheduledcontent",
        value:"Scheduled content",
        check:false

      }
    ]
    contentBackup:any;
    contentListBackup:any;
    contentAfterState:any;
    filterData:any;
    filterRequest:any;
    selectedSate:any;
    showFilterPan:boolean=false;
    filterLanguageFilterPan:any;
    filterSectionFilterPan:any;
    filterCategoryFilterPan:any;
    filterSubcategoryFilterPan:any;
    saveAsDraftStatus:boolean;
    rejectStatus:boolean;
    sendForRevisionStatus:boolean;
    publishLaterStatus:boolean;
    publishStatus:boolean;
    sendData
    activePriority:boolean
    completed:boolean
    future:boolean
    dataAfterLanguage=[];
    dataAfterSection=[]
    dataAfterCategory=[]
    dataAfterSubCategory=[]
    contentDataAfterFilter
    filterStateFilterPan
    filterState=[]
    dataAfterState=[]
    dataForSorting
    arrangedData=[]
    limitedFilter 
  constructor(private sectionService:SectionService,
            private appProvider: AppProvider,
            private adminService:AdminService,
            private contentService:ContentService) {
            this.filterValue={}
                this.filterRequest={}
                this.limitedFilter={}
                this.sendData={} 

  }

  	ngOnInit() {
  		$('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });
         $(window).on('click', function (e) {
            e.stopPropagation();
            var $trigger = $(".sidebar-filter").closest('.filter-plugin');
            console.log($trigger);
            if($trigger !== e.target && !$trigger.has(e.target).length){
                $('.sidebar-filter').closest('.filter-plugin').removeClass('open');
            }
           
        });

        this.getData()
  	}
    getData(){
      this.waitLoader = true;
       forkJoin([this.contentService.ongetContentList(),this.sectionService.onGetSection()])
         .subscribe(results => {
                    this.waitLoader = false;
                    if (results) {
                      this.contentData=results[0].response;
                      this.contentBackup=results[0].response;
                      this.sectionData=results[1]
                      this.sectionsBack=results[1]
                      this.sections=this.sections.concat(this.sectionsBack)
                      this.aggrigateDataMake()
                    }
                    
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                })
    }
    aggrigateDataMake(){
                     this.arrangedData=[]
                     this.arrangedData.push({
                                              tag:'Text Only',
                                              pageView:this.getPageView('Text Only'),
                                              uniqueViews:this.getUniquePageView('Text Only'),
                                              continueReading:this.getContinuneReading('Text Only'),
                                              likeCount:this.getLike('Text Only'),
                                              shareCount:this.getShare('Text Only'),
                                              commentCount:this.getComment('Text Only'),
                                              saveCount:this.getSave('Text Only'),
                                              downloadCount:this.getDownload('Text Only'),
                                              applyCount:this.getApply('Text Only'),
                                              callCount:this.getCall('Text Only'),
                                              callMeBackCount:this.getCallMeBAck('Text Only'),
                                              imIntrestedCount:this.getIntrested('Text Only')
                                              })
                      this.arrangedData.push({
                                              tag:'Photo Only',
                                              pageView:this.getPageView('Photo Only'),
                                              uniqueViews:this.getUniquePageView('Photo Only'),
                                              continueReading:this.getContinuneReading('Photo Only'),
                                              likeCount:this.getLike('Photo Only'),
                                              shareCount:this.getShare('Photo Only'),
                                              commentCount:this.getComment('Photo Only'),
                                              saveCount:this.getSave('Photo Only'),
                                              downloadCount:this.getDownload('Photo Only'),
                                              applyCount:this.getApply('Photo Only'),
                                              callCount:this.getCall('Photo Only'),
                                              callMeBackCount:this.getCallMeBAck('Photo Only'),
                                              imIntrestedCount:this.getIntrested('Photo Only')
                                              })
                     this.arrangedData.push({
                                              tag:'Audio Only',
                                              pageView:this.getPageView('Audio Only'),
                                              uniqueViews:this.getUniquePageView('Audio Only'),
                                              continueReading:this.getContinuneReading('Audio Only'),
                                              likeCount:this.getLike('Audio Only'),
                                              shareCount:this.getShare('Audio Only'),
                                              commentCount:this.getComment('Audio Only'),
                                              saveCount:this.getSave('Audio Only'),
                                              downloadCount:this.getDownload('Audio Only'),
                                              applyCount:this.getApply('Audio Only'),
                                              callCount:this.getCall('Audio Only'),
                                              callMeBackCount:this.getCallMeBAck('Audio Only'),
                                              imIntrestedCount:this.getIntrested('Audio Only')
                                              })
                     this.arrangedData.push({
                                              tag:'Video Only',
                                              pageView:this.getPageView('Video Only'),
                                              uniqueViews:this.getUniquePageView('Video Only'),
                                              continueReading:this.getContinuneReading('Video Only'),
                                              likeCount:this.getLike('Video Only'),
                                              shareCount:this.getShare('Video Only'),
                                              commentCount:this.getComment('Video Only'),
                                              saveCount:this.getSave('Video Only'),
                                              downloadCount:this.getDownload('Video Only'),
                                              applyCount:this.getApply('Video Only'),
                                              callCount:this.getCall('Video Only'),
                                              callMeBackCount:this.getCallMeBAck('Video Only'),
                                              imIntrestedCount:this.getIntrested('Video Only')
                                              })
                      this.arrangedData.push({
                                              tag:'Text + Video',
                                              pageView:this.getPageView('Text + Video'),
                                              uniqueViews:this.getUniquePageView('Text + Video'),
                                              continueReading:this.getContinuneReading('Text Only'),
                                              likeCount:this.getLike('Text + Video'),
                                              shareCount:this.getShare('Text + Video'),
                                              commentCount:this.getComment('Text + Video'),
                                              saveCount:this.getSave('Text + Video'),
                                              downloadCount:this.getDownload('Text + Video'),
                                              applyCount:this.getApply('Text + Video'),
                                              callCount:this.getCall('Text + Video'),
                                              callMeBackCount:this.getCallMeBAck('Text + Video'),
                                              imIntrestedCount:this.getIntrested('Text + Video')
                                              })
                       this.arrangedData.push({
                                              tag:'Text + Audio',
                                              pageView:this.getPageView('Text + Audio'),
                                              uniqueViews:this.getUniquePageView('Text + Audio'),
                                              continueReading:this.getContinuneReading('Text + Audio'),
                                              likeCount:this.getLike('Text + Audio'),
                                              shareCount:this.getShare('Text + Audio'),
                                              commentCount:this.getComment('Text + Audio'),
                                              saveCount:this.getSave('Text + Audio'),
                                              downloadCount:this.getDownload('Text + Audio'),
                                              applyCount:this.getApply('Text + Audio'),
                                              callCount:this.getCall('Text + Audio'),
                                              callMeBackCount:this.getCallMeBAck('Text + Audio'),
                                              imIntrestedCount:this.getIntrested('Text + Audio')
                                              })
                       this.arrangedData.push({
                                              tag:'Text + Photo',
                                              pageView:this.getPageView('Text + Photo'),
                                              uniqueViews:this.getUniquePageView('Text + Photo'),
                                              continueReading:this.getContinuneReading('Text + Photo'),
                                              likeCount:this.getLike('Text + Photo'),
                                              shareCount:this.getShare('Text + Photo'),
                                              commentCount:this.getComment('Text + Photo'),
                                              saveCount:this.getSave('Text + Photo'),
                                              downloadCount:this.getDownload('Text + Photo'),
                                              applyCount:this.getApply('Text + Photo'),
                                              callCount:this.getCall('Text + Photo'),
                                              callMeBackCount:this.getCallMeBAck('Text + Photo'),
                                              imIntrestedCount:this.getIntrested('Text + Photo')
                                              })
                       this.arrangedData.push({
                                              tag:'Text + Multiple',
                                              pageView:this.getPageView('Text + Multiple'),
                                              uniqueViews:this.getUniquePageView('Text + Multiple'),
                                              continueReading:this.getContinuneReading('Text + Multiple'),
                                              likeCount:this.getLike('Text + Multiple'),
                                              shareCount:this.getShare('Text + Multiple'),
                                              commentCount:this.getComment('Text + Multiple'),
                                              saveCount:this.getSave('Text + Multiple'),
                                              downloadCount:this.getDownload('Text + Multiple'),
                                              applyCount:this.getApply('Text + Multiple'),
                                              callCount:this.getCall('Text + Multiple'),
                                              callMeBackCount:this.getCallMeBAck('Text + Multiple'),
                                              imIntrestedCount:this.getIntrested('Text + Multiple')
                                              })

                     this.dataForSorting=this.arrangedData.slice();
    }
          // <td> {{getPageView('Text Only')}} </td>
          //                                       <td> {{getUniquePageView('Text Only')}} </td>
          //                                       <td> {{getLike('Text Only')}} </td>
          //                                       <td> {{getShare('Text Only')}} </td>
          //                                       <td> {{getComment('Text Only')}} </td>
          //                                       <td> {{getSave('Text Only')}} </td>
          //                                       <td> {{getDownload()}} </td>
          //                                       <td> {{getApply('Text Only')}} </td>
          //                                       <td> {{getCall('Text Only')}} </td>
          //                                       <td> {{getCallMeBAck('Text Only')}} </td>
          //                                       <td> {{getIntrested('Text Only')}} </td>

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
    getContinuneReading(mimeType){
      let value=0
      let data= this.contentData.filter(arg=>arg.mimeType==mimeType)
      if (data.length>0) {
        for (var i = 0; i<data.length; i++) {
          value=value+data[i].continueReading
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


        getSectionList(){
                this.waitLoader = true;
                this.sectionService.onGetSection()
              .subscribe(data => {
                  this.waitLoader = false;
                  this.sectionsBack=data.filter(arg=>arg.deleteStatus!=true);;
                  this.sections=this.sections.concat(this.sectionsBack)
              },error=>{
                  this.waitLoader =false;
                  alert(error)
              })
  }
  getCategory(secId){
         this.waitLoader = true;
         this.sectionService.onGetCategory(secId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.categoriesBack=data.response.filter(arg=>arg.deleteStatus!=true);;
                    this.categories=this.categories.concat(this.categoriesBack)
                   // console.log(JSON.stringify(data))
                },error=>{
                    this.waitLoader =false;
                    alert(error)
                }) 
    }
   getsubCategory(secId,catId){
     this.waitLoader = true;
     this.sectionService.onGetSubCategory(secId,catId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.subCategoryBack=data.response.filter(arg=>arg.deleteStatus!=true);;
                    this.subCategory=this.subCategory.concat(this.subCategoryBack)
                   // console.log(JSON.stringify(data))
                },error=>{
                     this.waitLoader =false;
                    alert(error)
                }) 
   }
   findSec(id){
     let sec =this.sections.filter(arg=>arg._id==id)
    if (sec.length>0) {
        return sec[0].sectionName;
    }
   }
  findCat(id){
    let cat =this.categories.filter(arg=>arg._id==id)
    if (cat.length>0) {
      return cat[0].categoryName;
    }
  }
  findSubCat(id){
    let sub =this.subCategory.filter(arg=>arg._id==id)
    if (sub.length>0) {
      return sub[0].subCategoryName;
    }
  }
  forSection(sec){

    if (sec.check==true) {
      this.filterSection.push(sec._id)
       let data=this.contentBackup.filter(arg=>arg.sectionId==sec._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterSection.push(data[i])
      }
      this.getCategory(sec._id)
    }else{
      this.categories=this.categories.filter(arg=>arg.sectionId != sec._id)
      this.subCategory=this.subCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSection=this.filterSection.filter(arg=>arg != sec._id)
      this.filterCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.sectionId != sec._id)
      this.dataAfterSection=this.dataAfterSection.filter(arg=>arg.sectionId != sec._id)
    }
  }
  forCategory(cat){
    console.log(JSON.stringify(cat))
    if (cat.check==true) {
      this.filterCategory.push({_id:cat._id,sectionId:cat.sectionId})
      let data=this.contentBackup.filter(arg=>arg.categoryId==cat._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterCategory.push(data[i])
      }
      this.getsubCategory(cat.sectionId,cat._id)
    }else{
      this.filterCategory.filter(arg=>arg._id!=cat._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.categoryId!=cat._id)
      this.subCategory=this.subCategory.filter(arg=>arg.categoryId!=cat._id)

      this.dataAfterCategory=this.dataAfterCategory.filter(arg=>arg.categoryId != cat._id)

    }
  }
  forSubCategory(subCat){
    if (subCat.check==true) {
      this.filterSubcategory.push({_id:subCat._id,sectionId:subCat.sectionId,categoryId:subCat.categoryId})
      this.filterSubcategory=this.unique(this.filterSubcategory)
      let data=this.contentBackup.filter(arg=>arg.subCategoryId==subCat._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterSubCategory.push(data[i])
      }
     //this.getCategory(subCat._id)
    }else{
      this.dataAfterSubCategory=this.dataAfterSubCategory.filter(arg=>arg.subCategoryId != subCat._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg._id!=subCat._id)
      this.filterSubcategory=this.unique(this.filterSubcategory)
    }
  }
  onSelectLang(lang){
    console.log('ang'+JSON.stringify(this.filterLanguageFilterPan))
     // console.log(''+JSON.stringify(this.filterSectionFilterPan))
     //  console.log(''+JSON.stringify(this.filterCategoryFilterPan))
     //   console.log(''+JSON.stringify(this.filterSubcategoryFilterPan))
   if (lang.check==true) {
     let data=this.contentBackup.filter(arg=>arg.language==lang.language)
      for(let i=0;i<data.length;i++){
        this.dataAfterLanguage.push(data[i])
      }
      this.filterLanguage.push(lang.language)
      this.filterLanguage=this.unique(this.filterLanguage)
     //this.getCategory(subCat._id)
    }else{
      this.dataAfterLanguage=this.dataAfterLanguage.filter(arg=>arg.language != lang.language)
      this.filterLanguage=this.filterLanguage.filter(arg=>arg!=lang.language)
      this.filterLanguage=this.unique(this.filterLanguage)
    }
  }


onSelectstate(state){
       console.log('ang'+JSON.stringify(this.filterLanguageFilterPan))
     // console.log(''+JSON.stringify(this.filterSectionFilterPan))
     //  console.log(''+JSON.stringify(this.filterCategoryFilterPan))
     //   console.log(''+JSON.stringify(this.filterSubcategoryFilterPan))
   if (state.check==true) {
      this.filterState.push(state.stateName)
      let data=this.contentBackup.filter(arg=>arg.applicableStateLists.indexOf(state.stateName)!=-1)
      for(let i=0;i<data.length;i++){
        this.dataAfterState.push(data[i])
      }
     //this.getCategory(subCat._id)
    }else{
      this.dataAfterState=this.dataAfterState.filter(arg=>arg.applicableStateLists.indexOf(state.stateName)==-1)
      this.filterState=this.filterState.filter(arg=>arg!=state.stateName)
      this.filterState=this.unique(this.filterState)
    }
  }

 onApplyFilter(){
       let finalData= this.dataAfterLanguage.concat(this.dataAfterSection,this.dataAfterCategory,this.dataAfterSubCategory);
       this.contentData=this.unique(finalData)
       this.contentDataAfterFilter=this.unique(finalData)
       this.aggrigateDataMake()
      // this.dataForSorting=this.unique(finalData)
       this.filterLanguageFilterPan=this.filterLanguage.slice(0);
       this.filterSectionFilterPan=this.filterSection.slice(0);
       this.filterCategoryFilterPan=this.filterCategory.slice(0);
       this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
       this.filterStateFilterPan=this.filterState.slice(0)
     
}
unique(array){
         return array.filter(function(el, index, arr) {
                  return index == arr.indexOf(el);     
              }); 
}

        onClearLangFilter(lang){
          this.contentData=this.contentData.filter(arg=>arg.language!=lang)
          this.filterLanguageFilterPan=this.filterLanguageFilterPan.filter(arg=>arg!=lang)
           this.aggrigateDataMake()
        }
        onClearSectionFilter(secId){
            this.contentData=this.contentData.filter(arg=>arg.sectionId!=secId) 
            this.filterSectionFilterPan=this.filterSectionFilterPan.filter(arg=>arg!=secId) 
             this.aggrigateDataMake()        
        }
        onClearCategoryFilter(catId){
          console.log(JSON.stringify(this.filterCategoryFilterPan))
            this.contentData=this.contentData.filter(arg=>arg.categoryId!=catId)
            this.filterCategoryFilterPan=this.filterCategoryFilterPan.filter(arg=>arg._id!=catId)
             this.aggrigateDataMake()
        }
        onClearSubCategoryFilter(subCatId){
            this.contentData=this.contentData.filter(arg=>arg.subCategorId!=subCatId)
            this.filterSubcategoryFilterPan=this.filterSubcategoryFilterPan.filter(arg=>arg._id!=subCatId)
            this.aggrigateDataMake()
        }

        onClearStateFilter(state){
          this.contentData=this.contentData.filter(arg=>arg.applicableStateLists.indexOf(state.stateName)==-1)
          this.filterStateFilterPan=this.filterStateFilterPan.filter(arg=>arg!=state)
          this.aggrigateDataMake()
        }
        clearAll(){
            this.filterLanguageFilterPan=[]
            this.filterSectionFilterPan=[]
            this.filterCategoryFilterPan=[]
            this.filterStateFilterPan=[]
            this.filterSubcategoryFilterPan=[]
            this.filterLanguageSingle=null
            this.selectedSate=null
            this.filterValue.state=null
            this.filterValue.language=null
            this.dataAfterLanguage=[];
            this.dataAfterSection=[]
            this.dataAfterCategory=[]
            this.dataAfterSubCategory=[]
            this.filterState=[]
            this.contentData=this.contentBackup.slice(0)
            for (let i=0;i<this.stringResource.language.length;i++) {
               this.stringResource.language[i].check=false
            }
            for (let i=0;i<this.stringResource.stateList.length;i++) {
               this.stringResource.stateList[i].check=false
            }
            for (let i=0;i<this.sections.length;i++) {
               this.sections[i].check=false
            }
            for (let i=0;i<this.categories.length;i++) {
               this.categories[i].check=false
            }
            for (let i=0;i<this.subCategory.length;i++) {
               this.subCategory[i].check=false
            }
            this.aggrigateDataMake()
        }

   sortData(sort: Sort) {
    //  this.contentBackup
    // this.contentList
    const data =this.dataForSorting.slice();
    if (!sort.active || sort.direction == '') {
      this.arrangedData = data;
      
      return;
    }

    this.arrangedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'Kadak': return compare(a.likeCount, b.likeCount, isAsc);
        case 'share': return compare(a.shareCount, b.shareCount, isAsc);
        case 'comment': return compare(a.commentCount, b.commentCount, isAsc);
        case 'save': return compare(a.saveCount, b.saveCount, isAsc);
        case 'download': return compare(a.downloadCount, b.downloadCount, isAsc);
        case 'apply': return compare(a.applyCount, b.applyCount, isAsc);
        case 'call': return compare(a.callCount, b.callCount, isAsc);
        case 'call_Me_Back': return compare(a.callMeBackCount, b.callMeBackCount, isAsc);
        case 'interested': return compare(a.imIntrestedCount, b.imIntrestedCount, isAsc);
        case 'pageViews': return compare(a.pageView, b.pageView, isAsc);
        case 'uniquePage': return compare(a.uniqueViews, b.uniqueViews, isAsc);
        case 'continue': return compare(a.continueReading, b.continueReading, isAsc);
        default: return 0;
      }
    });
  }

   onSortMulti(value){
      //alert(value)
    const data =this.dataForSorting.slice();
    if (!value || value == '') {
      this.arrangedData = data;
      
      return;
    }

    this.arrangedData.sort((a, b) => {
      //alert(value)
      let isAsc =  'asc';
      switch (value) {

        case 'Kadak': return compare2(a.likeCount, b.likeCount, isAsc);
        case 'share': return compare2(a.shareCount, b.shareCount, isAsc);
        case 'comment': return compare2(a.commentCount, b.commentCount, isAsc);
        case 'save': return compare2(a.saveCount, b.saveCount, isAsc);
        case 'download': return compare2(a.downloadCount, b.downloadCount, isAsc);
        case 'apply': return compare2(a.applyCount, b.applyCount, isAsc);
        case 'call': return compare2(a.callCount, b.callCount, isAsc);
        case 'call_Me_Back': return compare2(a.callMeBackCount, b.callMeBackCount, isAsc);
        case 'interested': return compare2(a.imIntrestedCount, b.imIntrestedCount, isAsc);
        case 'pageViews': return compare2(a.pageView, b.pageView, isAsc);
        case 'uniquePage': return compare2(a.uniqueViews, b.uniqueViews, isAsc);
        case 'continue': return compare2(a.continueReading, b.continueReading, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function compare2(a, b, isAsc) {
  return (b-a) 
}
