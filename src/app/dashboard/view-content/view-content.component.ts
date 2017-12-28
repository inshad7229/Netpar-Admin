import { Component, OnInit,ViewContainerRef,ViewChild,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {DndModule} from 'ng2-dnd';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
// import {ColorPickerService} from 'angular4-color-picker';

import { NgxCroppieComponent } from 'ngx-croppie';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { ContentViewDialogComponent } from './content-view-dialog/content-view-dialog.component';

import {MatSort} from '@angular/material';
// import {DataTableModule} from "angular2-datatable";
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {AddContentRequest} from '../../models/content.modal'
import {AppProvider} from '../../providers/app.provider'
import {AdminService} from '../../providers/admin.service'
import {ContentService} from '../../providers/content.service'
import {UserService} from '../../providers/user.service';
import {ExcelService} from '../../providers/excel/excel.service';
import { Sort } from '@angular/material';
// import Clipboard from 'clipboard';
import {Clipboard} from 'ts-clipboard';
import { forkJoin } from "rxjs/observable/forkJoin";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss'],
  providers:[ContentService,AdminService,SectionService,UserService,ExcelService]
})
export class ViewContentComponent implements OnInit {
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
    limit:number
    limitedFilter
    filterApplyStatus:boolean=false
    dataForSorting:any
    userData
    stringResource:StringResource=new  StringResource()
  	constructor(private dialog: MatDialog,
            private sanitizer: DomSanitizer,private fb: FormBuilder, private router: Router,
            vcr: ViewContainerRef,
            public toastr: ToastsManager,
            private http: Http,
            private sectionService:SectionService,
            private appProvider: AppProvider,
            private adminService:AdminService,
            private contentService:ContentService,
            private userProvider:UserService,
            private excelService: ExcelService) {

                this.toastr.setRootViewContainerRef(vcr);
                this.filterValue={}
                this.filterRequest={} 
                this.limitedFilter={}
                this.limitedFilter.perPage='25'
                this.limit=25
              }
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    // exampleDatabase = new ExampleDatabase();
    // dataSource:  ExampleDataSourceSort | null;
    // dataSourceSort: ExampleDataSourceSort | null;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    ngOnInit() {
      this.appProvider.current.actionFlag="menu"
        $('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
           // console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });
         $(window).on('click', function (e) {
            e.stopPropagation();
            var $trigger = $(".cusdropdown-toggle").closest('.dropdown');
            console.log($trigger);
            if ($trigger !== e.target && !$trigger.has(e.target).length) {
                $('.cusdropdown-toggle').closest('.dropdown').removeClass('open');
            }
            var $trigger = $(".sidebar-filter").closest('.filter-plugin');
            console.log($trigger);
            if($trigger !== e.target && !$trigger.has(e.target).length){
                $('.sidebar-filter').closest('.filter-plugin').removeClass('open');
            }
        });
        //this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
       // this.dataSource = new ExampleDataSourceSort(this.exampleDatabase, this.sort);
        this.getList()
        this.getSectionList()
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(ViewDialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          
        });
    }
    getList(){
      this.waitLoader = true;
     forkJoin([  this.contentService.ongetContentList(),this.userProvider.onGetAllUser()])
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.contentBackup=data[0].response.filter(arg=>arg.deleteStatus!=true);;
                        this.contentList=data[0].response.filter(arg=>arg.deleteStatus!=true);
                        this.dataForSorting=data[0].response.filter(arg=>arg.deleteStatus!=true);
                         this.userData=data[1].response;
                        this.contentListBackup=this.contentList.slice(0);        
                        // this.localAdminList=data.response;
                   // console.log(JSON.stringify(data))
                },error=>{
                    this.waitLoader =false;
                    alert(error)
           })
  }
  onView(content){
     let dialogRef = this.dialog.open(ContentViewDialogComponent, {
            width: '400px',
            data:{forContent:content}
        });

        dialogRef.afterClosed().subscribe(result => {
          
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
                    this.categoriesBack=data.response.filter(arg=>arg.deleteStatus!=true && arg.status==true && arg.publishStatus==true );;
                    if (data.response.length==0) {
                      this.toastr.info('This section do not have any category')
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
                    this.subCategoryBack=data.response.filter(arg=>arg.deleteStatus!=true && arg.status==true && arg.publishStatus==true );;
                    if (data.response.length==0) {
                      this.toastr.info('This category do not have any subcategory')
                      // code...
                    }
                    this.subCategory=this.subCategory.concat(this.subCategoryBack)
                   // console.log(JSON.stringify(data))
                },error=>{
                     this.waitLoader =false;
                    alert(error)
                }) 
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
  onEditMultipal(flag ,data){
    this.editContent=[]
    if (data) {
        for (let i=0;i<data.length;i++) {
        if(data[i].editcheck==true){
          this.editContent.push(data[i]._id)
        }
      }
    }
     let dialogRef = this.dialog.open(ContentConfirmation, {
            width: '400px',
            data:{flag:flag}
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result=='yes') {
              this.waitLoader =true;
              this.contentService.onEditContentMultipal(flag,this.editContent)
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
      onApplyFilter(){
        // let demo=[]
        //   if (this.filterLanguage.length>0 ) {
        //   this.filterRequest.language={
        //      $in:this.filterLanguage
        //    }
        //     demo.push({language:this.filterRequest.language})
        //   }else{
        //     delete(this.filterRequest.language)
        //   }

        //   if (this.filterSection.length>0) {
        //     // code...
        //       this.filterRequest.sectionId={
        //        $in:this.filterSection
        //     }
        //      demo.push({sectionId:this.filterRequest.sectionId})
        //   }else{
        //     delete(this.filterRequest.sectionId)
        //   }
        //   if (this.filterCategory.length>0) {
        //     // code...
        //     let category=[]
        //     for(let i=0;i<this.filterCategory.length;i++){
        //       category.push(this.filterCategory[i]._id)
        //     }
        //    this.filterRequest.categoryId={
        //      $in:category}
        //       demo.push({categoryId:this.filterRequest.categoryId})
        //   }else{
        //     delete(this.filterRequest.categoryId)
        //   }
        //   if (this.filterSubcategory.length>0 ) {
        //     let subCategory=[]
        //     for(let i=0;i<this.filterSubcategory.length;i++){
        //       subCategory.push(this.filterSubcategory[i]._id)
        //     }
        //   this.filterRequest.subCategoryId=
        //    {$in:subCategory}
        //    demo.push({subCategoryId:this.filterRequest.subCategoryId})
        //   }else{
        //     delete(this.filterRequest.subCategoryId)
        //   }

        //    if(this.filterRequest.saveAsDraftStatus){
        //          demo.push({saveAsDraftStatus:this.filterRequest.saveAsDraftStatus})
        //     }
        //     if(this.filterRequest.rejectStatus){
        //        demo.push({rejectStatus:this.filterRequest.rejectStatus})
              
        //     }
        //     if(this.filterRequest.sendForRevisionStatus){
        //            demo.push({sendForRevisionStatus:this.filterRequest.sendForRevisionStatus})
              
        //     }
        //     if(this.filterRequest.publishLaterStatus){
        //           demo.push({publishLaterStatus:this.filterRequest.publishLaterStatus})
              
        //     }
        //     if(this.filterRequest.publishStatus){
        //         demo.push({publishStatus:this.filterRequest.publishStatus})
        //     }
      



        let demo=[]
          if (this.filterLanguage.length>0 ) {
          this.filterRequest.language=this.filterLanguage
            //demo.push({language:this.filterRequest.language})
          }else{
            delete(this.filterRequest.language)
          }

          if (this.filterSection.length>0) {
            // code...
              this.filterRequest.sectionId=this.filterSection
        
             //demo.push({sectionId:this.filterRequest.sectionId})
          }else{
            delete(this.filterRequest.sectionId)
          }
          if (this.filterCategory.length>0) {
            // code...
            let category=[]
            for(let i=0;i<this.filterCategory.length;i++){
              category.push(this.filterCategory[i]._id)
            }
           this.filterRequest.categoryId=category
              //demo.push({categoryId:this.filterRequest.categoryId})
          }else{
            delete(this.filterRequest.categoryId)
          }
          if (this.filterSubcategory.length>0 ) {
            let subCategory=[]
            for(let i=0;i<this.filterSubcategory.length;i++){
              subCategory.push(this.filterSubcategory[i]._id)
            }
          this.filterRequest.subCategoryId=subCategory
           // {$in:subCategory}
           // demo.push({subCategoryId:this.filterRequest.subCategoryId})
          }else{
            delete(this.filterRequest.subCategoryId)
          }

           if(this.filterRequest.saveAsDraftStatus){
                 demo.push({saveAsDraftStatus:this.filterRequest.saveAsDraftStatus})
            }
            if(this.filterRequest.rejectStatus){
               demo.push({rejectStatus:this.filterRequest.rejectStatus})
              
            }
            if(this.filterRequest.sendForRevisionStatus){
                   demo.push({sendForRevisionStatus:this.filterRequest.sendForRevisionStatus})
              
            }
            if(this.filterRequest.publishLaterStatus){
                  demo.push({publishLaterStatus:this.filterRequest.publishLaterStatus})
              
            }
            if(this.filterRequest.publishStatus){
                demo.push({publishStatus:this.filterRequest.publishStatus})
            }
      
          let demo2=[];
          // demo2.push({$or:demo})
          demo2.push(demo)
           demo2.push({deleteStatus:false})
           let demo3={
             $and:demo2
           }
         this.filterRequest.deleteStatus=false
         this.waitLoader =true;
              this.contentService.onApplyFilter(this.filterRequest)
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
                           this.dataForSorting=data.response;
                           this.contentListBackup=this.contentList.slice(0);
                           this.filterLanguageFilterPan=this.filterLanguage.slice(0);
                           this.filterSectionFilterPan=this.filterSection.slice(0);
                           this.filterCategoryFilterPan=this.filterCategory.slice(0);
                           this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
                           this.filterApplyStatus=true
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
            this.filterLanguage=[]
            this.filterSection=[]
            this.filterCategory=[]
            this.filterSubcategory=[]
            this.saveAsDraftStatus=false;
            this.rejectStatus=false;
            this.sendForRevisionStatus=false;
            this.publishLaterStatus=false;
            this.publishStatus=false;
            this.filterLanguageSingle=null
            this.selectedSate=null
            this.filterValue.state=null
            this.filterValue.language=null
            this.contentListBackup=null
            this.filterApplyStatus=false
            this.filterRequest.saveAsDraftStatus=false
            this.filterRequest.rejectStatus=false
            this.filterRequest.sendForRevisionStatus=false
            this.filterRequest.publishLaterStatus=false
            this.filterRequest.publishStatus=false
            this.contentList=this.contentBackup.slice(0)
            this.dataForSorting=this.contentBackup.slice(0)
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
        }
closedFilter(){
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
   sortData(sort: Sort) {
    //  this.contentBackup
    // this.contentList
    const data =this.dataForSorting.slice();
    if (!sort.active || sort.direction == '') {
      this.contentList = data;
      
      return;
    }

    this.contentList = data.sort((a, b) => {
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
        case 'pageview': return compare(a.pageView, b.pageView, isAsc);
        default: return 0;
      }
    });
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
        this.limit=this.contentList.length
        // code...
      }
    }
onRange(range){
  //alert(range)
  if (this.filterApplyStatus) {
     this.contentList=this.contentListBackup.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true)
  }else{
    this.contentList=this.contentBackup.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true) 
  }
  this.dataForSorting=this.contentList
}
onCopyLink(id){
  let a="http://europa.promaticstechnologies.com/netpar-pwa-dev/#/shareArticle/"+id
  Clipboard.copy(a);
  this.toastr.info('Article link copied,You can share now')
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

onApply(id){
 let contentData=this.contentBackup.filter(arg=>arg._id==id)
  let contentDetails=[]
  let userDetails=[]
  contentDetails.push({'Headline':contentData[0].headline,
                      'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
                      'Section Name':contentData[0].sectionName,
                      'Category Name':contentData[0].categoryName,
                      'SubCategory Name':contentData[0].subCategoryName,
                       })
  for (let i =0;  i < this.userData.length; i++) {
   if(contentData[0].apply.indexOf(this.userData[i]._id)!=-1){
   userDetails.push({
                      'Headline':contentData[0].headline,
                      'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
                      'Section Name':contentData[0].sectionName,
                      'Category Name':contentData[0].categoryName,
                      'SubCategory Name':contentData[0].subCategoryName,
                      'First Name':this.userData[i].firstName,'Last Name':this.userData[i].lastName,
                      'State':this.userData[i].state,'District':this.userData[i].district,
                      'Block':this.userData[i].block,'Mobile Number':this.userData[i].mobileNumber})
   }
  }
  let dialogRef = this.dialog.open(downloadContentConfirmation, {
            width: '380px',
        });

        dialogRef.afterClosed().subscribe(result => {
           if (result=='excel') {
            this.excel(userDetails,'interested')
          }else if (result.flag=='email') {
             this.email(userDetails,'interested',result.email)
          }
   });
}
onCall(id){
  let contentData=this.contentBackup.filter(arg=>arg._id==id)
  let contentDetails=[]
  let userDetails=[]
  contentDetails.push({'Headline':contentData[0].headline,
                      'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
                      'Section Name':contentData[0].sectionName,
                      'Category Name':contentData[0].categoryName
                       })
  for (let i =0;  i < this.userData.length; i++) {
   if(contentData[0].call.indexOf(this.userData[i]._id)!=-1){
    userDetails.push({
                      'Headline':contentData[0].headline,
                      'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
                      'Section Name':contentData[0].sectionName,
                      'Category Name':contentData[0].categoryName,
                      'SubCategory Name':contentData[0].subCategoryName,
                      'First Name':this.userData[i].firstName,'Last Name':this.userData[i].lastName,
                      'State':this.userData[i].state,'District':this.userData[i].district,
                      'Block':this.userData[i].block,'Mobile Number':this.userData[i].mobileNumber})
   }
  }

   let dialogRef = this.dialog.open(downloadContentConfirmation, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
           if (result=='excel') {
            this.excel(userDetails,'interested')
          }else if (result.flag=='email') {
             this.email(userDetails,'interested',result.email)
          }
   });
}
onCallMeBack(id){
  let contentData=this.contentBackup.filter(arg=>arg._id==id)
  let contentDetails=[]
  let userDetails=[]
  contentDetails.push({'Headline':contentData[0].headline,
                      'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
                      'Section Name':contentData[0].sectionName,
                      'Category Name':contentData[0].categoryName,
                      'SubCategory Name':contentData[0].subCategoryName,
                       })
  for (let i =0;  i < this.userData.length; i++) {
   if(contentData[0].callmeback.indexOf(this.userData[i]._id)!=-1){
   userDetails.push({
                      'Headline':contentData[0].headline,
                      'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
                      'Section Name':contentData[0].sectionName,
                      'Category Name':contentData[0].categoryName,
                      'SubCategory Name':contentData[0].subCategoryName,
                      'First Name':this.userData[i].firstName,'Last Name':this.userData[i].lastName,
                      'State':this.userData[i].state,'District':this.userData[i].district,
                      'Block':this.userData[i].block,'Mobile Number':this.userData[i].mobileNumber})
   }
  }

   let dialogRef = this.dialog.open(downloadContentConfirmation, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result=='excel') {
            this.excel(userDetails,'interested')
          }else if (result.flag=='email') {
             this.email(userDetails,'interested',result.email)
          }
   });
//  this.excelService.exportAsExcelFile(contentDetails, userDetails,'callmeback');
//   new Angular2Csv(this.status, 'My Report');
// alert(id)
}
onIntrested (id) {
 
   let contentData=this.contentBackup.filter(arg=>arg._id==id)
  let contentDetails=[]
  let userDetails=[]
  // contentDetails.push({'Headline':contentData[0].headline,
  //                     'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
  //                     'Section Name':contentData[0].sectionName,
  //                     'Category Name':contentData[0].categoryName,
  //                     'SubCategory Name':contentData[0].subCategoryName,
  //                      })
  for (let i =0;  i < this.userData.length; i++) {
     console.log('bahar',this.userData[i]._id)
   if(contentData[0].interested.indexOf(this.userData[i]._id)!=-1){
     console.log('if',this.userData[i]._id)
    userDetails.push({
                      'Headline':contentData[0].headline,
                      'Author':contentData[0].userList[0].firstName+' '+contentData[0].userList[0].firstName,
                      'Section Name':contentData[0].sectionName,
                      'Category Name':contentData[0].categoryName,
                      'SubCategory Name':contentData[0].subCategoryName,
                      'First Name':this.userData[i].firstName,'Last Name':this.userData[i].lastName,
                      'State':this.userData[i].state,'District':this.userData[i].district,
                      'Block':this.userData[i].block,'Mobile Number':this.userData[i].mobileNumber})
   }
  }
 let dialogRef = this.dialog.open(downloadContentConfirmation, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result=='excel') {
            this.excel(userDetails,'interested')
          }else if (result.flag=='email') {
             this.email(userDetails,'interested',result.email)
          }
   });
