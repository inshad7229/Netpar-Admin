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

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
  providers:[ContentService,AdminService,SectionService]
})
export class PriorityComponent implements OnInit {
          waitLoader
          contentList
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
        this.getList();

    }
    openDialog(): void {
        let dialogRef = this.dialog.open(PriorityDialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          
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
    
}
