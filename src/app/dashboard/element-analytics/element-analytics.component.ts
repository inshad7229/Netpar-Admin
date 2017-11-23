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
  constructor(private sectionService:SectionService,
            private appProvider: AppProvider,
            private adminService:AdminService,
            private contentService:ContentService) {
            this.filterValue={}
                this.filterRequest={}
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

        this.getData()
  	}
    getData(){
       forkJoin([this.contentService.ongetContentList(),this.sectionService.onGetSection()])
         .subscribe(results => {
                    this.waitLoader = false;
                    if (results) {
                      this.contentData=results[0].response;
                      this.sectionData=results[1]
                      this.sectionsBack=results[1]
                      this.sections=this.sections.concat(this.sectionsBack)
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


        getSectionList(){
                this.waitLoader = true;
                this.sectionService.onGetSection()
              .subscribe(data => {
                  this.waitLoader = false;
                  this.sectionsBack=data;
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
                    this.categoriesBack=data.response;
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
                    this.subCategoryBack=data.response;
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
      this.getCategory(sec._id)
    }else{
      this.categories=this.categories.filter(arg=>arg.sectionId != sec._id)
      this.subCategory=this.subCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSection=this.filterSection.filter(arg=>arg != sec._id)
      this.filterCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.sectionId != sec._id)
    }
  }
  forCategory(cat){
    console.log(JSON.stringify(cat))
    if (cat.check==true) {
      this.filterCategory.push({_id:cat._id,sectionId:cat.sectionId})
      this.getsubCategory(cat.sectionId,cat._id)
    }else{
      this.filterCategory.filter(arg=>arg._id!=cat._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.categoryId!=cat._id)
      this.subCategory=this.subCategory.filter(arg=>arg.categoryId!=cat._id)

    }
  }
  forSubCategory(subCat){
    if (subCat.check==true) {
      this.filterSubcategory.push({_id:subCat._id,sectionId:subCat.sectionId,categoryId:subCat.categoryId})
     //this.getCategory(subCat._id)
    }else{
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg._id!=subCat._id)
    }
  }
  onSelectLang(lang){
    console.log('ang'+JSON.stringify(this.filterLanguageFilterPan))
     // console.log(''+JSON.stringify(this.filterSectionFilterPan))
     //  console.log(''+JSON.stringify(this.filterCategoryFilterPan))
     //   console.log(''+JSON.stringify(this.filterSubcategoryFilterPan))
   if (lang.check==true) {
      this.filterLanguage.push(lang.language)
     //this.getCategory(subCat._id)
    }else{
      this.filterLanguage=this.filterLanguage.filter(arg=>arg!=lang.language)
    }
  }


  onApplyFilter(){
        if (this.filterLanguage.length>0 ) {
           this.sendData.languages=this.filterRequest.language
        }else{
           delete(this.sendData.languages)
        }

        if (this.filterSection.length>0) {
          this.sendData.sectionsids=this.filterSection
        }else{
          delete(this.sendData.sectionsids)
        }
        if (this.filterCategory.length>0) {
        // code...
          let category=[]
          for(let i=0;i<this.filterCategory.length;i++){
          category.push(this.filterCategory[i]._id)
          }
          this.sendData.categories=category
        }else{
          delete(this.sendData.categories)
        }
        if (this.filterSubcategory.length>0 ) {
          let subCategory=[]
          for(let i=0;i<this.filterSubcategory.length;i++){
          subCategory.push(this.filterSubcategory[i]._id)
          }
          this.sendData.subcategories=subCategory

        }else{
          delete(this.sendData.subcategories)
        }

        if(this.filterRequest.saveAsDraftStatus){
          this.sendData.drafted=true
        }else{
          delete(this.sendData.drafted)
        }
        if(this.filterRequest.rejectStatus){
          this.sendData.rejected=true

        }else{
          delete(this.sendData.rejected)
        }


        if(this.filterRequest.sendForRevisionStatus){
          this.sendData.revisioned=true

        }else{
          delete(this.sendData.revisioned)
        }


        
        if(this.filterRequest.publishLaterStatus){
          this.sendData.scheduled=true

        }else{
          delete(this.sendData.scheduled)
        }
        if(this.filterRequest.publishStatus){
          this.sendData.published=true
        }else{
          delete(this.sendData.published)
        }
       
        if (this.filterRequest.activePriority) {
          this.sendData.activePriority=true;
        }else{
          delete(this.sendData.activePriority)
        }
        if (this.filterRequest.completed) {
          this.sendData.completed=true;
        }else{
          delete(this.sendData.completed)
        }
        if (this.filterRequest.future) {
          this.sendData.future=true;
        }else{
          delete(this.sendData.future)
        }
        this.sendData.sortlistForHomepage=true

        
         this.waitLoader =true;
              this.contentService.onApplyFilterHome(this.sendData)
              .subscribe(data => {
                     if (data.success == false) {
                           this.waitLoader =false;
                            //this.toastr.error(data.msg, 'Data Filter Failed. ', {
                            //     toastLife: 3000,
                            //     showCloseButton: true
                            // });
                        }
                        else if (data.success == true) {
                          this.waitLoader =false;
                           this.contentList=data.response;
                           this.contentListBackup=data.response.slice(0);
                           this.filterLanguageFilterPan=this.filterLanguage.slice(0);
                           this.filterSectionFilterPan=this.filterSection.slice(0);
                           this.filterCategoryFilterPan=this.filterCategory.slice(0);
                           this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
                            if(this.filterRequest.saveAsDraftStatus){
                                 this.saveAsDraftStatus=true; 
                            }
                            if(this.filterRequest.rejectStatus){
                               this.rejectStatus=true;
                              
                            }
                            if(this.filterRequest.sendForRevisionStatus){
                                   this.sendForRevisionStatus=true;
                              
                            }
                            if(this.filterRequest.publishLaterStatus){
                                 this.publishLaterStatus=true;
                              
                            }
                            if(this.filterRequest.publishStatus){
                                 this.publishStatus=true;
                            }


                           if (this.filterRequest.activePriority) {
                              this.activePriority=true;
                            }
                            if (this.filterRequest.completed) {
                              this.completed=true;
                            }
                            if (this.filterRequest.future) {
                              this.future=true;
                            }


                        }
                },error=>{
                    this.waitLoader =false;
                    alert(error)
              })
        }

        onClearLangFilter(lang){
          this.contentList=this.contentList.filter(arg=>arg.language!=lang)
          this.filterLanguageFilterPan=this.filterLanguageFilterPan.filter(arg=>arg!=lang)
        }
        onClearSectionFilter(secId){
            this.contentList=this.contentList.filter(arg=>arg.sectionId!=secId) 
            this.filterSectionFilterPan=this.filterSectionFilterPan.filter(arg=>arg!=secId)         
        }
        onClearCategoryFilter(catId){
          console.log(JSON.stringify(this.filterCategoryFilterPan))
            this.contentList=this.contentList.filter(arg=>arg.categoryId!=catId)
            this.filterCategoryFilterPan=this.filterCategoryFilterPan.filter(arg=>arg._id!=catId)
        }
        onClearSubCategoryFilter(subCatId){
            this.contentList=this.contentList.filter(arg=>arg.subCategorId!=subCatId)
            this.filterSubcategoryFilterPan=this.filterSubcategoryFilterPan.filter(arg=>arg._id!=subCatId)
        }
        clearAll(){
            this.filterLanguageFilterPan=[]
            this.filterSectionFilterPan=[]
            this.filterCategoryFilterPan=[]
            this.filterSubcategoryFilterPan=[]
            this.filterLanguageSingle=null
            this.selectedSate=null
            this.filterValue.state=null
            this.filterValue.language=null
            this.contentList=this.contentBackup.slice(0)
            for (let i=0;i<this.stringResource.language.length;i++) {
               this.stringResource.language[i].check=false
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
            for (let i=0;i<this.status.length;i++) {
               this.status[i].check=false
            }
            for (let i=0;i<this.statusPriority.length;i++) {
               this.statusPriority[i].check=false
            }
        }
}