//  this.excelService.exportAsExcelFile(contentDetails, userDetails,'interested');
//   new Angular2Csv(this.status, 'My Report');
// alert(id)
}
excel(userDetails,fileName){
  console.log(JSON.stringify(userDetails))
    this.excelService.exportAsExcelFileSingle(userDetails,fileName);
  } 
  email(userDetails,fileName,email){
      this.waitLoader = true;
                this.contentService.onEmailExcel(userDetails,fileName,email)
              .subscribe(data => {
                  this.waitLoader = false;
                  
              },error=>{
                  this.waitLoader =false;
                  alert(error)
              })
  }   
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

// /** An example database that the data source uses to retrieve data for the table. */
// export class ExampleDatabase {
//   /** Stream that emits whenever the data has been modified. */
//   dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
//   get data(): UserData[] { return this.dataChange.value; }

//   constructor() {
//     // Fill up the database with 100 users.
//     for (let i = 0; i < 100; i++) { this.addUser(); }
//   }

//   /** Adds a new user to the database. */
//   addUser() {
//     const copiedData = this.data.slice();
//     copiedData.push(this.createNewUser());
//     this.dataChange.next(copiedData);
//   }

//   /** Builds and returns a new User. */
//   private createNewUser() {
//     const name =
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//     return {
//       id: (this.data.length + 1).toString(),
//       name: name,
//       progress: Math.round(Math.random() * 100).toString(),
//       color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//     };
//   }

