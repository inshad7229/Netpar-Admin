import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {AppProvider} from '../../../providers/app.provider'
import {TranslationService} from '../../../providers/translation.service'

var CKEDITOR
declare var google:any

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers:[TranslationService]
})
export class EditorComponent implements OnInit {
  date:any;
  showMessage:boolean=false;
  message:any;
  ckeditorContent
    currentString:any;
    sendString:any;
    selectedValue:any;
    currentActiveIndex:number;
    outputStringArrayLength:number;
    caretPos
    elementRefrence:any;
    inputStringLength:number
    outputStringLength:number
    textAreaText:any;
    ckEditorConfig: {} = {
    "toolbarGroups": [
          { "name": 'clipboard',   groups: [ 'clipboard', 'undo' ] },
          { "name": 'links' },
          { "name": 'paragraph',   groups: [ 'list', 'indent', 'align' ] },
          { "name": 'styles' },
          { "name": 'colors' },
          { "name": 'insert',  groups: [ 'table' ] },
          { "name": 'basicstyles',   groups: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
      ],
    /*"toolbar" : [
      { "name": 'insert',  items: [ 'table' ] },
    ],*/
    "removeButtons":"Source,Save,Templates,Find,Replace,Scayt,SelectAll"
  }
  constructor(private dialog: MatDialog, 
     private http: Http,
     private translationService:TranslationService,
    public dialogRef: MatDialogRef<EditorComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, public appProvider: AppProvider) { 
    this.ckeditorContent=this.data.text;
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
  

  ngOnInit() {
    // if (this.data.editedStatus==false) {
    //    this.textAreaText=this.data.text
    //   // code...
    // }else{
      
    // }
  }
  // format(){
  //  if (this.ckeditorContent) {
       
  //      this.ckeditorContent=this.ckeditorContent+this.textAreaText;
  //      this.textAreaText=null
  //     // code...
  //   }else{
  //     this.ckeditorContent=this.textAreaText;
  //     this.textAreaText=null
  //   }
  // }
  // onChange(event){
  //   let text=this.ckeditorContent
  //   let f
  //   let g
  //   let a=event ? String(event).replace(/<[^>]+>/gm, '') : '';
  //   let b=a?String(a).replace('&nbsp;',''):'';
  //   let c=b?String(b).replace(/\\n/g,''):'';
  //   let d=c?String(c).replace('&nbsp;',''):'';
  //   console.log(a)
  //   console.log(b)
  //   console.log(c)

  //   console.log(d.split(' '))
  //   f=d.split(' ')
  //   for(let i =0; i<f.length; i++) {
  //       f[i]=String(f[i]).replace(/\\n\\n/g,'')
  //       f[i]=String(f[i]).replace('\n\n','')
  //       f[i]=String(f[i]).replace(/\\n/g,'')
  //       f[i]=String(f[i]).replace('\n','')
  //       f[i]=String(f[i]).replace(/\\n/g,'')
  //       f[i]=String(f[i]).replace('\n','')
  //       f[i]=String(f[i]).replace('\t','')
  //       f[i]=String(f[i]).replace(/\\t/g,'')
  //       f[i]=String(f[i]).replace(' ','')
  //       f[i]=String(f[i]).replace('  ','')
  //       f[i]=String(f[i]).replace('   ','')
  //       f[i]=String(f[i]).replace('    ','')
  //   }
  //  console.log(JSON.stringify(f))
  //  let edit={
  //    data:f
  //  }

  //   let lang
  //     if (this.appProvider.current.currentLanguage=="Hindi") {
  //          lang='hindi'
  //       }else if (this.appProvider.current.currentLanguage=="Bengali") {
  //          lang='bengali'
  //       }else if (this.appProvider.current.currentLanguage=="Gujarati") {
  //           lang='gujarati'
  //       }else if (this.appProvider.current.currentLanguage=="Kannada") {
  //           lang='kannada'
  //       }else if (this.appProvider.current.currentLanguage=="Marathi") {
  //           lang='marathi'
  //       }else if (this.appProvider.current.currentLanguage=="Malayalam") {
  //           lang='malayalam'
  //       }else if (this.appProvider.current.currentLanguage=="Telugu") {
  //           lang='telugu'
  //       }else if (this.appProvider.current.currentLanguage=="Tamil") {
  //           lang='tamil'
  //       }else if (this.appProvider.current.currentLanguage=="Punjabi") {
  //           lang='punjabi'
  //       }else {
  //           lang='marathi'
  //       }
  //        let api =  "https://api-gw.revup.reverieinc.com/apiman-gateway/PROMATICS/transliteration/1.0?source_lang=english&target_lang="+lang+"&content_lang=&abbreviate=&noOfsuggestions=1&domain=1";
  //        let params: URLSearchParams = new URLSearchParams();
  //        params.set('source_lang','english'); 
  //        params.set('target_lang','hindi'); 
  //        params.set('domain','3'); 
  //        params.set('mt_context','generic_english_proper'); 
  //        let options = new RequestOptions({
  //                   headers: new Headers({
  //                      "rev-api-key": "5c3a548b01cce02490127a5f50c3fb47",
  //                      "rev-app-id": "NETPAR_APP",
  //                      "content-type": "application/json"
  //                   }),
  //                 //  search:params
  //        });
  //       return this.http.post(api,JSON.stringify(edit),options).subscribe(response => {
  //           console.log("customer Info datais " + response);
  //           let responsee=response.json();
  //           for (let j =0; j<responsee.responseList.length; j++) {
  //             text=text.replace(responsee.responseList[j].inString,responsee.responseList[j].outString[0])
  //           }
  //           console.log(text)
  //           this.ckeditorContent=text
  //     //       this.addContentRequest.tags.push({ name: responsee.responseList[0].outString.trim() });
  //     // if (input) {
  //     // input.value = '';
  //     // }
  //           // this.ngControl.valueAccessor.writeValue(responsee.responseList[0].outString);
  //           // this.ngControl.viewToModelUpdate(responsee.responseList[0].outString);

  //       },error => {
  //           let errorr=error;
  //       });
  // }
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
// onChange(event){
//    let value=event ? String(event).replace(/<[^>]+>/gm, '') : '';
//    this.currentString=event
//    let localValue=value.split(' ')
//    let length=localValue.length
//    let stringForSend=localValue[length-1]
//         stringForSend=String(stringForSend).replace(/\\n\\n/g,'')
//         stringForSend=String(stringForSend).replace('\n\n','')
//         stringForSend=String(stringForSend).replace(/\\n/g,'')
//         stringForSend=String(stringForSend).replace('\n','')
//         stringForSend=String(stringForSend).replace(/\\n/g,'')
//         stringForSend=String(stringForSend).replace('\n','')
//         stringForSend=String(stringForSend).replace('\t','')
//         stringForSend=String(stringForSend).replace(/\\t/g,'')
//         stringForSend=String(stringForSend).replace(' ','')
//         stringForSend=String(stringForSend).replace('  ','')
//         stringForSend=String(stringForSend).replace('   ','')
//         stringForSend=String(stringForSend).replace('    ','')
//     if(stringForSend=='') {
//        return 
//      }
//         this.sendString=stringForSend.toString()
//         this.translationService.onGetSuggetiion(stringForSend)
//         .subscribe(data => {     
//             this.appProvider.current.suggestedString=data                    
//                 },error=>{
                  
//                 })
//  }
//  selectString(state){
//    this.currentString=this.currentString.toString()
//    let output=this.currentString.replace(this.sendString ,state)
//    this.ckeditorContent=output+' '
//    this.appProvider.current.suggestedString=[]
//   console.log(output)
//  }

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
   this.textAreaText=output
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
        this.textAreaText=output
        this.appProvider.current.suggestedString=[]
        }else{
         let replaceWith=this.appProvider.current.suggestedString[this.currentActiveIndex]
         let output=this.currentString.replace(this.sendString ,replaceWith)
        this.textAreaText=output
         this.appProvider.current.suggestedString=[]
        }
    }

  }else if (this.selectedValue && event.keyCode==13) {
   this.currentString=this.currentString.toString()
   if (this.outputStringArrayLength>0) {
        let replaceWith=this.selectedValue+' '
        let output=this.currentString.replace(this.sendString ,replaceWith)
        this.textAreaText=output
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
  //alert(state)
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
