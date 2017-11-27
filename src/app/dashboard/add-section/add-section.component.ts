import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatProgressBar} from '@angular/material';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';

import {AddSectionRequest} from '../../models/section.modal'
import {SectionService} from '../../providers/section.service'
import {AppProvider} from '../../providers/app.provider'
import {TranslationService} from '../../providers/translation.service'
import {StringResource} from '../../models/saredResources'
declare var jquery:any;
declare var $ :any;
declare var google:any;

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
  providers:[FormControlDirective,SectionService,TranslationService]
})
export class AddSectionComponent implements OnInit {
     @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
    addSectionForm: FormGroup;
    widthPx = '300';
    heightPx = '300';
    imageUrl = '';
    currentImageHorigontal: string;
    croppieImageHorigontal: string;
    addSectionModel:AddSectionRequest=new AddSectionRequest();
    stringResource:StringResource=new  StringResource()
    waitLoader: boolean;
    currentString:any;
    sendString:any;
    selectedValue:any;
    currentActiveIndex:number;
    outputStringArrayLength:number;
    caretPos
    elementRefrence:any;
    inputStringLength:number
    outputStringLength:number
    saveFlag1:boolean
    saveFlag2:boolean
    oldSectionView:string;
    public get imageToDisplayHorigontal() {
        if (this.currentImageHorigontal) {
            return this.currentImageHorigontal;
        }
        if (this.imageUrl) {
            return this.imageUrl;
        }
        return `http://placehold.it/${300}x${50}`;
    }

    public get croppieOptionsHorigontal(): CroppieOptions {
        const opts: CroppieOptions = {};
        opts.viewport = {
            width: parseInt('300', 10),
            height: parseInt('50', 10)
        };
        opts.boundary = {
            width: parseInt(this.widthPx, 10),
            height: parseInt(this.heightPx, 10)
        };
        opts.enforceBoundary = true;
        return opts;
    }
    currentImageThumbnail: string;
    croppieImageThumbnail: string;

    public get imageToDisplayThumbnail() {
        if (this.currentImageThumbnail) {
            return this.currentImageThumbnail;
        }
        if (this.imageUrl) {
            return this.imageUrl;
        }
        return `http://placehold.it/${this.widthPx}x${this.heightPx}`;
    }

    public get croppieOptionsThumbnail(): CroppieOptions {
        const opts: CroppieOptions = {};
        opts.viewport = {
            width: parseInt(this.widthPx, 10),
            height: parseInt(this.heightPx, 10)
        };
        opts.boundary = {
            width: parseInt(this.widthPx, 10),
            height: parseInt(this.heightPx, 10)
        };
        opts.enforceBoundary = true;
        return opts;
    }

   constructor(
  	   private router: Router,
        private fb: FormBuilder,
        vcr: ViewContainerRef,
        public toastr: ToastsManager,
        private http: Http,
        private sectionService:SectionService,
        private appProvider: AppProvider,
        private translationService:TranslationService
      ) {   this.addSectionForm = fb.group({
            'sectionName': [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
            'categoryView': [null, Validators.compose([Validators.required])],
            'orderNo':[null],
            'language':[null, Validators.compose([Validators.required])]
        
            
        })
        this.toastr.setRootViewContainerRef(vcr);
    }
     
  ngOnInit() {


        // var options = {
        //   sourceLanguage:
        //       google.elements.transliteration.LanguageCode.ENGLISH,
        //   destinationLanguage:
        //       [google.elements.transliteration.LanguageCode.MARATHI],
        //   shortcutKey: 'ctrl+g',
        //   transliterationEnabled: true
        // };
        // var control = new google.elements.transliteration.TransliterationControl(options);
        // control.makeTransliteratable(['sectionName']);

  		$('.file-type').on('change',function(e){
		    // var tmppath = URL.createObjectURL(e.target.files[0]);
		    // console.log($(this));
		    // $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
		    $(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});

		$('.file_remove').on('click',function(){
		    // var a = $(this).closest('.fileinput').find('img').attr('src','./assets/img/placeholder5.png');
		    // console.log(a);
		    $(this).closest('.fileinput-exists').hide();
		    $(this).closest('.fileinput').find('.fileinput-noexists').show();
		});

   if (this.appProvider.current.actionFlag=='editSection') {
       this.waitLoader = true;
       this.sectionService.onGetSingleSectionData(this.appProvider.current.currentId)
        .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {                        
                        this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                     this.addSectionModel=data.response[0];
                      this.oldSectionView=this.addSectionModel.sectionViewFormat
                     //this.croppieImageThumbnail =data.response[0].thumbnailImage;
                     this.currentImageThumbnail =data.response[0].thumbnailImage 
                    // this.croppieImageHorigontal =data.response[0].horigontalImage;
                     this.currentImageHorigontal =data.response[0].horigontalImage;   
                     for (let i=0;i<this.stringResource.sectionTemplate.length;i++) {
                               if (this.stringResource.sectionTemplate[i].templateName==this.addSectionModel.sectionViewFormat) {
                                 this.stringResource.sectionTemplate[i].status="active"
                               }
                            }
                    }                 
                },error=>{
                  this.waitLoader = false;
                })
       // code...
   }
  }
  onLanguageChange(language){
       this.appProvider.current.currentLanguage=language;
       // let selectedLang
       // if(language=="Hindi"){
       //    selectedLang=google.elements.transliteration.LanguageCode.HINDI
       // }
       // else if(language=="Marathi"){
       //    selectedLang=google.elements.transliteration.LanguageCode.MARATHI
       // }else{
       //   selectedLang=google.elements.transliteration.LanguageCode.ENGLISH 
       // }
       //  var options = {
       //    sourceLanguage:
       //        google.elements.transliteration.LanguageCode.ENGLISH,
       //    destinationLanguage:[selectedLang],
       //    shortcutKey: 'ctrl+g',
       //    transliterationEnabled: true
       //  };
       //  var control = new google.elements.transliteration.TransliterationControl(options);
       //  control.makeTransliteratable(['sectionName']);
  }
  newImageResultFromCroppieHorigontal(img: string) {
        this.croppieImageHorigontal = img;
        console.log(this.croppieImageHorigontal)
    }

