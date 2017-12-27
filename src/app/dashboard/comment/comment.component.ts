import { Component, OnInit,ViewContainerRef,ViewChild,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {DndModule} from 'ng2-dnd';
// import {ColorPickerService} from 'angular4-color-picker';
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
import {CommentService} from '../../providers/comment.service'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers:[CommentService,AdminService,SectionService]
})
export class CommentComponent implements OnInit {
   commentData:any;
   waitLoader:boolean
    id=[]
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
    filterSectionName=[]
    filterCategoryName=[]
    filterSubcategoryName=[]
    filterLanguage=[];
    filterStatus=[]
    status=[
      {
        _id:"Needtoreview",
        value:"Need to review",
        check:false

      },
      {
        _id:"Reviewed",
        value:"Reviewed",
        check:false

      },
      {
        _id:"Deleted",
        value:"Deleted",
        check:false

      }
    ]
    contentBackup:any;
    filterData:any;
    filterRequest:any;
    showFilterPan:boolean=false;
    filterLanguageFilterPan:any;
    filterSectionFilterPan:any;
    filterCategoryFilterPan:any;
    filterSubcategoryFilterPan:any;
    Reviewed:boolean;
    Deleted:boolean;
    Needtoreview:boolean;
    commentList
    commentBackup
    commentListBackup
    limitedFilter
    limit
    filterApplyStatus:boolean=false
    stringResource:StringResource=new  StringResource()
  constructor(private dialog: MatDialog, 
            private sanitizer: DomSanitizer,private fb: FormBuilder, private router: Router,
            vcr: ViewContainerRef,
            public toastr: ToastsManager,
            private http: Http,
            private sectionService:SectionService,
            private appProvider: AppProvider,
            private adminService:AdminService,
            private commentService:CommentService) {
    this.toastr.setRootViewContainerRef(vcr);
            this.filterValue={}
                this.filterRequest={}  
                this.limitedFilter={}
                this.limitedFilter.perPage='25'
                this.limit=25
              }

