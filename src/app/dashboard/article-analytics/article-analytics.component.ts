import { Component, OnInit } from '@angular/core';
// import {DataTableModule} from "angular2-datatable";
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
    filterState=[]
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
    filterStateFilterPan
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
    dataAfterState=[]
    contentDataAfterFilter
    limitedFilter
    limit:number;
    dataForSorting
    filterApplyStatus:boolean=false
  constructor(private sectionService:SectionService,
            public appProvider: AppProvider,
            private adminService:AdminService,
            private contentService:ContentService) {
            this.filterValue={}
                this.filterRequest={}
                this.limitedFilter={}
                this.sendData={} 
                this.limitedFilter.perPage='25'
                this.limit=25
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
                      this.dataForSorting=results[0].response
                      this.sectionData=results[1].filter(arg=>arg.deleteStatus!=true && arg.status==true && arg.publishStatus==true )
                      this.sectionsBack=results[1].filter(arg=>arg.deleteStatus!=true && arg.status==true && arg.publishStatus==true )
                      this.sections=this.sections.concat(this.sectionsBack)
                    }
                    
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 
    }
    getSectionList(){
                this.waitLoader = true;
                this.sectionService.onGetSection()
              .subscribe(data => {
                  this.waitLoader = false;
                  this.sectionsBack=data.filter(arg=>arg.deleteStatus!=true && arg.status==true && arg.publishStatus==true );;
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
                    this.categoriesBack=data.response.filter(arg=>arg.deleteStatus!=true && arg.status==true && arg.publishStatus==true )
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
                    this.subCategoryBack=data.response.filter(arg=>arg.deleteStatus!=true && arg.status==true && arg.publishStatus==true )
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
      let data=this.contentBackup.filter(arg=>arg.subCategoryId==subCat._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterSubCategory.push(data[i])
      }
     //this.getCategory(subCat._id)
    }else{
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg._id!=subCat._id)
      this.dataAfterSubCategory=this.dataAfterSubCategory.filter(arg=>arg.subCategoryId != subCat._id)
    }
  }
  onSelectLang(lang){
    console.log('ang'+JSON.stringify(this.filterLanguageFilterPan))
     // console.log(''+JSON.stringify(this.filterSectionFilterPan))
     //  console.log(''+JSON.stringify(this.filterCategoryFilterPan))
     //   console.log(''+JSON.stringify(this.filterSubcategoryFilterPan))
   if (lang.check==true) {
      this.filterLanguage.push(lang.language)
      let data=this.contentBackup.filter(arg=>arg.language==lang.language)
      for(let i=0;i<data.length;i++){
        this.dataAfterLanguage.push(data[i])
      }
     //this.getCategory(subCat._id)
    }else{
      this.dataAfterLanguage=this.dataAfterLanguage.filter(arg=>arg.language != lang.language)
      this.filterLanguage=this.filterLanguage.filter(arg=>arg!=lang.language)
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
    }
  }

 onApplyFilter(){
       let finalData= this.dataAfterLanguage.concat(this.dataAfterSection,this.dataAfterCategory,this.dataAfterSubCategory);
       this.contentData=this.unique(finalData)
       this.contentDataAfterFilter=this.unique(finalData)
       this.dataForSorting=this.unique(finalData)
       this.filterApplyStatus=true
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
        }
        onClearSectionFilter(secId){
            this.contentData=this.contentData.filter(arg=>arg.sectionId!=secId) 
            this.filterSectionFilterPan=this.filterSectionFilterPan.filter(arg=>arg!=secId)         
        }
        onClearCategoryFilter(catId){
          console.log(JSON.stringify(this.filterCategoryFilterPan))
            this.contentData=this.contentData.filter(arg=>arg.categoryId!=catId)
            this.filterCategoryFilterPan=this.filterCategoryFilterPan.filter(arg=>arg._id!=catId)
        }
        onClearSubCategoryFilter(subCatId){
            this.contentData=this.contentData.filter(arg=>arg.subCategorId!=subCatId)
            this.filterSubcategoryFilterPan=this.filterSubcategoryFilterPan.filter(arg=>arg._id!=subCatId)
        }

        onClearStateFilter(state){
          this.contentData=this.contentData.filter(arg=>arg.applicableStateLists.indexOf(state.stateName)==-1)
          this.filterStateFilterPan=this.filterStateFilterPan.filter(arg=>arg!=state)
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
            this.filterApplyStatus=false
            this.dataForSorting=this.contentBackup.slice(0)
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
        }
onPerPage(perPage){
  if (perPage=='25') {
       this.limit=25
    // code...
  }else if (perPage=='50') {
    this.limit=50
    // code...
  }else if (perPage=='100') {
    this.limit=100
    // code...
  }else if (perPage=='200') {
    this.limit=100
    // code...
  }else if (perPage=='All') {
    this.limit=this.contentData.length
    // code...
  }
}
onRange(range){
  //alert(range)
  if (this.filterApplyStatus) {
     this.contentData=this.contentDataAfterFilter.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true)
  }else{
    this.contentData=this.contentBackup.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true) 
  }
  this.dataForSorting=this.contentData
}
getStatus(time,range):boolean {
  let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let firstDate = new Date();
  let secondDate = new Date(time);
  let diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
  console.log(diffDays)
  switch (range) {
        case '7d':
         console.log('7d')
          if (diffDays<8) {
             return true;
           }else{
             return false;
           } 
        case '15d': 
        if (diffDays<16) {
             return true;
           }else{
             return false;
           } 
        case '1m': 
        if (diffDays<31) {
             return true;
           }else{
             return false;
           }
        case '3m':
        if (diffDays<91) {
             return true;
           }else{
             return false;
           } 
        case '6m': 
        if (diffDays<181) {
             return true;
           }else{
             return false;
           }
        case '1y': 
        if (diffDays<365) {
             return true;
           }else{
             return false;
           }
        case 'all':return true
        default: return false;
      }
 }

sortData(sort: Sort) {
    //  this.contentBackup
    // this.contentList
    const data =this.dataForSorting.slice();
    if (!sort.active || sort.direction == '') {
      this.contentData = data;
      
      return;
    }

    this.contentData = data.sort((a, b) => {
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
      this.contentData = data;
      
      return;
    }

    this.contentData.sort((a, b) => {
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