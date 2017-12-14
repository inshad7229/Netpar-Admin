import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import {SectionService} from '../../../providers/section.service'
import {ContentService }from '../../../providers/content.service'
import {AppProvider} from '../../../providers/app.provider'
import {TranslationService} from '../../../providers/translation.service'

@Component({
  selector: 'app-suggest-article-dialog',
  templateUrl: './suggest-article-dialog.component.html',
  styleUrls: ['./suggest-article-dialog.component.scss'],
  providers:[SectionService,ContentService,TranslationService]
})
export class SuggestArticleDialogComponent implements OnInit {
  waitLoader:boolean;
  addContentRequest;
  sections:any;
  categories:any;
  subCategories:any;
  suggestedArticalList:any;
  suggestedArticalListBackup:any;
  filter:any;
      currentString:any;
    sendString:any;
    selectedValue:any;
    currentActiveIndex:number;
    outputStringArrayLength:number;
    caretPos
    elementRefrence:any;
    inputStringLength:number
    outputStringLength:number
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<SuggestArticleDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
            private sectionService:SectionService,
            private appProvider: AppProvider,
            private contentProvider:ContentService,
            private translationService:TranslationService) { 
      this.addContentRequest={}
  }

  ngOnInit() {
  	this.getSectionList()
  }

  onClosed(){
  	this.dialogRef.close();
  }

 getSectionList(){
               this.waitLoader = true;
                this.sectionService.onGetSection()
              .subscribe(data => {
                  this.waitLoader = false;
                  this.sections=data.filter(arg=>arg.deleteStatus!=true);
              },error=>{
                this.waitLoader = false;
                  alert(error)
              })
  }
  getCategory(){
        this.waitLoader =true;
         this.sectionService.onGetCategory(this.addContentRequest.sectionId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.categories=data.response.filter(arg=>arg.deleteStatus!=true);
                    console.log(JSON.stringify(data))
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                }) 
    }
   getsubCategory(){
     this.waitLoader =true;
     this.sectionService.onGetSubCategory(this.addContentRequest.sectionId,this.addContentRequest.categoryId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.subCategories=data.response.filter(arg=>arg.deleteStatus!=true);
                    console.log(JSON.stringify(data))
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                }) 
   }
   getSuggestedArtical(){
     this.waitLoader = true;
      this.contentProvider.ongetSuggestedArticle(this.addContentRequest)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.suggestedArticalList=data.response.filter(arg=>arg.deleteStatus!=true);;
                    this.suggestedArticalListBackup=data.response.filter(arg=>arg.deleteStatus!=true);;
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                })
   }
   saveSuggestedArticle(){
     let filtredArticle=this.suggestedArticalList.filter(arg=>arg.check==true)
     this.dialogRef.close(filtredArticle)
   }
   onsearcArticle(article){
      // alert(searchUser)
      if (article == '') {
            this.suggestedArticalList = this.suggestedArticalListBackup;
            return;
       }
       let ev= article
       if (ev && ev.trim() != '') {
        this.suggestedArticalList = this.suggestedArticalListBackup.filter((value) => {
          if (!value.sectionName && value.categoryName && value.subCategoryName && value.headline ) {
            return (
              value.sectionName.toUpperCase().indexOf(ev.toUpperCase()) > -1 
              || value.categoryName.toUpperCase().indexOf(ev.toUpperCase()) > -1 
              || value.subCategoryName.toUpperCase().indexOf(ev.toUpperCase()) > -1 
              || value.headline.toUpperCase().indexOf(ev.toUpperCase()) > -1
              
              );
          }else if ( !value.sectionName && value.categoryName && value.subCategoryName && value.headline ) {
            return (
               value.categoryName.toUpperCase().indexOf(ev.toUpperCase()) > -1 
              || value.subCategoryName.toUpperCase().indexOf(ev.toUpperCase()) > -1 
              || value.headline.toUpperCase().indexOf(ev.toUpperCase()) > -1
              
              );
          }else if (!value.sectionName && !value.categoryName && value.subCategoryName && value.headline ) {
            return (
              value.subCategoryName.toUpperCase().indexOf(ev.toUpperCase()) > -1 
              || value.headline.toUpperCase().indexOf(ev.toUpperCase()) > -1
              
              );
          }else if ( !value.sectionName && !value.categoryName && !value.subCategoryName && value.headline ) {
            return (
              value.headline.toUpperCase().indexOf(ev.toUpperCase()) > -1
              
              );
          }
            
          
       })
      }
    }

      onTransliteration(value,event){
   var myEl=event.target
   this.elementRefrence=event
   let post =this.getCaretPos(event)
   this.currentString=value
   let subValue=value.substring(0, post)
   let localValue=subValue.split(' ')
   let length=localValue.length
   let letstring=localValue[length-1]
   let replcedstring=letstring.match(/[a-zA-Z]+/g);
   let stringForSend
   if (replcedstring) {
     stringForSend=replcedstring[0]
   }
   if (!stringForSend) {
   return 
   }
   else if(stringForSend=='') {
       return 
     }
   else if (/^[a-zA-Z]+$/.test(stringForSend)) {
    this.sendString=stringForSend.toString()
    this.translationService.onGetSuggetiion(stringForSend)
        .subscribe(data => {     
            this.appProvider.current.suggestedString=data
            this.outputStringArrayLength=this.appProvider.current.suggestedString.length
            this.currentActiveIndex=-1;
            this.inputStringLength=this.sendString.length
           },error=>{
                  
     })
   }

 }

 selectString(state){
   this.currentString=this.currentString.toString()
   this.outputStringLength=state.length
   let replaceWith=state+' '
   let output=this.currentString.replace(this.sendString ,replaceWith)
   this.filter=output
   let sumIndex=(this.caretPos+this.outputStringLength)-this.inputStringLength
   this.appProvider.current.suggestedString=[]
 }