  	ngOnInit() {
       this.getAllComment()
       this.getSectionList()
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

  	}
      getAllComment(){
          this.waitLoader = true;
         this.commentService.onAllCommment()
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success==true) {
                      // code...
                      this.commentData=data.response.filter(arg=>arg.deleteStatus==false);
                      this.commentList=data.response.filter(arg=>arg.deleteStatus==false)
                      this.commentListBackup=this.commentList.slice(0); 
                    }
                    
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                })
  }
  getTime(date){
    return date.split('T')[1].substring(0, 5)
  }

  getDate(date){
   return date.split('T')[0]
  }

  onCheck(data){
    if (data.check==true) {
      this.id.push(data._id)
    }else{
      if (this.id.indexOf(data._id)!=-1) {
        let index=this.id.indexOf(data)
        this.id.splice(index,1)
      }
    }
   console.log(JSON.stringify(data))
  }
  onReviewed(){
     this.waitLoader = true;
    let a={
      _id:this.id
    }
     this.commentService.onCommmentReviewed(a)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success==true) {
                      // code...
                      this.getAllComment()
                    }
                    
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                })
    
  }
  openDialog(data): void {
    let dialogRef = this.dialog.open(CommentConfirmation, {
      width: '250px',
      data:{comment:data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // alert('closed')
      // alert(JSON.stringify(result))
      if (result) {
          // code...
        this.onDelete(result)
      }
     // this.animal = result;
    });
  }
  onDelete(data){
     this.waitLoader = true;
    let b=[]
    b.push(data._id)
   let a={
     _id:b
   }
     this.commentService.onDelete(a,data.articleId)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success==true) {
                      // code...
                      this.getAllComment()
                    }
                    
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                })
   }
    getSectionList(){
        this.waitLoader = true;
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
      this.filterSection.push(sec)
      this.filterSectionName.push(sec.sectionName)
      this.getCategory(sec._id)
    }else{
      this.categories=this.categories.filter(arg=>arg.sectionId != sec._id)
      this.subCategory=this.subCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSection=this.filterSection.filter(arg=>arg._id != sec._id)
      this.filterSectionName=this.filterSectionName.filter(arg=>arg != sec.sectionName)
      this.filterCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.sectionId != sec._id)
    }
  }
  forCategory(cat){
    console.log(JSON.stringify(cat))
    if (cat.check==true) {
      this.filterCategory.push(cat)
      this.filterCategoryName.push(cat.categoryName)
      this.getsubCategory(cat.sectionId,cat._id)
    }else{
      this.filterCategory.filter(arg=>arg._id!=cat._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.categoryId!=cat._id)
      this.subCategory=this.subCategory.filter(arg=>arg.categoryId!=cat._id)
      this.filterCategoryName=this.filterCategoryName.filter(arg=>arg!=cat.categoryName)

    }
  }
  forSubCategory(subCat){
    if (subCat.check==true) {
      this.filterSubcategory.push(subCat)
      this.filterSubcategoryName.push(subCat.subCategoryName)
     //this.getCategory(subCat._id)
    }else{
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg._id!=subCat._id)
      this.filterSubcategoryName=this.filterSubcategoryName.filter(arg=>arg!=subCat.subCategoryName)
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
      if (stat._id=='Reviewed') {
        this.filterRequest.Reviewed='Reviewed';
      }
      if (stat._id=='Deleted') {
        this.filterRequest.Deleted=true;
      }
      if (stat._id=='Needtoreview') {
        this.filterRequest.Needtoreview='Need to review';
      }
     //this.getCategory(subCat._id)
    }else{
      if (stat._id=='Reviewed') {
        delete(this.filterRequest.Reviewed);
      }
      if (stat._id=='Deleted') {
        delete(this.filterRequest.Deleted);
      }
      if (stat._id=='Needtoreview') {
        delete(this.filterRequest.Needtoreview);
      }
      
    }
  }
  onApplyFilter(){
        let demo=[]
        let status=[]
          if (this.filterLanguage.length>0 ) {
          this.filterRequest.language={
             $in:this.filterLanguage
           }
            demo.push({language:this.filterRequest.language})
          }else{
            delete(this.filterRequest.language)
          }

          if (this.filterSectionName.length>0) {
            // code...
              this.filterRequest.sectionName={
               $in:this.filterSectionName
            }
             demo.push({sectionName:this.filterRequest.sectionName})
          }else{
            delete(this.filterRequest.sectionName)
          }
          if (this.filterCategoryName.length>0) {
            // code...
            let categoryName=this.filterCategoryName
            // for(let i=0;i<this.filterCategory.length;i++){
            //   category.push(this.filterCategory[i]._id)
            // }
           this.filterRequest.categoryName={
             $in:categoryName}
              demo.push({categoryName:this.filterRequest.categoryName})
          }else{
            delete(this.filterRequest.categoryName)
          }
          if (this.filterSubcategoryName.length>0 ) {
            let subCategory=this.filterSubcategoryName
            // for(let i=0;i<this.filterSubcategory.length;i++){
            //   subCategory.push(this.filterSubcategory[i]._id)
            // }
          this.filterRequest.subCategoryName=
           {$in:subCategory}
           demo.push({subCategoryName:this.filterRequest.subCategoryName})
          }else{
            delete(this.filterRequest.subCategoryName)
          }

           if(this.filterRequest.Needtoreview){
                 status.push(this.filterRequest.Needtoreview)
            }
            if(this.filterRequest.Reviewed){
               status.push(this.filterRequest.Reviewed)
              
            }
          if (status.length>0) {
           this.filterRequest.status=
           {$in:status}
           demo.push({status:this.filterRequest.status})
          }else{
            delete(this.filterRequest.status)
          }
          let demo2=[];
          demo2.push({$or:demo})
          // if (this.filterRequest.Deleted) {
          //  demo2.push({deleteStatus:true})
          //   // code...
          // }else{
          //   demo2.push({deleteStatus:false})
          // }
           let demo3={
             $and:demo2
           }
         this.waitLoader =true;
              this.commentService.onApplyFilter(demo3)
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
                          this.filterApplyStatus=true
                           //this.commentList=data.response;
                           if (this.filterRequest.Deleted) {
                            this.commentList=data.response.filter(arg=>arg.deleteStatus==true)
                           }else{
                            this.commentList=data.response.filter(arg=>arg.deleteStatus==false)
                           }
                           this.commentListBackup=data.response.slice(0);
                           this.filterLanguageFilterPan=this.filterLanguage.slice(0);
                           this.filterSectionFilterPan=this.filterSection.slice(0);
                           this.filterCategoryFilterPan=this.filterCategory.slice(0);
                           this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
                            if(this.filterRequest.Needtoreview){
                                 this.Needtoreview=true; 
                            }
                            if(this.filterRequest.Reviewed){
                               this.Reviewed=true;
                              
                            }
                            if(this.filterRequest.Deleted){
                                   this.Deleted=true;
                              
                            }

                        }
                },error=>{
                    this.waitLoader =false;
                    alert(error)
              })
        }
      
        onClearLangFilter(lang){
          this.commentList=this.commentList.filter(arg=>arg.language!=lang)
          this.filterLanguageFilterPan=this.filterLanguageFilterPan.filter(arg=>arg!=lang)
        }
        onClearSectionFilter(sec){
            this.commentList=this.commentList.filter(arg=>arg.sectionName!=sec.sectionName) 
            this.filterSectionFilterPan=this.filterSectionFilterPan.filter(arg=>arg._id!=sec._id)         
        }
        onClearCategoryFilter(cat){
          console.log(JSON.stringify(this.filterCategoryFilterPan))
            this.commentList=this.commentList.filter(arg=>arg.categoryName!=cat.categoryName)
            this.filterCategoryFilterPan=this.filterCategoryFilterPan.filter(arg=>arg._id!=cat._id)
        }
        onClearSubCategoryFilter(subCat){
            this.commentList=this.commentList.filter(arg=>arg.subCategoryName!=subCat.subCategoryName)
            this.filterSubcategoryFilterPan=this.filterSubcategoryFilterPan.filter(arg=>arg._id!=subCat._id)
        }
        onClearReviewedFilter(status){
            this.commentList=this.commentList.filter(arg=>arg.status!=status)
            this.Reviewed=false;
        }
        onClearDeletedFilter(status){
            this.commentList=this.commentListBackup.filter(arg=>arg.deleteStatus==false)
            this.Deleted=false;
        }
        onClearNeedtoreviewFilter(status){
            this.commentList=this.commentList.filter(arg=>arg.status!=status)
            this.Needtoreview=false;
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
            this.filterSectionName=[]
            this.filterCategoryName=[]
            this.filterSubcategoryName=[]
            this.Reviewed=false;
            this.Deleted=false;
            this.Needtoreview=false;
            this.filterApplyStatus=false
            this.commentList=this.commentBackup.slice(0)
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
        this.limit=this.commentList.length
        // code...
      }
    }
onRange(range){
  //alert(range)
  if (this.filterApplyStatus) {
     this.commentList=this.commentListBackup.filter(arg=>this.getStatus(arg.dateOfComment,range)==true)
  }else{
    this.commentList=this.commentData.filter(arg=>this.getStatus(arg.dateOfComment,range)==true) 
  }
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
  
}



@Component({
  selector: 'admin-confirmation-dialog',
  templateUrl: 'confirmation.html',
  providers: [CommentService,AdminService,SectionService]
})

export class CommentConfirmation {
   

  constructor(
    public dialogRef: MatDialogRef<CommentConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router,
        private sectionService:SectionService,
        private appProvider: AppProvider,
        private adminService:AdminService,
        private commentService:CommentService,
        public dialog: MatDialog) {
       }

  onYesClick(): void {
    this.dialogRef.close(this.data.comment);
    // this.homePage.onDelete(this.data.admin)
  }
   onNoClick(): void {
    this.dialogRef.close();
  }


 

}