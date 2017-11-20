import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatProgressBar} from '@angular/material';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';
import { AddCategoryRequest} from '../../models/section.modal'
import {SectionService} from '../../providers/section.service'
import {AdminService} from '../../providers/admin.service'
import {StringResource} from '../../models/saredResources'
import {TranslationService} from '../../providers/translation.service'
import {AppProvider} from '../../providers/app.provider'
import {Observable} from "rxjs";
declare var jquery:any;
declare var $ :any;
declare var google:any 
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers:[FormControlDirective,SectionService,AdminService,TranslationService]
})
export class AddCategoryComponent implements OnInit {
    @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
     addCategoryForm: FormGroup;
    widthPx = '300';
    heightPx = '300';
    imageUrl = '';
    currentImageHorigontal: string;
    croppieImageHorigontal: string;
    waitLoader:boolean;
    sections:any;
    adminList:any;
    sectionsData
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
    oldCategoryView:string;
    oldListingView:string
    addCategoryRequest:AddCategoryRequest=new AddCategoryRequest()
    stringResource:StringResource=new  StringResource()
    public get imageToDisplayHorigontal() {
        if (this.currentImageHorigontal) {
            return this.currentImageHorigontal;
        }
        if (this.imageUrl) {
            return this.imageUrl;
        }
        return `http://placehold.it/${300}x${180}`;
    }

