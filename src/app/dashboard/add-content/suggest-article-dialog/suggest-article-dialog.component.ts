import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdListModule} from '@angular/material';
import {SectionService} from '../../../providers/section.service'
import {ContentService }from '../../../providers/content.service'
import {AppProvider} from '../../../providers/app.provider'

@Component({
  selector: 'app-suggest-article-dialog',
  templateUrl: './suggest-article-dialog.component.html',
  styleUrls: ['./suggest-article-dialog.component.scss'],
  providers:[SectionService,ContentService]
})
export class SuggestArticleDialogComponent implements OnInit {
  waitLoader:boolean;
  addContentRequest;
  sections:any;
  categories:any;
  subCategories:any;
  suggestedArticalList:any;
  constructor(private dialog: MdDialog, public dialogRef: MdDialogRef<SuggestArticleDialogComponent>,
  @Inject(MD_DIALOG_DATA) public data: any,
            private sectionService:SectionService,
            private appProvider: AppProvider,
            private contentProvider:ContentService) { 
      this.addContentRequest={}
  }

  ngOnInit() {
  	this.getSectionList()
  }

  onClosed(){
  	this.dialogRef.close();
  }

 getSectionList(){
                this.sectionService.onGetSection()
              .subscribe(data => {
                  this.waitLoader = false;
                  this.sections=data;
              },error=>{
                  alert(error)
              })
  }
  getCategory(){
         this.sectionService.onGetCategory(this.addContentRequest.sectionId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.categories=data.response;
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                }) 
    }
   getsubCategory(){
     this.sectionService.onGetSubCategory(this.addContentRequest.sectionId,this.addContentRequest.categoryId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.subCategories=data.response;
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                }) 
   }
   getSuggestedArtical(){
      this.contentProvider.ongetSuggestedArticle(this.addContentRequest)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.suggestedArticalList=data.response;
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                })
   }
}