// }

// export class ExampleDataSource extends DataSource<any> {
//   constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
//     super();
//   }

//   connect(): Observable<UserData[]> {
//     const displayDataChanges = [
//       this._exampleDatabase.dataChange,
//       this._paginator.page,
//     ];

//     return Observable.merge(...displayDataChanges).map(() => {
//       const data = this._exampleDatabase.data.slice();

//       // Grab the page's slice of data.
//       const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
//       return data.splice(startIndex, this._paginator.pageSize);
//     });
//   }

//   disconnect() {}
// }

// export class ExampleDataSourceSort extends DataSource<any> {
//   constructor(private _exampleDatabase: ExampleDatabase, private _sort: MatSort) {
//     super();
//   }

//   connect(): Observable<UserData[]> {
//     const displayDataChanges = [
//       this._exampleDatabase.dataChange,
//       this._sort.sortChange,
//     ];

//     return Observable.merge(...displayDataChanges).map(() => {
//       return this.getSortedData();
//     });
//   }

//   disconnect() {}
//   getSortedData(): UserData[] {
//     const data = this._exampleDatabase.data.slice();
//     if (!this._sort.active || this._sort.direction == '') { return data; }

//     return data.sort((a, b) => {
//       let propertyA: number|string = '';
//       let propertyB: number|string = '';

