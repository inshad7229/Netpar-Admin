import { Component, OnInit,ViewContainerRef,ViewChild,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
declare var jquery:any;
declare var $ :any;
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {AddContentRequest} from '../../models/content.modal'
import {AppProvider} from '../../providers/app.provider'
import {AdminService} from '../../providers/admin.service'
import {ContentService} from '../../providers/content.service'

import {ContentViewHomeDialogComponent} from './content-view-home-dialog/content-view-home-dialog.component';
import { ViewContentComponent,ContentConfirmation } from '../view-content/view-content.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers:[ContentService,AdminService,SectionService]
})
export class HomepageComponent implements OnInit {
    waitLoader
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
    stringResource:StringResource=new  StringResource()
  constructor(private dialog: MatDialog,
             private fb: FormBuilder,
              private router: Router,
            vcr: ViewContainerRef,
            public toastr: ToastsManager,
            private http: Http,
            private sectionService:SectionService,
            private appProvider: AppProvider,
            private adminService:AdminService,
            private contentService:ContentService) {
                 this.toastr.setRootViewContainerRef(vcr);
                this.filterValue={}
                this.filterRequest={}
                this.sendData={} 
            }
  openDialog(flag) {
    let dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '400px',
      data:{
        flag:flag,
        ids:this.selectedId,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
       if (result) {
         
         if (result.flag=='forhomepage') {
           let date={
               homepagePriorityEndDate:result.endDate,
               homepagePriorityStartDate:result.startDate 
          }
         let a= {
             ids:this.selectedId,
             dates:date
         }
            this.setPriority(a)
         }else if (result.flag=='forcategorypage') {
            let date={
               categoryPriorityStartDate:result.startDate,
               categoryPriorityEndDate:result.endDate 
          }
         let a= {
             ids:this.selectedId,
             dates:date
         }
          this.setPriorityCategory(a)
         }
       }
    });
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
    
