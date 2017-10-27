import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

var CKEDITOR
declare var google:any

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  date:any;
  showMessage:boolean=false;
  message:any;
  ckeditorContent
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<EditorComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { 
    // let selectedLang
    // let lang=data.lang
    //    if(lang=="Hindi"){
    //       selectedLang=google.elements.transliteration.LanguageCode.HINDI
    //    }
    //    else if(lang=="Marathi"){
    //       selectedLang=google.elements.transliteration.LanguageCode.MARATHI
    //    }else{
    //      selectedLang=google.elements.transliteration.LanguageCode.ENGLISH 
    //    }
    //     var options = {
    //       sourceLanguage:
    //           google.elements.transliteration.LanguageCode.ENGLISH,
    //       destinationLanguage:[selectedLang],
    //       shortcutKey: 'ctrl+g',
    //       transliterationEnabled: true
    //     };
    //     var control = new google.elements.transliteration.TransliterationControl(options);
    //     control.makeTransliteratable(['editorText']);
  	this.date={}
  }
  ckEditorConfig: {} = {
    "toolbarGroups": [
          { "name": 'clipboard',   groups: [ 'clipboard', 'undo' ] },
          { "name": 'links' },
          { "name": 'paragraph',   groups: [ 'list', 'indent', 'align' ] },
          { "name": 'styles' },
          { "name": 'colors' },
      ],
    /*"toolbar" : [
      { "name": 'insert',  items: [ 'table' ] },
    ],*/
    "removeButtons":"Source,Save,Templates,Find,Replace,Scayt,SelectAll"
  }

  ngOnInit() {
    this.ckeditorContent=this.data.text
  }
  onChange(){

  }
onReady(){

}
onFocus(){

}
onBlur(){

}

onClosed(){
  this.dialogRef.close()
}
save(){
  this.dialogRef.close( {text:this.ckeditorContent})
}
}