//       switch (this._sort.active) {
//         case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
//         case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
//         case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
//         case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
//       }

//       let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
//       let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

//       return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
//     });
//   }

// }



@Component({
  selector: 'content-confirmation-dialog',
  templateUrl: 'contentConfirmation.html',
})

export class ContentConfirmation {
   
  msg;
  constructor(
    public dialogRef: MatDialogRef<ContentConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router,
        private appProvider: AppProvider,
        public dialog: MatDialog) {
         if(this.data.flag=='sortlistForHomepage'){
           this.msg='Shortlist to homepage'
          }
          if(this.data.flag=='sortlistForCategory'){
          this.msg='Shortlist to category'
          }
          if(this.data.flag=='delete'){
          this.msg='Delete'
          }
          if (this.data.flag=='removefromHomepage') {
            this.msg='Remove from shortlist from Homepage'
          }
          if (this.data.flag=='removefromCategory') {
            this.msg='Remove from shortlist from CategoryPage'
          }
       }

  onYesClick(): void {
    this.dialogRef.close('yes');
    // this.homePage.onDelete(this.data.admin)
  }
   onNoClick(): void {
    this.dialogRef.close();
  }

 
 

}


@Component({
  selector: 'downloadcontent-confirmation-dialog',
  templateUrl: 'downloadContentConfirmation.html',
})

export class downloadContentConfirmation {
   
  msg;
 emailstatus:boolean=false
 email
  constructor(
    public dialogRef: MatDialogRef<downloadContentConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router,
        private appProvider: AppProvider,
        public dialog: MatDialog) {
      
       }

  onExcel(): void {
    this.dialogRef.close('excel');
    // this.homePage.onDelete(this.data.admin)
  }
   onEmail(): void {
    this.dialogRef.close({email:this.email,flag:'email'});
  }
onEmailPress(){
  this.emailstatus=true
}
onClosed(){
   this.dialogRef.close();
}
 
 

}