onKeyUp(event){
  console.log(event.keyCode )
  if(event.keyCode==32){
    this.currentString=this.currentString.toString()
    if (this.appProvider.current.suggestedString.length>0) {
        if (this.currentActiveIndex==-1 || this.currentActiveIndex==0) {
         let replaceWith=this.appProvider.current.suggestedString[0]
         let output=this.currentString.replace(this.sendString ,replaceWith)
        this.filter=output
        this.appProvider.current.suggestedString=[]
        }else{
         let replaceWith=this.appProvider.current.suggestedString[this.currentActiveIndex]
         let output=this.currentString.replace(this.sendString ,replaceWith)
        this.filter=output
         this.appProvider.current.suggestedString=[]
        }
    }

  }else if (this.selectedValue && event.keyCode==13) {
   this.currentString=this.currentString.toString()
   if (this.outputStringArrayLength>0) {
        let replaceWith=this.selectedValue+' '
        let output=this.currentString.replace(this.sendString ,replaceWith)
        this.filter=output
        this.appProvider.current.suggestedString=[]
    }
  }else if (event.keyCode==38) {
     if (this.currentActiveIndex==-1 || this.currentActiveIndex==0) {
       this.currentActiveIndex=this.outputStringArrayLength-1
     }else{
       this.currentActiveIndex=this.currentActiveIndex-1
     }
  }else if (event.keyCode==40) {
     if (this.currentActiveIndex==this.currentActiveIndex-1) {
       this.currentActiveIndex=0
     }else{
       this.currentActiveIndex=this.currentActiveIndex+1
     }
  }

}
onSuugestionkeyup(state){
  this.selectedValue=state
}
getCaretPos(oField) {
    if (oField.selectionStart || oField.selectionStart == '0') {
       this.caretPos = oField.selectionStart;
       return this.caretPos
    }
  }
clearSuggstion(){
  this.appProvider.current.suggestedString=[]
}

setSelectionRangeCustome(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }
}