    public get croppieOptionsHorigontal(): CroppieOptions {
        const opts: CroppieOptions = {};
        opts.viewport = {
            width: parseInt('300', 10),
            height: parseInt('180', 10)
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
        private adminService:AdminService,
        private translationService:TranslationService
      ) {   

            this.addCategoryForm = fb.group({
                'sectionName': [null, Validators.compose([Validators.required])],
                'categoryName': [null, Validators.compose([Validators.required,Validators.maxLength(30)])],
                'categoryView':[null,Validators.compose([Validators.required])],
                'categoryFormat':[null],
                'subCategoryView':[null,Validators.compose([Validators.required])],
                'listView':[null,Validators.compose([Validators.required])],
                'listViewFormat':[null],
                'contributionForm':[null,Validators.compose([Validators.required])],
                'titleForm':[null],
                'guildTextForForm':[null],
                'guildTextForMedia':[null],
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

        if (this.appProvider.current.actionFlag=='editCategory') {
            this.getSectionList()
            this.getCategoryData()
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
       //  control.makeTransliteratable(['categoryName']);
        this.appProvider.current.currentLanguage=language;
        this.sections=this.sectionsData.filter(arg=>arg.language==language);;
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
     onAddCategory(){
      this.waitLoader =true;
      if (this.addCategoryRequest._id) {
                 let date=new Date().toISOString()
                 let localsection=this.sections.filter(arg=>arg._id==this.addCategoryRequest.sectionId)
                 this.addCategoryRequest.sectionName=localsection[0].sectionName;
                 this.addCategoryRequest.thumbnailImage=this.currentImageThumbnail;
                 this.addCategoryRequest.horigontalImage=this.currentImageHorigontal;
                 if (this.oldCategoryView!=this.addCategoryRequest.categoryFormat) {
                     console.log(this.oldCategoryView)
                     if (this.addCategoryRequest.categoryFormat=='Category-view Template One') {
                         this.addCategoryRequest.templateoneStartDate=date
                     }else if ( this.addCategoryRequest.categoryFormat=='Category-view Template Two') {
                         this.addCategoryRequest.templatetwoStartDate=date
                     }else if ( this.addCategoryRequest.categoryFormat=='Category-view Template Three') {
                         this.addCategoryRequest.templatethreeStartDate=date
                     }else if ( this.addCategoryRequest.categoryFormat=='Category-view Template Four') {
                         this.addCategoryRequest.templatefourStartDate=date
                     }

                     if( this.oldCategoryView=='Category-view Template One') {
                         this.addCategoryRequest.templateoneendDate=date
                     }else if ( this.oldCategoryView=='Category-view Template Two') {
                         this.addCategoryRequest.templatetwoendDate=date
                     }else if ( this.oldCategoryView=='Category-view Template Three') {
                         this.addCategoryRequest.templatethreeendDate=date
                     }else if ( this.oldCategoryView=='Category-view Template Four') {
                         this.addCategoryRequest.templatefourendDate=date
                     }
                 }
                

                 if (this.oldListingView!=this.addCategoryRequest.listViewFormat) {
                     if (this.addCategoryRequest.listViewFormat=='Listing-view Template One') {
                         this.addCategoryRequest.templateonelistingStartDate=date
                     }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Two') {
                         this.addCategoryRequest.templatetwolistingStartDate=date
                     }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Three') {
                         this.addCategoryRequest.templatethreelistingStartDate=date
                     }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Four') {
                         this.addCategoryRequest.templatefourlistingStartDate=date
                     }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Five') {
                         this.addCategoryRequest.templatefivelistingStartDate=date
                     }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Six') {
                         this.addCategoryRequest.templatesixlistingStartDate=date
                     }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Seven') {
                         this.addCategoryRequest.templatesevenlistingStartDate=date
                     }

                      if (this.oldListingView=='Listing-view Template One') {
                         this.addCategoryRequest.templateonelistingendDate=date
                     }else if ( this.oldListingView=='Listing-view Template Two') {
                         this.addCategoryRequest.templatetwolistingendDate=date
                     }else if ( this.oldListingView=='Listing-view Template Three') {
                         this.addCategoryRequest.templatethreelistingendDate=date
                     }else if ( this.oldListingView=='Listing-view Template Four') {
                         this.addCategoryRequest.templatefourlistingendDate=date
                     }else if ( this.oldListingView=='Listing-view Template Five') {
                         this.addCategoryRequest.templatefivelistingendDate=date
                     }else if ( this.oldListingView=='Listing-view Template Six') {
                         this.addCategoryRequest.templatesixlistingendDate=date
                     }else if ( this.oldListingView=='Listing-view Template Seven') {
                         this.addCategoryRequest.templatesevenlistingendDate=date
                     }
                }
                 this.sectionService.onEditCategory(this.addCategoryRequest)
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
                          this.waitLoader =false;
                            alert(error)
                        }) 
   }else{
         let date=new Date().toISOString()
         console.log(date.split('T')[0])
         let localsection=this.sections.filter(arg=>arg._id==this.addCategoryRequest.sectionId)
         this.addCategoryRequest.sectionName=localsection[0].sectionName;
         this.addCategoryRequest.thumbnailImage=this.currentImageThumbnail;
         this.addCategoryRequest.horigontalImage=this.currentImageHorigontal;
         this.addCategoryRequest.status=true;
         this.addCategoryRequest.publishStatus=false;
         this.addCategoryRequest.deleteStatus=false;
         this.addCategoryRequest.updatedDate=null;
         this.addCategoryRequest.enableDisableDate=null;
         this.addCategoryRequest.publishUnbuplishDate=null;
         if ( this.addCategoryRequest.categoryFormat=='Category-view Template One') {
             this.addCategoryRequest.templateoneStartDate=date
         }else if ( this.addCategoryRequest.categoryFormat=='Category-view Template Two') {
             this.addCategoryRequest.templatetwoStartDate=date
         }else if ( this.addCategoryRequest.categoryFormat=='Category-view Template Three') {
             this.addCategoryRequest.templatethreeStartDate=date
         }else if ( this.addCategoryRequest.categoryFormat=='Category-view Template Four') {
             this.addCategoryRequest.templatefourStartDate=date
         }


         if (this.addCategoryRequest.listViewFormat=='Listing-view Template One') {
             this.addCategoryRequest.templateonelistingStartDate=date
         }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Two') {
             this.addCategoryRequest.templatetwolistingStartDate=date
         }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Three') {
             this.addCategoryRequest.templatethreelistingStartDate=date
         }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Four') {
             this.addCategoryRequest.templatefourlistingStartDate=date
         }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Five') {
             this.addCategoryRequest.templatefivelistingStartDate=date
         }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Six') {
             this.addCategoryRequest.templatesixlistingStartDate=date
         }else if ( this.addCategoryRequest.listViewFormat=='Listing-view Template Seven') {
             this.addCategoryRequest.templatesevenlistingStartDate=date
         }

         this.sectionService.onAddCategory(this.addCategoryRequest)
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
                  this.waitLoader =false;
                    alert(error)
                })
     }
         
        }
  getSectionList(){
          this.waitLoader =true;
         this.sectionService.onGetSection()
                .subscribe(data => {
                    this.waitLoader = false;
                    this.sectionsData=data;
                    if (this.addCategoryRequest.language) {
                         this.sections=data.filter(arg=>arg.language==this.addCategoryRequest.language);;
                    }
                },error=>{
                    this.waitLoader =false;
                    alert(error)
                })
  }
  getCategoryData(){
           this.waitLoader =true;
            this.sectionService.onGetSingleSCategoryData(this.appProvider.current.currentId)
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.addCategoryRequest=data.response[0]
                        this.currentImageThumbnail=this.addCategoryRequest.thumbnailImage;
                        this.currentImageHorigontal=this.addCategoryRequest.horigontalImage;
                        this.oldCategoryView=this.addCategoryRequest.categoryFormat
                        this.oldListingView=this.addCategoryRequest.listViewFormat
                        if (this.addCategoryRequest.language && this.sectionsData) {
                           this.sections=this.sectionsData.filter(arg=>arg.language==this.addCategoryRequest.language);;
                          }
                         for (let i=0;i<this.stringResource.categoryTemplate.length;i++) {
                               if (this.stringResource.categoryTemplate[i].templateName==this.addCategoryRequest.categoryFormat) {
                                 this.stringResource.categoryTemplate[i].status="active"
                                 console.log(this.addCategoryRequest.categoryFormat)
                               }
                            }
                        for (let i=0;i<this.stringResource.listingTemplate.length;i++) {
                               if (this.stringResource.listingTemplate[i].templateName==this.addCategoryRequest.listViewFormat) {
                                 console.log(this.addCategoryRequest.listViewFormat)
                                 this.stringResource.listingTemplate[i].status="active"
                               }
                            }
                                           
                },error=>{
                  this.waitLoader =false;
                    alert(error)
                }) 
  }
