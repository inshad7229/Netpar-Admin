import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatProgressBar} from '@angular/material';
import {CommentService} from '../../providers/comment.service'
import {StringResource} from '../../models/saredResources'
import {AppProvider} from '../../providers/app.provider'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  providers:[CommentService]
})
export class CommentComponent implements OnInit {
   commentData:any;
   waitLoader:boolean
   id=[]
  constructor(private router: Router,
        private fb: FormBuilder,
        vcr: ViewContainerRef,
        public toastr: ToastsManager,
        private http: Http,
        private commentService:CommentService,
        private appProvider: AppProvider) { }

  	ngOnInit() {
       this.getAllComment()
  		$('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });

  	}
      getAllComment(){
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
    
  
}
