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

import { NgxCroppieComponent } from 'ngx-croppie';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { ContentViewDialogComponent } from './content-view-dialog/content-view-dialog.component';

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
import {ContentService} from '../../providers/content.service'

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss'],
  providers:[ContentService,AdminService,SectionService]
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
    stringResource:StringResource=new  StringResource()
  	constructor(private dialog: MatDialog, private cpService: ColorPickerService,
            private sanitizer: DomSanitizer,private fb: FormBuilder, private router: Router,
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
              }
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    exampleDatabase = new ExampleDatabase();
    dataSource:  ExampleDataSourceSort | null;
    dataSourceSort: ExampleDataSourceSort | null;

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
        //this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
        this.dataSource = new ExampleDataSourceSort(this.exampleDatabase, this.sort);
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
     this.contentService.ongetContentList()
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.contentBackup=data.response;
                        this.contentList=data.response
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
    // console.log(JSON.stringify(sec))
    return sec[0].sectionName;
   }
  findCat(id){
    let cat =this.categories.filter(arg=>arg._id==id)
    return cat[0].categoryName;
  }
  findSubCat(id){
    let sub =this.subCategory.filter(arg=>arg._id==id)
    return sub[0].subCategoryName;
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
          if (this.filterLanguage.length>0 ) {
          this.filterRequest.language={
             $in:this.filterLanguage
           }
            // code...
          }else{
            delete(this.filterRequest.language)
          }

          if (this.filterSection.length>0) {
            // code...
              this.filterRequest.sectionId={
               $in:this.filterSection
            }
          }else{
            delete(this.filterRequest.sectionId)
          }
          if (this.filterCategory.length>0) {
            // code...
            let category=[]
            for(let i=0;i<this.filterCategory.length;i++){
              category.push(this.filterCategory[i]._id)
            }
           this.filterRequest.categoryId={
             $in:category}
          }else{
            delete(this.filterRequest.categoryId)
          }
          if (this.filterSubcategory.length>0 ) {
            let subCategory=[]
            for(let i=0;i<this.filterSubcategory.length;i++){
              subCategory.push(this.filterSubcategory[i]._id)
            }
          this.filterRequest.subCategoryId=
           {$in:subCategory}
          }else{
            delete(this.filterRequest.subCategoryId)
          }

        
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
                           this.filterLanguageFilterPan=this.filterLanguage
                           this.filterSectionFilterPan=this.filterSection
                           this.filterCategoryFilterPan=this.filterCategory
                           this.filterSubcategoryFilterPan=this.filterSubcategory
                        }
                },error=>{
                    this.waitLoader =false;
                    alert(error)
              })
        }
      
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser() {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
    super();
  }

  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}

export class ExampleDataSourceSort extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _sort: MatSort) {
    super();
  }

  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}
  getSortedData(): UserData[] {
    const data = this._exampleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
        case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }

}



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
       }

  onYesClick(): void {
    this.dialogRef.close('yes');
    // this.homePage.onDelete(this.data.admin)
  }
   onNoClick(): void {
    this.dialogRef.close();
  }


 

}