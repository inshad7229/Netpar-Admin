import { Component, OnInit,ViewContainerRef,ViewChild,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {DndModule} from 'ng2-dnd';
import {ColorPickerService} from 'angular4-color-picker';
import {MatSort} from '@angular/material';
import {DataTableModule} from "angular2-datatable";
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
    filterStatus=[]
    sortListToHomePage=[];
    sortListToCategoryPage=[];
    editContent=[];
    status=[
      {
        _id:"saveAsDraftStatus",
        value:"Draft"

      },
      {
        _id:"rejectStatus",
        value:"Rejected"

      },
      {
        _id:"sendForRevisionStatus",
        value:"Revision"

      },
      {
        _id:"publishLaterStatus",
        value:"Scheduled"

      },
      {
        _id:"publishStatus",
        value:"Published"

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
    saveAsDraftStatus:boolean;
    rejectStatus:boolean;
    sendForRevisionStatus:boolean;
    publishLaterStatus:boolean;
    publishStatus:boolean;
    stringResource:StringResource=new  StringResource()
  constructor(private dialog: MatDialog, private cpService: ColorPickerService,
            private sanitizer: DomSanitizer,private fb: FormBuilder, private router: Router,
            vcr: ViewContainerRef,
            public toastr: ToastsManager,
            private http: Http,
            private sectionService:SectionService,
            private appProvider: AppProvider,
            private adminService:AdminService,
            private commentService:CommentService) { }

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

  	}
      getAllComment(){
          this.waitLoader = true;
         this.commentService.onAllCommment()
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success==true) {
                      // code...
                      this.commentData=data.response;
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

  onDelete(data){
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
            this.contentList=this.contentBackup.slice(0)
        }  
  
}
