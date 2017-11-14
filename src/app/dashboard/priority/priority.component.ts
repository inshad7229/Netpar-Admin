import { Component, OnInit,ViewContainerRef,ViewChild,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { PriorityDialogComponent } from './priority-dialog/priority-dialog.component';
declare var jquery:any;
declare var $ :any;
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {AddContentRequest} from '../../models/content.modal'
import {AppProvider} from '../../providers/app.provider'
import {AdminService} from '../../providers/admin.service'
import {ContentService} from '../../providers/content.service'

import {ContentViewPriorityDialogComponent } from './content-view-priority-dialog/content-view-priority-dialog.component';
import { ViewContentComponent,ContentConfirmation } from '../view-content/view-content.component';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
  providers:[ContentService,AdminService,SectionService]
})
export class PriorityComponent implements OnInit {
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
        this.getList();

    }
    openDialog(): void {
        let dialogRef = this.dialog.open(PriorityDialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
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
          
        });
   
    }
    getList(){

     this.waitLoader = true;
     this.contentService.onGetPageWiseContent('sortlistForHomepage')
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.contentList=data.response
                        // this.localAdminList=data.response;
                   // console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
           })
       }
   onView(content){
     let dialogRef = this.dialog.open(ContentViewPriorityDialogComponent, {
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
                        if (data.success == false) {
                           this.waitLoader =false;
                            this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                toastLife: 3000,
                                showCloseButton: true
                            });
                        }
                        else if (data.success == true) {
                          this.selectedId=[]
                            this.waitLoader =false;
                           this.toastr.success(data.msg, 'Content  Edited. ', {
                                toastLife: 3000,
                                showCloseButton: true
                            });
                           this.getList()
                        }
                },error=>{
                    alert(error)
           })
  }
  setPriority(a) {
     this.waitLoader = true;
     this.contentService.onPriorityHomepage(a)
            .subscribe(data =>{
                         if (data.success == false) {
                           this.waitLoader =false;
                            this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                toastLife: 3000,
                                showCloseButton: true
                            });
                        }
                        else if (data.success == true) {
                          this.selectedId=[]
                            this.waitLoader =false;
                           this.toastr.success(data.msg, 'Content  Edited. ', {
                                toastLife: 3000,
                                showCloseButton: true
                            });
                           this.getList()
                        }
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
                          this.selectedId=[]
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
    
}