    this.getList()
    this.getSectionList()
	}
  getList(){
     this.waitLoader = true;
     this.contentService.onGetPageWiseContent('sortlistForHomepage')
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.contentList=data.response
                        this.contentBackup=data.response.slice(0)
                        this.contentListBackup=data.response.slice(0)
                        // this.localAdminList=data.response;
                   // console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
           })
  }
  onView(content){
     let dialogRef = this.dialog.open(ContentViewHomeDialogComponent, {
            width: '400px',
            data:{forContent:content}
        });

        dialogRef.afterClosed().subscribe(result => {
          
        });
  }
  onCheckBox(_id){
 // alert(_id)
      if (this.selectedId.indexOf(_id)==-1) {
           this.selectedId.push(_id)
       }else{
         let index=this.selectedId.indexOf(_id)
         console.log(index)
         let a=this.selectedId.splice(index,1)
       }
  //this.selectedId.push(_id)
 }
 setPriorityCategory(a) {
     this.waitLoader = true;
     this.contentService.onPriorityOnCategorypage(a)
            .subscribe(data =>{
                        this.waitLoader = false;
                       // this.contentList=data.response
                        // this.localAdminList=data.response;
                   // console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
           })
  }
  setPriority(a) {
     this.waitLoader = true;
     this.contentService.onPriorityHomepage(a)
            .subscribe(data =>{
                        this.waitLoader = false;
                       // this.contentList=data.response
                        // this.localAdminList=data.response;
                   // console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
           })
  }

   onEditMultipal(flag ){
  
     let dialogRef = this.dialog.open(ContentConfirmation, {
            width: '400px',
            data:{flag:flag}
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result=='yes') {
              this.waitLoader =true;
              this.contentService.onEditContentMultipal(flag,this.selectedId)
              .subscribe(data => {
                     if (data.success == false) {
                           this.waitLoader =false;
                            this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                toastLife: 3000,
                                showCloseButton: true
                            });
                        }
                        else if (data.success == true) {
                            this.waitLoader =false;
                           this.toastr.success(data.msg, 'Content  Edited. ', {
                                toastLife: 3000,
                                showCloseButton: true
                            });
                           this.getList()
                        }
                },error=>{
                    this.waitLoader =false;
                    alert(error)
                })
              }
           }); 
             
      }
  onEdit(data){
    this.appProvider.current.actionFlag="editContent"
    this.appProvider.current.currentContentData=data;
    this.router.navigate(['/add-content'],{ skipLocationChange: true });
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
   onselectSate(state){
 // alert(state)
  let filterData=[]
  this.selectedSate=state;
  console.log(state)
  if (state.length>0) {
      for (let i =0 ;i<state.length;i++) {
         filterData.push(this.contentListBackup.filter(arg=>arg.applicableStateLists.indexOf(state[i])!=-1))
       }
       this.contentList=filterData[0]
       this.contentAfterState=this.contentList.slice(0)
   }else{
      this.contentList=this.contentListBackup
      this.contentAfterState=this.contentList.slice(0)
   }
   if (this.filterValue.language) {
       this.contentList=this.contentList.filter(arg=>arg.language==this.filterValue.language)
   }

}
onselectLang(language){
  let filterData=[]
 if (this.filterValue.state && this.filterValue.state.length>0) {
      for (let i =0 ;i<this.filterValue.state.length;i++) {
         filterData.push(this.contentListBackup.filter(arg=>arg.applicableStateLists.indexOf(this.filterValue.state[i])!=-1))
       }
       this.contentList=filterData[0]
       this.contentAfterState=this.contentList.slice(0)
   }else{
      this.contentList=this.contentListBackup
       this.contentAfterState=this.contentList.slice(0)
   }
   if (this.filterValue.language) {
       this.contentList=this.contentList.filter(arg=>arg.language==this.filterValue.language)
   }
  this.filterLanguageSingle=language;
 // this.contentList=this.contentListBackup.filter(arg=>arg.language==language)
}
   openFilter(){
     if (this.filterValue.language) {
        for (let i=0;i<this.stringResource.language.length;i++) {
               if (this.stringResource.language[i].language==this.filterValue.language) {
                 // code...
                   this.stringResource.language[i].check=true
               }else{
                   this.stringResource.language[i].check=false
               }
            }
     }
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
  forStatus(stat){
    if (stat.check==true) {
      // this.filterStatus.push(stat._id)
      if (stat._id=='saveAsDraftStatus') {
        this.filterRequest.saveAsDraftStatus=true;
      }
      if (stat._id=='rejectStatus') {
        this.filterRequest.rejectStatus=true;
      }
      if (stat._id=='sendForRevisionStatus') {
        this.filterRequest.sendForRevisionStatus=true;
      }
      if (stat._id=='publishLaterStatus') {
        this.filterRequest.publishLaterStatus=true;
      }
      if (stat._id=='publishStatus') {
        this.filterRequest.publishStatus=true;
      }
     //this.getCategory(subCat._id)
    }else{
      if (stat._id=='saveAsDraftStatus') {
        delete(this.filterRequest.saveAsDraftStatus);
      }
      if (stat._id=='rejectStatus') {
        delete(this.filterRequest.rejectStatus);
      }
      if (stat._id=='sendForRevisionStatus') {
        delete(this.filterRequest.sendForRevisionStatus);
      }
      if (stat._id=='publishLaterStatus') {
        delete(this.filterRequest.publishLaterStatus);
      }
      if (stat._id=='publishStatus') {
        delete(this.filterRequest.publishStatus);
      }
    }
  }

  forstatusPriority(stat){
    if (stat.check==true) {
      // this.filterStatus.push(stat._id)
      if (stat._id=='activePriority') {
        this.filterRequest.activePriority=true;
      }
      if (stat._id=='completed') {
        this.filterRequest.completed=true;
      }
      if (stat._id=='scheduledcontent') {
        this.filterRequest.future=true;
      }
      
     //this.getCategory(subCat._id)
    }else{
      if (stat._id=='activePriority') {
        delete(this.filterRequest.activePriority);
      }
      if (stat._id=='completed') {
        delete(this.filterRequest.completed);
      }
      if (stat._id=='scheduledcontent') {
        delete(this.filterRequest.future);
      }
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
                            this.toastr.error(data.msg, 'Data Filter Failed. ', {
                                toastLife: 3000,
                                showCloseButton: true
                            });
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
        onClearDraftFilter(status){
            this.contentList=this.contentList.filter(arg=>arg.saveAsDraftStatus!=status)
            this.saveAsDraftStatus=false;
        }
        onClearRejectFilter(status){
            this.contentList=this.contentList.filter(arg=>arg.rejectStatus!=status)
            this.rejectStatus=false;
        }
        onClearRevisionFilter(status){
            this.contentList=this.contentList.filter(arg=>arg.sendForRevisionStatus!=status)
            this.sendForRevisionStatus=false;
        }
        onClearScheduledFilter(status){
            this.contentList=this.contentList.filter(arg=>arg.publishLaterStatus!=status)
            this.publishLaterStatus=false;
        }
        onClearPublishedFilter(status){
            this.contentList=this.contentList.filter(arg=>arg.publishStatus!=status)
            this.publishStatus=false;
        }
        onClearSingleFilter(filterLanguageSingle){
          this.filterLanguageSingle=null
          this.filterValue.language=null
          if (this.contentAfterState && this.contentAfterState.length>0) {
             this.contentList=this.contentAfterState.slice(0)
            // code...
          }else{
             this.contentList=this.contentListBackup.slice(0)
          }
        }
        onClearactivePriorityFilter(activePriority){
            this.activePriority=false
        }
        onClearcompletedFilter(completed){
            this.completed=false
        }
        onClearfutureFilter(future){
            this.future=false
        }
        onClearStateFilter(state){
          if (this.selectedSate.length>0) {
                 if (this.contentAfterState && this.contentAfterState.length>0) {
                     this.contentList=this.contentListBackup.filter(arg=>arg.applicableStateLists.indexOf(state)==-1)
                  }else{
                    this.contentList=this.contentList.filter(arg=>arg.applicableStateLists.indexOf(state)==-1)
                 }
                let index=this.selectedSate.indexOf(state)
                let a=this.selectedSate.splice(index,1)
                // let index2=this.filterValue.state.indexOf(state)
                // let b=this.filterValue.state.splice(index2,1)
                //this.filterValue.state=this.filterValue.state.toString()
          }else{
               this.contentList=this.contentListBackup
          }
         
        }
        clearAll(){
            this.filterLanguageFilterPan=[]
            this.filterSectionFilterPan=[]
            this.filterCategoryFilterPan=[]
            this.filterSubcategoryFilterPan=[]
            this.saveAsDraftStatus=false;
            this.rejectStatus=false;
            this.sendForRevisionStatus=false;
            this.publishLaterStatus=false;
            this.publishStatus=false;
            this.filterLanguageSingle=null
            this.selectedSate=null
            this.filterValue.state=null
            this.filterValue.language=null
            this.activePriority=false
            this.completed=false
            this.future=false
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