    saveImageFromCroppieHorigontal() {
        this.currentImageHorigontal = this.croppieImageHorigontal;
        if (this.currentImageHorigontal) {
          this.saveFlag2=true
        }
    }

    cancelCroppieEditHorigontal() {
        this.croppieImageHorigontal = '';
        this.currentImageHorigontal = ''
        this.saveFlag2=false
    }

    imageUploadEventHorigontal(evt: any) {
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            this.croppieImageHorigontal = fr.result;
        };
        fr.readAsDataURL(file);
    }
    newImageResultFromCroppieThumbnail(img: string) {
        this.croppieImageThumbnail = img;
        console.log(this.croppieImageThumbnail)
    }

    saveImageFromCroppieThumbnail() {
        this.currentImageThumbnail = this.croppieImageThumbnail;
        if (this.currentImageThumbnail) {
          this.saveFlag1=true
        }
    }

    cancelCroppieEditThumbnail() {
        this.saveFlag1=false
        this.croppieImageThumbnail = '';
        this.currentImageThumbnail = ''
    }

    imageUploadEventThumbnail(evt: any) {
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            this.croppieImageThumbnail = fr.result;
        };
        fr.readAsDataURL(file);
    }
  onAddSection(){
     this.waitLoader = true;

   //   if(this.app)
   if (this.addSectionModel._id) {
            let date=new Date().toISOString()
            this.addSectionModel.thumbnailImage=this.currentImageThumbnail;
            this.addSectionModel.horigontalImage=this.currentImageHorigontal;
             if (this.oldSectionView!=this.addSectionModel.sectionViewFormat) {
                     console.log(this.oldSectionView)
                     if (this.addSectionModel.sectionViewFormat=='Section Template One') {
                         this.addSectionModel.templateoneStartDate=date
                     }else if ( this.addSectionModel.sectionViewFormat=='Section Template Two') {
                         this.addSectionModel.templatetwoStartDate=date
                     }
                     if( this.oldSectionView=='Section Template One') {
                         this.addSectionModel.templateoneendDate=date
                     }else if ( this.oldSectionView=='Section Template Two') {
                         this.addSectionModel.templatetwoendDate=date
                     }
                 }
            this.sectionService.onEditSection(this.addSectionModel)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                    toastLife: 3000,
                    showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    this.router.navigate(['/view-section'],{ skipLocationChange: true });
                //this.router.navigate(['/home'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            },error=>{
              this.waitLoader = false;
            alert(error)
            }) 
   }else{
          let date=new Date().toISOString()
      console.log(date.split('T')[0])
      console.log(date)
     this.addSectionModel.createdDate=date.split('T')[0];
     this.addSectionModel.thumbnailImage=this.currentImageThumbnail;
     this.addSectionModel.horigontalImage=this.currentImageHorigontal;
     this.addSectionModel.status=true;
     this.addSectionModel.publishStatus=false;
     this.addSectionModel.deleteStatus=false;
     this.addSectionModel.updatedDate=null;
     this.addSectionModel.enableDisableDate=null;
     this.addSectionModel.publishUnbuplishDate=null;
          if ( this.addSectionModel.sectionViewFormat=='Section Template One') {
             this.addSectionModel.templateoneStartDate=date
         }else if ( this.addSectionModel.sectionViewFormat=='Section Template Two') {
             this.addSectionModel.templatetwoStartDate=date
         }
      this.sectionService.onAddSection(this.addSectionModel)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {

                        this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                        this.router.navigate(['/view-section'],{ skipLocationChange: true });
                        //this.router.navigate(['/home'],{ skipLocationChange: true });
                    }
                    console.log(JSON.stringify(data))
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                })  
           }

        }
  onClickSecTemp(j){
    for (let i=0;i<this.stringResource.sectionTemplate.length;i++) {
        this.stringResource.sectionTemplate[i].status="inactive"
    }
    this.stringResource.sectionTemplate[j].status="active"
    this.addSectionModel.sectionViewFormat=this.stringResource.sectionTemplate[j].templateName
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
   this.addSectionModel.sectionName=output
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
        this.addSectionModel.sectionName=output
        this.appProvider.current.suggestedString=[]
        }else{
         let replaceWith=this.appProvider.current.suggestedString[this.currentActiveIndex]
         let output=this.currentString.replace(this.sendString ,replaceWith)
        this.addSectionModel.sectionName=output
         this.appProvider.current.suggestedString=[]
        }
    }

  }else if (this.selectedValue && event.keyCode==13) {
   this.currentString=this.currentString.toString()
   if (this.outputStringArrayLength>0) {
        let replaceWith=this.selectedValue+' '
        let output=this.currentString.replace(this.sendString ,replaceWith)
        this.addSectionModel.sectionName=output
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
