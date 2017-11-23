import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatProgressBar} from '@angular/material';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';


import { AddSubCategoryRequest} from '../../models/section.modal'
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {AppProvider} from '../../providers/app.provider'
import {TranslationService} from '../../providers/translation.service'
declare var jquery:any;
declare var $ :any;
declare var google:any

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.scss'],
  providers:[FormControlDirective,SectionService,TranslationService]
})
export class AddSubcategoryComponent implements OnInit {
 @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
    addSubCategoryForm: FormGroup;
    widthPx = '300';
    heightPx = '300';
    imageUrl = '';
    waitLoader:boolean;
    currentImageHorigontal: string;
    croppieImageHorigontal: string;
    sections:any;
    categories:any;
    sectionsData
    categoriesData
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
    addSubCategoryRequest: AddSubCategoryRequest=new  AddSubCategoryRequest()
    stringResource:StringResource=new  StringResource()
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
      ) {   this.addSubCategoryForm = fb.group({
                'sectionName': [null, Validators.compose([Validators.required])],
                'categoryName': [null],
                'subCategoryName':[null, Validators.compose([Validators.required,Validators.maxLength(30)])],
                'subCategoryView':[null, Validators.compose([Validators.required])],
                'subCategoryFormat':[null],
                'userEngBtnLike':[null],
                'userEngBtnShare':[null],
                'userEngBtnComment':[null],
                'userEngBtnSave':[null],
                'userEngBtnDownload':[null],
                'callToActBtnApply':[null],
                'callToActBtnCallMe':[null],
                'callToActBtnInterested':[null],
                'callToActBtnCall':[null],
                'language':[null]
            
        })
        this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
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
         if (this.appProvider.current.actionFlag=='editSubCategory') {
            this.getSectionList()
            this.getSubCategoryData()
        }else{
           this.getSectionList()     
        }

  	}

     onLanguageChange(language){
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
       //  control.makeTransliteratable(['subCategoryName']);
        this.appProvider.current.currentLanguage=language;
        this.sections=this.sectionsData.filter(arg=>arg.language==language);
        this.categories=this.categoriesData.filter(arg=>arg.language==language);
        
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
        this.saveFlag2=false
        this.croppieImageHorigontal = '';
        this.currentImageHorigontal = ''
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

    getCategory(){
         this.waitLoader = true;
         this.sectionService.onGetCategory(this.addSubCategoryRequest.sectionId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.categoriesData=data.response;
                    if (this.addSubCategoryRequest.language) {
                         this.sections=this.sectionsData.filter(arg=>arg.language==this.addSubCategoryRequest.language);
                         this.categories=data.response.filter(arg=>arg.language==this.addSubCategoryRequest.language);
                    }
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                }) 
    }
    onAddSubcategory(){

        this.waitLoader = true;
        if (this.addSubCategoryRequest._id) {
         let localsection=this.sections.filter(arg=>arg._id==this.addSubCategoryRequest.sectionId)
         let localcategory=this.categories.filter(arg=>arg._id==this.addSubCategoryRequest.categoryId)
         this.addSubCategoryRequest.sectionName=localsection[0].sectionName;
         this.addSubCategoryRequest.categoryName=localcategory[0].categoryName;
         this.addSubCategoryRequest.thumbnailImage=this.currentImageThumbnail;
         this.addSubCategoryRequest.horigontalImage=this.currentImageHorigontal;
         this.sectionService.onEditSubCategory(this.addSubCategoryRequest)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {

                        this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                      
                         this.router.navigate(['/view-section'],{ skipLocationChange: true });
                    }
                    console.log(JSON.stringify(data))
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                }) 
   }else{
         let date=new Date().toISOString()
         let localsection=this.sections.filter(arg=>arg._id==this.addSubCategoryRequest.sectionId)
         let localcategory=this.categories.filter(arg=>arg._id==this.addSubCategoryRequest.categoryId)
         
         this.addSubCategoryRequest.createdDate=date.split('T')[0];
         this.addSubCategoryRequest.sectionName=localsection[0].sectionName;
         this.addSubCategoryRequest.categoryName=localcategory[0].categoryName;
         this.addSubCategoryRequest.thumbnailImage=this.currentImageThumbnail;
         this.addSubCategoryRequest.horigontalImage=this.currentImageHorigontal;
         this.addSubCategoryRequest.status=true;
         this.addSubCategoryRequest.publishStatus=false;
         this.addSubCategoryRequest.deleteStatus=false;
         this.addSubCategoryRequest.updatedDate=null;
         this.addSubCategoryRequest.enableDisableDate=null;
         this.addSubCategoryRequest.publishUnbuplishDate=null
         this.sectionService.onAddSubcategory(this.addSubCategoryRequest)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {

                        this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                      
                         this.router.navigate(['/view-section'],{ skipLocationChange: true });
                    }
                    console.log(JSON.stringify(data))
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                })
     }
         
        }
     getSectionList(){
                    this.waitLoader = true;
                      this.sectionService.onGetSection()
                    .subscribe(data => {
                        this.waitLoader = false;
                        this.sectionsData=data;
                    if (this.addSubCategoryRequest.language) {
                         this.sections=data.filter(arg=>arg.language==this.addSubCategoryRequest.language);;
                    }
                    },error=>{
                      this.waitLoader = false;
                        alert(error)
                    })
      }
   getSubCategoryData(){
            this.waitLoader = true;
            this.sectionService.onGetSingleSubCategoryData(this.appProvider.current.currentId)
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.addSubCategoryRequest=data.response[0]
                        this.currentImageThumbnail=this.addSubCategoryRequest.thumbnailImage;
                        this.currentImageHorigontal=this.addSubCategoryRequest.horigontalImage;
                        for (let i=0;i<this.stringResource.subCategoryTemplate.length;i++) {
                               if (this.stringResource.subCategoryTemplate[i].templateName==this.addSubCategoryRequest.subCategoryFormat) {
                                 this.stringResource.subCategoryTemplate[i].status="active"
                               }
                            }
                        this.getCategory()
                    console.log(JSON.stringify(data))
                },error=>{
                  this.waitLoader = false;
                    alert(error)
                }) 
  }
   onClickSubCatTemp(j){
    for (let i=0;i<this.stringResource.subCategoryTemplate.length;i++) {
        this.stringResource.subCategoryTemplate[i].status="inactive"
    }
    this.stringResource.subCategoryTemplate[j].status="active"
    this.addSubCategoryRequest.subCategoryFormat=this.stringResource.subCategoryTemplate[j].templateName
}
// onTransliteration(value){
//    this.currentString=value
//    let localValue=value.split(' ')
//    let length=localValue.length
//    let stringForSend=localValue[length-1]
//    if(stringForSend=='') {
//        return 
//      }
//    this.sendString=stringForSend.toString()
//         this.translationService.onGetSuggetiion(stringForSend)
//         .subscribe(data => {     
//             this.appProvider.current.suggestedString=data                    
//                 },error=>{
                  
//                 })
//  }
//  selectString(state){
//    this.currentString=this.currentString.toString()
//    let output=this.currentString.replace(this.sendString ,state)
//    this.addSubCategoryRequest.subCategoryName=output+' '
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
   this.addSubCategoryRequest.subCategoryName=output
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
        this.addSubCategoryRequest.subCategoryName=output
        this.appProvider.current.suggestedString=[]
        }else{
         let replaceWith=this.appProvider.current.suggestedString[this.currentActiveIndex]
         let output=this.currentString.replace(this.sendString ,replaceWith)
        this.addSubCategoryRequest.subCategoryName=output
         this.appProvider.current.suggestedString=[]
        }
    }

  }else if (this.selectedValue && event.keyCode==13) {
   this.currentString=this.currentString.toString()
   if (this.outputStringArrayLength>0) {
        let replaceWith=this.selectedValue+' '
        let output=this.currentString.replace(this.sendString ,replaceWith)
        this.addSubCategoryRequest.subCategoryName=output
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
