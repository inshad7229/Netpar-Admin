
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdListModule} from '@angular/material';
import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MdProgressBar} from '@angular/material';
import { DialogComponent} from './dialog/dialog.component';
import {DataTableModule} from "angular2-datatable";


import {AddSectionRequest} from '../../models/section.modal'
import {SectionService} from '../../providers/section.service'
import {AppProvider} from '../../providers/app.provider'
declare var jquery:any;
declare var $ :any;


@Component({
    selector: 'app-view-section',
    templateUrl: './view-section.component.html',
    styleUrls: ['./view-section.component.scss'],
    providers:[SectionService]
})

export class ViewSectionComponent implements OnInit {
    waitLoader:boolean;
    sectiondata=[];
    constructor(private dialog: MdDialog,
         private router: Router,
        private fb: FormBuilder,
        vcr: ViewContainerRef,
        public toastr: ToastsManager,
        private http: Http,
        private sectionService:SectionService) { }

    ngOnInit() {
        $('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });
        $('.cusdropdown-toggle').on('click',function(){
            $(this).closest('.dropdown').toggleClass('open');
        })
        $(window).on('click',function(e){
            e.stopPropagation();
            var $trigger = $(".cusdropdown-toggle").closest('.dropdown');
            console.log($trigger);
            if($trigger !== e.target && !$trigger.has(e.target).length){
                $('.cusdropdown-toggle').closest('.dropdown').removeClass('open');
            }
        });
         this.sectionService.onGetSectionData()
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {                        
                        this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                         let local=data.FinalArray;
                         for(let i=0;i<local.length;i++){
                                var obj=local[i];
                                console.log(JSON.stringify(obj))
                                if (obj.section_categories.length>0) {
                                        for(let j=0;j<obj.section_categories.length;j++){
                                            var obj2=obj.section_categories[j]
                                          if (obj2.section_subcategories.length>0) {
                                            for(let k=0;k<obj2.section_subcategories.length;k++){
                                                var obj3=obj2.section_subcategories[k]
                                                this.sectiondata.push(obj3)
                                             }
                                            }else{

                                             this.sectiondata.push(obj2)
                                            }
                                      
                                    }
                                }else{
                                    this.sectiondata.push(obj)
                                }
                         }
                         console.log(JSON.stringify(this.sectiondata))
                    }                 
                },error=>{
                  
                })
    }
    openDialog(): void {
        let dialogRef = this.dialog.open(DialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          
        });
    }
  showSectionName(name,index){
    if (index>0) {
        if(this.sectiondata[index-1].sectionName==name){
           return false; 
        }else{
          return true;   
        }  
      }else{
          return true; 
      }
  
  }
  showCategoryName(name,index){
   if (index>0) {
        if(this.sectiondata[index-1].categoryName==name){
           return false; 
        }else{
          return true;   
        } 
      }else{
          return true; 
      }
  }
  showSubcategoryName(name,index){
     if (index>0) {
        if(this.sectiondata[index-1].subCategoryName==name){
           return false; 
        }else{
          return true;   
        }  
      }else{
          return true; 
      }
  }
}
