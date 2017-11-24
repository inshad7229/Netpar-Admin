import { Component, OnInit,ViewContainerRef } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import {SectionService} from '../../providers/section.service'
import {ContentService} from '../../providers/content.service'
import {AppProvider} from '../../providers/app.provider'
import { forkJoin } from "rxjs/observable/forkJoin";
import {StringResource} from '../../models/saredResources'
import { ToastsManager , Toast} from 'ng2-toastr';
import { Sort } from '@angular/material';
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
    sectiondataAfterFilter
    limitedFilter
    limit
  constructor(private sectionService: SectionService, private contentService:ContentService,vcr: ViewContainerRef,
                      public toastr: ToastsManager) {
                this.toastr.setRootViewContainerRef(vcr);
                this.filterValue={}
                this.filterRequest={}
                this.sendData={}
                this.limitedFilter={}
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
                    this.sectionsBack=data[2]
                    this.sections=this.sections.concat(this.sectionsBack)
                    for (let i = 0; i < local.length; i++) {
                        var obj = local[i];
                        console.log(JSON.stringify(obj))
                        if (obj.section_categories.length > 0) {
                             this.sectiondata.push(obj)
                             this.forFilterData.push(obj)
                            for (let j = 0; j < obj.section_categories.length; j++) {
                                var obj2 = obj.section_categories[j]
                                if (obj2.section_subcategories.length > 0) {
                                      this.sectiondata.push(obj2)
                                      this.forFilterData.push(obj2)
                                    for (let k = 0; k < obj2.section_subcategories.length; k++) {
                                        var obj3 = obj2.section_subcategories[k]
                                        obj3.contributionForm=obj2.contributionForm;
                                        this.sectiondata.push(obj3)
                                        this.forFilterData.push(obj3)
                                    }
                                } else {

                                    this.sectiondata.push(obj2)
                                    this.forFilterData.push(obj2)
                               }

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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
      }else if (flag=='subcategory') {
      data= this.contentData.filter(arg=>arg.subCategoryId==id)  // code...
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
 getPageViewDay(totalViews,dateOfCreation){
  if(totalViews && dateOfCreation){
    
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let firstDate = new Date();
  let secondDate = new Date(dateOfCreation);

  let diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
  let avg
  if (diffDays>0) {
    avg=totalViews/diffDays
    // code...
  }else{
    avg=0
  }
return avg.toFixed(2)
  }else{
    return 0.00;
  }
    }
getPageViewMonth(totalViews,dateOfCreation){
if(totalViews && dateOfCreation){

  let oneDay= 24*60*60*1000; // hours*minutes*seconds*milliseconds
let firstDate = new Date();
let secondDate = new Date(dateOfCreation);

let diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
let diffMonth=diffDays*30
let avg
if (diffMonth>0) {
  avg=totalViews/diffMonth
  // code...
}else{
  avg=0
}
return avg.toFixed(2)

  }else{
    return 0.00;
  }
}
getPageViewSession(totalViews,totalSessions){
if(totalViews && totalSessions){
    let a=totalViews/totalSessions;
    return a.toFixed(2)
  }else{
    return 0.00;
  }
}
getAvgTime(totalTime,totalSessions){
  if(totalTime && totalSessions){
     let hourse
    let min
    if (totalTime>60) {
       let totalmin=Math.floor(totalTime/60);
       let totalminPerSession=Math.floor(totalmin/totalSessions);
       if (totalminPerSession>60) {
          hourse=Math.floor(totalminPerSession/60)
          min=totalminPerSession%60
          return hourse+' Hours '+min+' Min'
       }else{
           return totalminPerSession+' Min'
       }
    }
    else{
        return 0+' Min'
    }
  }else{
    return 0+' Min';
  }
}

getTotalTime(totalTime){
    let hourse
    let min
    if (totalTime>60) {
       let totalmin=Math.floor(totalTime/60);
       if (totalmin>60) {
          hourse=Math.floor(totalmin/60)
          min=totalmin%60
          return hourse+' Hours '+min+' Min'
       }else{
           return totalmin+' Min'
       }
    }
    else{
        return 0+' Min'
    }

}
   getSectionList(){
                this.waitLoader = true;
                this.sectionService.onGetSection()
              .subscribe(data => {
                  this.waitLoader = false;
                  this.sectionsBack=data;
                  if (data.response.length==0) {
                      this.toastr.info('This section do not have any category')
                      // code...
                    }
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
                    if (data.response.length==0) {
                      this.toastr.info('This category do not have any subategory')
                      // code...
                    }
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
      let data=this.forFilterData.filter(arg=>arg.sectionId==sec._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterSection.push(data[i])
      }
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
      let data=this.forFilterData.filter(arg=>arg.sectionId==cat._id)
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
      let data=this.forFilterData.filter(arg=>arg.subCategoryId==subCat._id)
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
      let data=this.forFilterData.filter(arg=>arg.language==lang.language)
      for(let i=0;i<data.length;i++){
        this.dataAfterLanguage.push(data[i])
      }
     //this.getCategory(subCat._id)
    }else{
      this.dataAfterLanguage=this.dataAfterLanguage.filter(arg=>arg.language != lang.language)
      this.filterLanguage=this.filterLanguage.filter(arg=>arg!=lang.language)
    }
  }


  onApplyFilter(){
       let finalData= this.dataAfterLanguage.concat(this.dataAfterSection,this.dataAfterCategory,this.dataAfterSubCategory);
       this.sectiondata=this.unique(finalData)
       this.sectiondataAfterFilter=this.unique(finalData)
       this.filterLanguageFilterPan=this.filterLanguage.slice(0);
       this.filterSectionFilterPan=this.filterSection.slice(0);
       this.filterCategoryFilterPan=this.filterCategory.slice(0);
       this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
     
}
unique(array){
         return array.filter(function(el, index, arr) {
                  return index == arr.indexOf(el);     
              }); 
}

        onClearLangFilter(lang){
          this.sectiondata=this.sectiondata.filter(arg=>arg.language!=lang)
          this.filterLanguageFilterPan=this.filterLanguageFilterPan.filter(arg=>arg!=lang)
        }
        onClearSectionFilter(secId){
            this.sectiondata=this.sectiondata.filter(arg=>arg.sectionId!=secId) 
            this.filterSectionFilterPan=this.filterSectionFilterPan.filter(arg=>arg!=secId)         
        }
        onClearCategoryFilter(catId){
          console.log(JSON.stringify(this.filterCategoryFilterPan))
            this.sectiondata=this.sectiondata.filter(arg=>arg.categoryId!=catId)
            this.filterCategoryFilterPan=this.filterCategoryFilterPan.filter(arg=>arg._id!=catId)
        }
        onClearSubCategoryFilter(subCatId){
            this.sectiondata=this.sectiondata.filter(arg=>arg.subCategorId!=subCatId)
            this.filterSubcategoryFilterPan=this.filterSubcategoryFilterPan.filter(arg=>arg._id!=subCatId)
        }
        clearAll(){


            this.filterLanguageFilterPan=[]
            this.filterSectionFilterPan=[]
            this.filterCategoryFilterPan=[]
            this.filterSubcategoryFilterPan=[]
            this.dataAfterLanguage=[];
            this.dataAfterSection=[]
            this.dataAfterCategory=[]
            this.dataAfterSubCategory=[]
            this.filterLanguageSingle=null
            this.selectedSate=null
            this.filterValue.state=null
            this.filterValue.language=null
            this.sectiondata=this.forFilterData.slice(0)
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
        this.limit=this.sectiondata.length
        // code...
      }
    }
onRange(range){

}
sortData(sort: Sort) {
    //  this.contentBackup
    // this.contentList
    // this.userData=data.response;
    //                 this.userDataBackup=data.response
    const data =this.forFilterData.slice();
    if (!sort.active || sort.direction == '') {
      this.sectiondata = data;
      
      return;
    }

    this.sectiondata  = data.sort((a, b) => {
      console.log(a)
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'pageViews': return compare(a.totalViews, b.totalViews, isAsc);
        case 'uniquePage': return compare(a.uniqueViews, b.uniqueViews, isAsc);
        case 'avgPageDay': return compare(this.getPageViewDay(a.totalViews,a.dateOfCreation), this.getPageViewDay(b.totalViews,b.dateOfCreation), isAsc);
        case 'avgPageMonth': return compare(this.getPageViewMonth(a.totalViews,a.dateOfCreation), this.getPageViewMonth(b.totalViews,b.dateOfCreation), isAsc);
        case 'avgPerSession': return compare(this.getPageViewSession(a.totalViews,a.totalSessions),this.getPageViewSession(b.totalViews,b.totalSessions), isAsc);
        case 'totalTime': return compare(this.sortgetTotalTime(a.totalTime), this.sortgetTotalTime(b.totalTime), isAsc);
        case 'avgTime': return compare(this.sortgetAvgTime(a.totalTime,a.totalSessions), this.sortgetAvgTime(b.totalTime,b.totalSessions), isAsc);
        case 'Like': return compare(this.sortgetLike(a), this.sortgetLike(b), isAsc);
        case 'share': return compare(this.sortgetShare(a), this.sortgetShare(b), isAsc);
        case 'comment': return compare(this.sortgetComment(a), this.sortgetComment(b), isAsc);
        case 'save': return compare(this.sortgetSave(a), this.sortgetSave(b), isAsc);
        case 'download': return compare(this.sortgetDownload(a), this.sortgetDownload(b), isAsc);
        case 'apply': return compare(this.sortgetApply(a), this.sortgetApply(b), isAsc);
        case 'Call': return compare(this.sortgetCall(a), this.sortgetCall(b), isAsc);
        case 'CallMeBack': return compare(this.sortgetCallMeBAck(a), this.sortgetCallMeBAck(b), isAsc);
        case 'interested': return compare(this.sortgetIntrested(a), this.sortgetIntrested(b), isAsc);

         

        default: return 0;
      }
    });
  }

  sortgetLike(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetShare(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetComment(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetSave(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetDownload(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetApply(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetCall(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetCallMeBAck(a){
      let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetIntrested(a){
       let value=0
      let data
      if(a.sectionName && a.categoryName && !a.subCategoryName){
        data= this.contentData.filter(arg=>arg.categoryId==a._id)

      }else if (a.sectionName && !a.categoryName && !a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.sectionId==a._id)  // code...
      }else if (a.sectionName && a.categoryName && a.subCategoryName) {
      data= this.contentData.filter(arg=>arg.subCategoryId==a._id)  // code...
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
    sortgetAvgTime(totalTime,totalSessions){
  if(totalTime && totalSessions){
     let hourse
    let min
    if (totalTime>60) {
       let totalmin=Math.floor(totalTime/60);
       let totalminPerSession=Math.floor(totalmin/totalSessions);
       if (totalminPerSession>60) {
          hourse=Math.floor(totalminPerSession/60)
          min=totalminPerSession%60
          return hourse
       }else{
           return totalminPerSession
       }
    }
    else{
        return 0
    }
  }else{
    return 0
  }
}

sortgetTotalTime(totalTime){
    let hourse
    let min
    if (totalTime>60) {
       let totalmin=Math.floor(totalTime/60);
       if (totalmin>60) {
          hourse=Math.floor(totalmin/60)
          min=totalmin%60
          return hourse
       }else{
           return totalmin
       }
    }
    else{
        return 0
    }

}
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