onClickCatTemp(j){
    for (let i=0;i<this.stringResource.categoryTemplate.length;i++) {
        this.stringResource.categoryTemplate[i].status="inactive"
    }
    this.stringResource.categoryTemplate[j].status="active"
    this.addCategoryRequest.categoryFormat=this.stringResource.categoryTemplate[j].templateName
}
onClickListTemp(j){
    for (let i=0;i<this.stringResource.listingTemplate.length;i++) {
        this.stringResource.listingTemplate[i].status="inactive"
    }
    this.stringResource.listingTemplate[j].status="active"
    this.addCategoryRequest.listViewFormat=this.stringResource.listingTemplate[j].templateName
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
//    this.addCategoryRequest.categoryName=output+' '
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
   this.addCategoryRequest.categoryName=output
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
        this.addCategoryRequest.categoryName=output
        this.appProvider.current.suggestedString=[]
        }else{
         let replaceWith=this.appProvider.current.suggestedString[this.currentActiveIndex]
         let output=this.currentString.replace(this.sendString ,replaceWith)
        this.addCategoryRequest.categoryName=output
         this.appProvider.current.suggestedString=[]
        }
    }

  }else if (this.selectedValue && event.keyCode==13) {
   this.currentString=this.currentString.toString()
   if (this.outputStringArrayLength>0) {
        let replaceWith=this.selectedValue+' '
        let output=this.currentString.replace(this.sendString ,replaceWith)
        this.addCategoryRequest.categoryName=output
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
