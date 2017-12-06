import { Component, OnInit,ViewContainerRef,ViewChild, Input, Output, EventEmitter,HostListener,ElementRef } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {DndModule} from 'ng2-dnd';
// import {ColorPickerService} from 'angular4-color-picker';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { EditorComponent } from './editor/editor.component';
import { ImageResizerComponent } from './imageResizer/imageResizer.component';
import { SuggestArticleDialogComponent } from './suggest-article-dialog/suggest-article-dialog.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {AddContentRequest} from '../../models/content.modal'
import {AppProvider} from '../../providers/app.provider'
import {AdminService} from '../../providers/admin.service'
import {ContentService} from '../../providers/content.service';
import {TranslationService} from '../../providers/translation.service'
import  {ENV,Environment} from '../../env'

import {ENTER} from '@angular/cdk/keycodes';
import {SPACE} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
const COMMA = 188;

declare var jQuery:any;
declare var $ :any;
declare var tinymce: any;
declare var  google:any;


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss'], 
  providers:[FormControlDirective,SectionService,AdminService,ContentService,TranslationService]
})

export class AddContentComponent implements OnInit {


	@ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
	@ViewChild('fixedBox') fixedBox: ElementRef;

	@Input() elementId: String;
	@Output() onEditorKeyup = new EventEmitter<any>();

	editor;
	
	visible: boolean = true;
	selectable: boolean = true;
	removable: boolean = true;
	addOnBlur: boolean = false;

	// Enter, comma
	separatorKeysCodes = [ENTER, COMMA,SPACE];

	// fruits = [
	//     { name: 'Lemon' },
	//     { name: 'Lime' },
	//     { name: 'Apple' },
	// ];

	listOne= [ ];
	ckeditorContent
	currentIndex:any;
	rightPan:any;
	showRightpan:boolean=false;
	googleFromatata:any
	mouseDownIndex:number;
	afterDragIndex:number;
	gridAudioRef:any;
	gridVideoRef:any;
	userEngaButton=[];
	callToActionButton=[];
	ref
  localAdminListData
	addContentForm: FormGroup;
	addContentRequest:AddContentRequest=new  AddContentRequest()
	private color: string = "#FFFFFF";
	widthPx = '300';
    heightPx = '300';
    imageUrl = '';
    currentImageHorigontal: string;
    croppieImageHorigontal: string;
    waitLoader:boolean;
    sections:any;
    sectionsData:any;
    categories:any;
    subCategory:any;
    categoriesData:any;
    subCategoryData:any;
    adminList:any;
    localAdminList:any;
    searchUser:any;
    addedresponse:any;
    suggestedArticleList:any;
    forContent;
    todaydate;
    content;
    fixedBoxOffsetTop: number  = 0;
	showDiv:boolean=false;
	showTinymcIndex:number=-1;
	showTinymcFlag:boolean=true;
    uploadFile
    newUploadFiles=[]
    length
    tempCustomerBase64
    register
    audioCount:number=0;
    videoCount:number=0;
    documentCount:number=0;
    gridCount:number=0

    audioFileData=[];
    videoFileData=[];
    documentFileData=[];
    gridFileData=[];
    addServiceStatus:boolean=false;
    audioFileDataLength:number=0;
    videoFileDataLength:number=0;
    documentFileDataLength:number=0;
    gridFileDataLength:number=0;
    currentString:any;
    sendString:any;
    selectedValue:any;
    currentActiveIndex:number;
    outputStringArrayLength:number;
    caretPos
    elementRefrence:any;
    inputStringLength:number
    outputStringLength:number
    currentInputTag:any;



    x: number;
    y: number;
    px: number;
    py: number;
    width: number;
    height: number;
    minArea: number;
    draggingCorner: boolean;
    draggingWindow: boolean;
    resizer: Function;

    ///for call and user button active index////
    currentCallActiveIndex
    currenUserActiveIndex
    saveFlag1:boolean
    saveFlag2:boolean
    stringResource:StringResource=new  StringResource()
    contentId
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
     stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

	constructor(private dialog: MatDialog, 
		        private sanitizer: DomSanitizer,private fb: FormBuilder, private router: Router,
		        vcr: ViewContainerRef,
		        public toastr: ToastsManager,
		        private http: Http,
		        private sectionService:SectionService,
		        private appProvider: AppProvider,
		        private adminService:AdminService, 
            private translationService:TranslationService,
		        private contentService:ContentService) {
		
		this.ckeditorContent = null
				this.addContentRequest.tags=[]
				/*tinymce.init({
				  skin_url: 'assets/skins/lightgray'
				  // other settings
				});*/
      this.x = 0;
      this.y = 0;
      this.px = 0;
      this.py = 0;
      this.width = 300;
      this.height = 100; 
      this.draggingCorner = false;
      this.draggingWindow = false;
      this.minArea = 20000


 if (ENV.debug==true) {
       this.appProvider.current.loginData={
          role:'sectionAdministrator'
        }
 }

		this.rightPan={ }
		this.googleFromatata={ }
		this.forContent={}
		this.addContentForm = fb.group({
								'language':[null, Validators.compose([Validators.required])],
								'sectionId':[null, Validators.compose([Validators.required])],
								'sectionName':[null],
								'categoryName':[null],
								'categoryId':[null],
								'subCategoryName':[null],
								'subCategoryId':[null],
								'headline':[null , Validators.compose([Validators.required, Validators.maxLength(200)])],
								'tagline':[null, Validators.compose([Validators.required, Validators.maxLength(100)])],
								'tags':[null],
								'dateOfCreation':[null],
								'typeOfUser':[null, Validators.compose([Validators.required])],
								'serchUser':[null],
								'userList':[null],
								'suggestedArticle':[null, Validators.compose([Validators.required])],
								'suggestedArticleList':[null],
								'sortlistForHomepage':[null],
								'sortlistForCategory':[null],
								'applicableStateLists':[null, Validators.compose([Validators.required])]
			
							})
		// this.filteredStates = this.addContentForm.controls['headline'].valueChanges
  //       .startWith(null)
  //       .map(state => state ? this.filterStates(state) : this.appProvider.current.suggestedString.slice());
                 
          }
		// filterStates(name: string) {
  //   return this.appProvider.current.suggestedString.filter(state =>
  //     state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  // }
   //  area() {
   //    return this.width * this.height;
   //  }

   //  onWindowPress(event: MouseEvent) {
   //    if (this.currentIndex) {
   //    if (this.currentIndex) {
   //    this.draggingWindow = true;
   //    this.px = event.clientX;
   //    this.py = event.clientY;
   //   }
   // }
   //  }

   //  onWindowDrag(event: MouseEvent) {
   //    if (this.currentIndex) {
   //     if (!this.draggingWindow) {
   //        return;
   //    }
   //    let offsetX = event.clientX - this.px;
   //    let offsetY = event.clientY - this.py;

   //    this.x += offsetX;
   //    this.y += offsetY;
   //    this.px = event.clientX;
   //    this.py = event.clientY;
   //  }
   //  }

   //  topLeftResize(offsetX: number, offsetY: number) {
   //    if (this.currentIndex) {
   //    this.x += offsetX;
   //    this.y += offsetY;
   //    this.width -= offsetX;
   //    this.height -= offsetY;
   //  }
   //  }

   //  topRightResize(offsetX: number, offsetY: number) {
   //    if (this.currentIndex) {
   //    this.y += offsetY;
   //    this.width += offsetX;
   //    this.height -= offsetY;
   //   }
   //  }

   //  bottomLeftResize(offsetX: number, offsetY: number) {
   //    if (this.currentIndex) {
   //    this.x += offsetX;
   //    this.width -= offsetX;
   //    this.height += offsetY;
   //  }
   //  }

   //  bottomRightResize(offsetX: number, offsetY: number) {
   //    if (this.currentIndex) {
   //    this.width += offsetX;
   //    this.height += offsetY;
   //  }
   //  }

   //  onCornerClick(event: MouseEvent, resizer?: Function) {
   //    console.log(this.currentIndex)
   //    if (this.currentIndex) {
   //      console.log('onCornerClick');
   //      this.draggingCorner = true;
   //      this.px = event.clientX;
   //      this.py = event.clientY;
   //      this.resizer = resizer;
   //      event.preventDefault();
   //      event.stopPropagation();
   //    }
     
   //  }

   //  @HostListener('document:mousemove', ['$event'])
   //  onCornerMove(event: MouseEvent) {
   //    if (this.currentIndex) {
   //       console.log('onCornerMove');
   //    console.log(this.currentIndex)
   //    if (!this.draggingCorner) {
   //        return;
   //    }
   //    let offsetX = event.clientX - this.px;
   //    let offsetY = event.clientY - this.py;

   //    let lastX = this.x;
   //    let lastY = this.y;
   //    let pWidth = this.width;
   //    let pHeight = this.height;

   //    this.resizer(offsetX, offsetY);
   //    if (this.area() < this.minArea) {
   //        this.x = lastX;
   //        this.y = lastY;
   //        this.width = pWidth;
   //        this.height = pHeight;
   //    }
   //    this.px = event.clientX;
   //    this.py = event.clientY;
   //    }
     
   //  }

   //  @HostListener('document:mouseup', ['$event'])
   //  onCornerRelease(event: MouseEvent) {
   //    if (this.currentIndex) {
   //      console.log('onCornerRelease');
   //      this.draggingWindow = false;
   //      this.draggingCorner = false;
   //    }
     
   //  }

    /*--end resize*/


    ngOnInit() {
    	// tinymce.init({
	    //    selector: 'div.editable',
     //        inline: true,
	    //   plugins: ['link', 'paste', 'table'],
	    //   skin_url: 'assets/skins/lightgray',
	    //   setup: editor => {
	    //     this.editor = editor;
	    //     editor.on('keyup', () => {
	    //       const content = editor.getContent();
	    //       this.onEditorKeyup.emit(content);
	    //     });
	    //   },
	    // });

  		this.todaydate=new Date().toISOString()
		// $('.selectize').selectize({
		//     plugins: ['remove_button'],
		//     persist: false,
		//     createOnBlur: true,
		//     create: true
		// });

		$(document).on('click','.for_edit',function(){
			$(this).closest('.li').find('.to_edit').toggle('100');
		})
		$(document).on('click','.for_delete',function(){
			$(this).closest('.li').remove();
		});
		 $('.file-type').on('change',function(e){
		    // let tmppath = URL.createObjectURL(e.target.files[0]);
		    // //console.log($(this));
		    // $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
		    $(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});

		$('.file_remove').on('click',function(){
		    // var a = $(this).closest('.fileinput').find('img').attr('src','./assets/img/placeholder5.png');
		    // //console.log(a);
		    $(this).closest('.fileinput-exists').hide();
		    $(this).closest('.fileinput').find('.fileinput-noexists').show();
		});
		//alert(this.appProvider.current.actionFlag)
		if (this.appProvider.current.actionFlag=="editContent") {
             this.addContentRequest=this.appProvider.current.currentContentData
             if (this.addContentRequest.suggestedArticle==false) {
             	this.addContentRequest.suggestedArticle='false'
             }else if(this.addContentRequest.suggestedArticle==true){
                this.addContentRequest.suggestedArticle='true'
             }
             this.listOne=this.appProvider.current.currentContentData.contentBody;
             this.userEngaButton=this.appProvider.current.currentContentData.userEngagementButton;
             this.callToActionButton=this.appProvider.current.currentContentData.callToActionButton;
             //this.croppieImageHorigontal=this.appProvider.current.currentContentData.horizontalPicture;
             //this.croppieImageThumbnail=this.appProvider.current.currentContentData.thumbnailPicture;
             this.currentImageHorigontal=this.appProvider.current.currentContentData.horizontalPicture;
             this.currentImageThumbnail=this.appProvider.current.currentContentData.thumbnailPicture;
             this.suggestedArticleList=this.appProvider.current.currentContentData.suggestedArticleList
           if (this.appProvider.current.currentContentData.googleForm==true || this.appProvider.current.currentContentData.googleForm=='true') {
           	    this.googleFromatata.tag="form";
           	    this.googleFromatata.url=this.appProvider.current.currentContentData.googleFormUrl;
           	    this.googleFromatata.formURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.appProvider.current.currentContentData.googleFormUrl);
           }
           for (let i= 0;i<this.appProvider.current.currentContentData.contentBody.length; i++) {
           	  if (this.appProvider.current.currentContentData.contentBody[i].tag=='audio') {
           	  	 if (this.appProvider.current.currentContentData.contentBody[i].count>this.audioCount) {
           	  	 	this.audioCount=this.appProvider.current.currentContentData.contentBody[i].count
           	  	 }
           	  }
           	  if (this.appProvider.current.currentContentData.contentBody[i].tag=='video') {
           	  	 if (this.appProvider.current.currentContentData.contentBody[i].count>this.videoCount) {
           	  	 	this.videoCount=this.appProvider.current.currentContentData.contentBody[i].count
           	  	 }
           	  }
           	   if (this.appProvider.current.currentContentData.contentBody[i].tag=='document') {
           	  	 if (this.appProvider.current.currentContentData.contentBody[i].count>this.documentCount) {
           	  	 	this.documentCount=this.appProvider.current.currentContentData.contentBody[i].count
           	  	 }
           	  }
           	  if (this.appProvider.current.currentContentData.contentBody[i].tag=='grid') {
           	  	 if (this.appProvider.current.currentContentData.contentBody[i].count>this.gridCount) {
           	  	 	this.gridCount=this.appProvider.current.currentContentData.contentBody[i].count
           	  	 }
           	  }
           }
			 this.getSectionList()
			 this.getCategory()
			 this.getsubCategory()
			 this.getUserList(this.appProvider.current.currentContentData.typeOfUser)
	   }
		else{
           this.getSectionList()
			this.addContentRequest.dateOfCreation=this.todaydate.split('T')[0]
		}
	}		
	

    safeURL(url){
     return this.sanitizer.bypassSecurityTrustResourceUrl(url); 
    }
     onAddTags(tags){
        console.log('add'+tags)
        this.addContentRequest.tags.push({name:tags.trim()})
        this.addContentRequest.tag=''
         //console.log('add',b)
       // this.addContentForm.controls['tags'].setValue(event)
        //this.addContentForm.controls['tags'].updateValueAndValidity()
        //this.addContentRequest.tag=event
       
     }
    addText(){
    	 this.listOne.push({tag:"text",backgroundColor:'#FFFFFF',
         top:'10px',bottom:'10px',
         right:'10px',left:'10px',
         buttonText:'button',
         width:'100%',
         title:'Title',
         aligment:'center',
          display:'inline-block',
          text:'Dummy Text',
          editedStatus:false
        }) 
    	//  tinymce.init({
	    //   selector: '#' + this.elementId,
	    //   plugins: ['link', 'paste', 'table'],
	    //   skin_url: 'assets/skins/lightgray',
	    //   setup: editor => {
	    //     this.editor = editor;
	    //     editor.on('keyup', () => {
	    //       const content = editor.getContent();
	    //       this.onEditorKeyup.emit(content);
	    //     });
	    //   },
	    // });
    }
	addImage(){
        this.listOne.push({tag:"image",backgroundColor:'#FFFFFF',
          top:'10px',bottom:'10px',
          right:'6px',left:'6px',
          buttonText:'button',width:'75%',
          url:'./assets/img/cover.jpeg',
          altTag:'file not found',title:'Title', 
          caption:'Image',aligment:'center', 
          display:'inline-block',
          downloadable:true,
          x : 0,
          y : 0,
          px : 0,
          py : 0,
          widthImg : 300,
          heightImg : 100, 
          draggingCorner : false,
          draggingWindow : false,
          minArea : 20000})
	}
	addAudio(){
		 this.audioCount=this.audioCount+1;
		 console.log(this.audioCount)
        this.listOne.push({tag:"audio",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button'
        	,width:'75%',url:'./assets/videos/songs.mp3',altTag:'file not found',title:'Title', caption:'Audio',aligment:'center', display:'inline-block',count:this.audioCount,downloadable:true})
	}
	addVideo(){
		this.videoCount=this.videoCount+1;
		console.log(this.videoCount)
		this.listOne.push({tag:"video",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',
			width:'75%',url:'./assets/videos/SampleVideo.mp4',altTag:'file not found',title:'Title', caption:'Video',aligment:'center', display:'inline-block',count:this.videoCount,downloadable:true})
	}
	addFile(){
		this.documentCount=this.documentCount+1;
		 console.log(this.documentCount)
		this.listOne.push({tag:"document",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',
			width:'110px',url:'',altTag:'file not found',title:'Title', caption:'File',aligment:'center', display:'inline-block',count:this.documentCount,downloadable:true})
	}
	addGrid(){
		   this.gridCount=this.gridCount+1;
		   console.log(this.gridCount)
		   this.listOne.push({tag:"grid",tags:'grid, grid',top:null,bottom:null,right:null,left:null,aligment:'center',title:'Title',caption:'File',activeIndex:null,
		    audiourl1:null,videourl1:null,imgurl1:'./assets/img/placeholder5.png',documenturl1:null,
			audiourl2:null,videourl2:null,imgurl2:'./assets/img/placeholder5.png',documenturl2:null,
			audiourl3:null,videourl3:null,imgurl3:'./assets/img/placeholder5.png',documenturl3:null,
			count:this.gridCount,
			downloadable:true

	})
	}
    addUserEngBtn(){
       this.listOne.push({tag:"userEngBtn",top:null,bottom:null,right:null,left:null,aligment:'center',title:'User Engagement',caption:'File',activeIndex:null,
       btn1:null,
       btn2:null,
       btn3:null,
       btn4:null,
       btn5:null,
      count:this.gridCount,
      top1:'12px',bottom1:'12px',
      right1:'6px',left1:'6px',
      top2:'12px',bottom2:'12px',
      right2:'6px',left2:'6px',
       top3:'12px',bottom3:'12px',
      right3:'6px',left3:'6px',
      mtop1:'0px',mbottom1:'0px',
      mright1:'0px',mleft1:'0px',
      mtop2:'0px',mbottom2:'0px',
      mright2:'0px',mleft2:'0px',
      mtop3:'0px',mbottom3:'0px',
      mright3:'0px',mleft3:'0px',
       downloadable:true,
       outline1:false,
       outline2:false,
       outline3:false

  })
  }
  addCallToActBtn(){
       this.listOne.push({tag:"CallToActBtn",top:null,bottom:null,right:null,left:null,aligment:'center',title:'Call to action',caption:'File',activeIndex:null,
       btn1:null,
       btn2:null,
       btn3:null,
       btn4:null,
       phone1:null,
       phone2:null,
       phone3:null,
       count:this.gridCount,
      top1:'12px',bottom1:'12px',
      right1:'6px',left1:'6px',
      top2:'12px',bottom2:'12px',
      right2:'6px',left2:'6px',
      top3:'12px',bottom3:'12px',
      right3:'6px',left3:'6px',
      mtop1:'0px',mbottom1:'0px',
      mright1:'0px',mleft1:'0px',
      mtop2:'0px',mbottom2:'0px',
      mright2:'0px',mleft2:'0px',
      mtop3:'0px',mbottom3:'0px',
      mright3:'0px',mleft3:'0px',
       downloadable:true,
       outline1:false,
       outline2:false,
       outline3:false

  })
  }
	addForm(){
		this.googleFromatata.tag="form"; 
		// this.googleFromatata.url=null;
	}
  onRemoveGoogleForm(){
    this.googleFromatata.tag="null"; 
    this.googleFromatata.formURL=null
    this.googleFromatata.url=null
  }



	addApply(flag){
	
		  this.listOne.push({tag:"apply",backgroundColor:'#FFFFFF',
          top:'10px',bottom:'10px',
          right:'10px',left:'10px',
          outline:false
         })
		// if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //         this.callToActionButton.push({tag:'button',title:'Apply',status:true})
		// }
	}
	addCall(flag){
	    this.listOne.push({tag:"call",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false,
          phone:null
         })
		// if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //          this.callToActionButton.push({tag:'button',title:'Call',status:true})
  //      }
	}
	addCallMe(flag){
		
		// if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //           this.callToActionButton.push({tag:'button',title:'Call me back',status:true})
  //          }
  this.listOne.push({tag:"callMeBack",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false,
          phone:null
         })
	}
	addIntrested(flag){
      
		// if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //       this.callToActionButton.push({tag:'button',title:"Im Interested",status:true})
  //      }
    this.listOne.push({tag:"intrested",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false
         })
	}
	addlike(flag){
		
		// if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //          this.userEngaButton.push({tag:'button',title:"Kadak",status:true})
  //      }
  this.listOne.push({tag:"like",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false,
         })
	}
	addshare(flag){
		
		// if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //         this.userEngaButton.push({tag:'button',title:"Share",status:true})
  //       }
  this.listOne.push({tag:"share",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false
         })
	}
	addcomment(flag){
		
		// if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //          this.userEngaButton.push({tag:'button',title:"Comment",status:true})
  //      } 
  this.listOne.push({tag:"comment",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false
         })
	}
	addsave(flag){
		  this.listOne.push({tag:"save",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false
         })
		// if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //        this.userEngaButton.push({tag:'button',title:"Save",status:true})
  //      }
	}
	addownload(flag){
		
		// if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
  //        this.userEngaButton.push({tag:'button',title:"Download",status:true})
  //     }
  this.listOne.push({tag:"download",backgroundColor:'#FFFFFF',
          top:'12px',bottom:'12px',
          right:'6px',left:'6px',
          aligment:'center',
          outline:false
         })
	}

OnFirstCall(i,item){
  this.rightPan=item
  //alert(this.currentIndex)
  this.currentIndex=i;
  this.currentCallActiveIndex=1
 console.log('currentIndex',this.currentIndex)
 console.log('call index',this.currentCallActiveIndex)
}
OnSecondCall(i,item){
  this.rightPan=item
  this.currentIndex=i;
  this.currentCallActiveIndex=2
   console.log('currentIndex',this.currentIndex)
 console.log('call index',this.currentCallActiveIndex)
}
OnThirdCall(i,item){
  this.rightPan=item
   this.currentIndex=i;
   this.currentCallActiveIndex=3
    console.log('currentIndex',this.currentIndex)
 console.log('call index',this.currentCallActiveIndex)
}
OnFourthCall(i){
  this.currentIndex=i;
   this.currentCallActiveIndex=4
    console.log('currentIndex',this.currentIndex)
 console.log('call index',this.currentCallActiveIndex)
}
OnFirstUser(i,item){
this.rightPan=item
  this.currentIndex=i;
  this.currenUserActiveIndex='1'
 console.log('currentIndex',this.currentIndex)
 console.log('user index',this.currenUserActiveIndex)
}
OnSecondtUser(i,item){
  this.rightPan=item
  this.currentIndex=i;
  this.currenUserActiveIndex=2
   console.log('currentIndex',this.currentIndex)
 console.log('user index',this.currenUserActiveIndex)
}
OnThirdtUser(i,item){
  this.rightPan=item
  this.currentIndex=i;
  this.currenUserActiveIndex=3
   console.log('currentIndex',this.currentIndex)
 console.log('user index',this.currenUserActiveIndex)
}
OnFourUser(i){
  this.currentIndex=i;
  this.currenUserActiveIndex=4
   console.log('currentIndex',this.currentIndex)
 console.log('user index',this.currenUserActiveIndex)
}
OnFiveUser(i){
  this.currentIndex=i;
  this.currenUserActiveIndex=5
   console.log('currentIndex',this.currentIndex)
 console.log('user index',this.currenUserActiveIndex)
}
addApplyRight(Apply){
  if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=Apply
  }else if(this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=Apply
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=Apply
  }
  //else if(this.currentCallActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Apply
  // }
}
addCallRight(Call){
   if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=Call
  }else if(this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=Call
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=Call
  }
  //else if(this.currentCallActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Apply
  // }
}
addCallMeRight(callmeback){
  if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=callmeback
  }else if(this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=callmeback
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=callmeback
  }
  //else if(this.currentCallActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Apply
  // }
}
addIntrestedRight(ImInterested){
   if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=ImInterested
  }else if(this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=ImInterested
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=ImInterested
  }
  //else if(this.currentCallActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Apply
  // }
}
addlikeRight(Kadak){
  //alert(Kadak)
  if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=Kadak
  }else if( this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=Kadak
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=Kadak
  }
  // else if(this.currenUserActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Kadak
  // }else if(this.currenUserActiveIndex==5){
  //     this.listOne[this.currentIndex].btn5=Kadak
  // }
}
addshareRight(Share){
 if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=Share
  }else if( this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=Share
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=Share
  }
  // else if(this.currenUserActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Kadak
  // }else if(this.currenUserActiveIndex==5){
  //     this.listOne[this.currentIndex].btn5=Kadak
  // }
}
addcommentRight(Commentt){
   if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=Commentt
  }else if( this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=Commentt
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=Commentt
  }
  // else if(this.currenUserActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Kadak
  // }else if(this.currenUserActiveIndex==5){
  //     this.listOne[this.currentIndex].btn5=Kadak
  // }
}
addsaveRight(Save){
   if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=Save
  }else if( this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=Save
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=Save
  }
  // else if(this.currenUserActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Kadak
  // }else if(this.currenUserActiveIndex==5){
  //     this.listOne[this.currentIndex].btn5=Kadak
  // }
}
addownloadRight(Download){
   if (this.listOne[this.currentIndex].btn1==null) {
      this.listOne[this.currentIndex].btn1=Download
  }else if( this.listOne[this.currentIndex].btn2==null){
      this.listOne[this.currentIndex].btn2=Download
  }else if(this.listOne[this.currentIndex].btn3==null){
      this.listOne[this.currentIndex].btn3=Download
  }
  // else if(this.currenUserActiveIndex==4){
  //     this.listOne[this.currentIndex].btn4=Kadak
  // }else if(this.currenUserActiveIndex==5){
  //     this.listOne[this.currentIndex].btn5=Kadak
  // }
}

 remUserBtn1(i){
    this.currentIndex=i
    this.listOne[this.currentIndex].btn1=null
    this.listOne[this.currentIndex].top1='12px'
    this.listOne[this.currentIndex].bottom1='12px'
    this.listOne[this.currentIndex].right1='6px'
    this.listOne[this.currentIndex].left1='6px'
    this.listOne[this.currentIndex].outline1=false
  }
  remUserBtn2(i){
    this.currentIndex=i
    this.listOne[this.currentIndex].btn2=null
    this.listOne[this.currentIndex].top2='12px'
    this.listOne[this.currentIndex].bottom2='12px'
    this.listOne[this.currentIndex].right2='6px'
    this.listOne[this.currentIndex].left2='6px'
    this.listOne[this.currentIndex].outline2=false
  }
  remUserBtn3(i){
    this.currentIndex=i
    this.listOne[this.currentIndex].btn3=null
    this.listOne[this.currentIndex].top2='12px'
    this.listOne[this.currentIndex].bottom2='12px'
    this.listOne[this.currentIndex].right2='6px'
    this.listOne[this.currentIndex].left2='6px'
    this.listOne[this.currentIndex].outline2=false
  }
  remCallBtn1(i){
    this.currentIndex=i
    this.listOne[this.currentIndex].btn1=null
    this.listOne[this.currentIndex].top1='12px'
    this.listOne[this.currentIndex].bottom1='12px'
    this.listOne[this.currentIndex].right1='6px'
    this.listOne[this.currentIndex].left1='6px'
    this.listOne[this.currentIndex].outline1=false
  }
  remCallBtn2(i){
    this.currentIndex=i
    this.listOne[this.currentIndex].btn2=null
    this.listOne[this.currentIndex].top2='12px'
    this.listOne[this.currentIndex].bottom2='12px'
    this.listOne[this.currentIndex].right2='6px'
    this.listOne[this.currentIndex].left2='6px'
    this.listOne[this.currentIndex].outline2=false
  }
  remCallBtn3(i){
    this.currentIndex=i
    this.listOne[this.currentIndex].btn3=null
    this.listOne[this.currentIndex].top3='12px'
    this.listOne[this.currentIndex].bottom3='12px'
    this.listOne[this.currentIndex].right3='6px'
    this.listOne[this.currentIndex].left3='6px'
    this.listOne[this.currentIndex].outline3=false
  }
	onClickOnDragItem(index,item,ref?){
      //alert(index)
      this.showRightpan=true;
      this.currentIndex=index;
      this.rightPan=item
      this.rightPan.placeHolder=item.url;
      if(ref){
      	this.ref=ref
      }
	}
	onTextChange(){
		this.listOne[this.currentIndex].text=this.rightPan.text;
	}
	onAligmentChange(flag){
     this.listOne[this.currentIndex].aligment=flag;
	}
	onTopChange(){
     this.listOne[this.currentIndex].top=this.rightPan.top
	}
	onRigthChange(){
     this.listOne[this.currentIndex].right=this.rightPan.right
	}
	onBottonChange(){
      this.listOne[this.currentIndex].bottom=this.rightPan.bottom
	}
	onLeftChange(){
       this.listOne[this.currentIndex].left=this.rightPan.left
	}
	onButtonTextChange(){
       
	}
	onWidthChange(){
      this.listOne[this.currentIndex].width=this.rightPan.width
	}
	onUrlChange(right:any){
	  //this.listOne[this.currentIndex].tempUrl=this.rightPan.url
      this.listOne[this.currentIndex].url=this.rightPan.url
    //  this.listOne[this.currentIndex].placeHolder=this.rightPan.url
  	  //console.log(this.ref);

  	  if (this.listOne[this.currentIndex].tag=='audio') {
  	  	if (this.audioFileData.length>0) {
	  	    let index=this.audioFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.audioFileData[index].file=null
  	  	}
  	  }
  	  if (this.listOne[this.currentIndex].tag=='video') {
  	  	if (this.videoFileData.length>0) {
  	    		let index=this.videoFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
  	    		this.videoFileData[index].file=null
  	  	}
  	  }
  	  if (this.listOne[this.currentIndex].tag=='document') {
  	  	if (this.documentFileData.length>0) {
  	    	let index=this.documentFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
  	   		 this.documentFileData[index].file=null
  	  	}
  	  }
      if ((this.listOne[this.currentIndex].tag=='video' || this.listOne[this.currentIndex].tag=='audio' ) && this.ref) {
      	//console.log(this.ref);
      	this.ref.load();
    	this.ref.play();
      }
	}
	onFormUrlChange(url){
      this.googleFromatata.formURL=this.sanitizer.bypassSecurityTrustResourceUrl(url)

                      this.toastr.info('You have from link below the content body')
                      // code...
                   
	}
	onaltTagChange(){
      this.listOne[this.currentIndex].altTag=this.rightPan.altTag
	}
	onTitleChange(){
      this.listOne[this.currentIndex].title=this.rightPan.title
	}
	onDownloadableChange(){
		this.listOne[this.currentIndex].downloadable=this.rightPan.downloadable
	}
	onCaptionChange(){
      this.listOne[this.currentIndex].caption=this.rightPan.caption
	}
	onbgChange(){
		this.listOne[this.currentIndex].backgroundColor=this.rightPan.bgColor	
	}
	oncolor(color){
	    this.listOne[this.currentIndex].backgroundColor=color	
	}
	deleteFromArray(index){
		let a=this.listOne.splice(index,1)
	}
    OnFirstGrid(i,item,audio,video){
         this.currentIndex=i;
         this.rightPan=item
      	 this.listOne[this.currentIndex].activeIndex=1;
      	if (this.listOne[this.currentIndex].imgurl1==null &&  this.listOne[this.currentIndex].audiourl1==null && this.listOne[this.currentIndex].videourl1==null && this.listOne[this.currentIndex].documenturl1==null) {
	      	// code...
	      this.listOne[this.currentIndex].imgurl1='./assets/img/placeholder5.png' ;
	      this.listOne[this.currentIndex].audiourl1=null;
	      this.listOne[this.currentIndex].videourl1=null;
	      this.listOne[this.currentIndex].documenturl1=null;
	      this.rightPan=this.listOne[this.currentIndex];
	  }else{
	  	 this.rightPan=this.listOne[this.currentIndex];
	  }
      
    }
    OnSecondGrid(i,item,audio,video){
        this.currentIndex=i;
         this.rightPan=item
	      this.listOne[this.currentIndex].activeIndex=2;
	      if (this.listOne[this.currentIndex].imgurl2==null &&  this.listOne[this.currentIndex].audiourl2==null && this.listOne[this.currentIndex].videourl2==null && this.listOne[this.currentIndex].documenturl2==null) {
	      	// code...
		      this.listOne[this.currentIndex].imgurl2='./assets/img/placeholder5.png' ;
		      this.listOne[this.currentIndex].audiourl2=null;
		      this.listOne[this.currentIndex].videourl2=null;
		      this.listOne[this.currentIndex].documenturl2=null;
		      this.rightPan=this.listOne[this.currentIndex];
	      }else{
	      	 this.rightPan=this.listOne[this.currentIndex];
	      }
      
    }
    OnThirdGrid(i,item,audio,video){
        this.currentIndex=i;
         this.rightPan=item
	      this.listOne[this.currentIndex].activeIndex=3;
	       if (this.listOne[this.currentIndex].imgurl3==null &&  this.listOne[this.currentIndex].audiourl3==null && this.listOne[this.currentIndex].videourl3==null && this.listOne[this.currentIndex].documenturl3==null) {
	      	// code...
	      this.listOne[this.currentIndex].imgurl3='./assets/img/placeholder5.png' ;
	      this.listOne[this.currentIndex].audiourl3=null;
	      this.listOne[this.currentIndex].videourl3=null;
	      this.listOne[this.currentIndex].documenturl3=null;
	      this.rightPan=this.listOne[this.currentIndex];
	  }else{
	  	this.rightPan=this.listOne[this.currentIndex];
	  }
	 
    }
	 itemDragged(i){
	 	// tinymce.init({
	  //      selector: 'div.editable',
   //          inline: true,
	  //     plugins: ['link', 'paste', 'table'],
	  //     skin_url: 'assets/skins/lightgray',
	  //     setup: editor => {
	  //       this.editor = editor;
	  //       editor.on('keyup', () => {
	  //         const content = editor.getContent();
	  //         this.onEditorKeyup.emit(content);
	  //       });
	  //     },
	  //   });
	 this.mouseDownIndex=i;
    //console.log('mousedown',i)
   }
	itemSwapped(i){
	 this.afterDragIndex=i;
	 //console.log('mouseUp',i)
	}
	ontagsChange(){
		this.listOne[this.currentIndex].tags=this.rightPan.tags	
	}
	imageUploadForGridOneIndexEvent(evt: any,right:any) {
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
            this.rightPan.imgurl1 = fr.result;
            this.listOne[this.currentIndex].imgurl1=fr.result;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file1=null
		  }
        };
        fr.readAsDataURL(file);
	}
	onGridImgUrl1Change(right:any){
            this.listOne[this.currentIndex].imgurl1=this.rightPan.imgurl1;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=null;
		  if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file1=null
		  }
  	  
	}
	onGridVideoUrl1Change(right:any){

            this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=this.rightPan.videourl1;
			this.listOne[this.currentIndex].documenturl1=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file1=null
		  }
	}
	onGridAudioUrl1Change(right:any){
		    this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=this.rightPan.audiourl1;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file1=null
		  }

	}
	onGridDocumentUrl1Change(right:any){
            this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=this.rightPan.documenturl1;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file1=null
		  }
	}
	imageUploadForGridTwoIndexEvent(evt: any,right:any) {
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
            this.rightPan.imgurl2 = fr.result;
            this.listOne[this.currentIndex].imgurl2=fr.result;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file2=null
		  }
        };
        fr.readAsDataURL(file);

	}
	onGridImgUrl2Change(right:any){
            this.listOne[this.currentIndex].imgurl2=this.rightPan.imgurl2;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file2=null
		  }
	}
	onGridVideoUrl2Change(right:any){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=this.rightPan.videourl2;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file2=null
		  }
	}
	onGridAudioUrl2Change(right:any){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=this.rightPan.audiourl2;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file2=null
		  }
	}
	onGridDocumentUrl2Change(right:any){
             this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=this.rightPan.documenturl2;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file2=null
		  }
	}
	imageUploadForGridThirdIndexEvent(evt: any,right) {
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
            this.rightPan.imgurl3 = fr.result;
            this.listOne[this.currentIndex].imgurl3=fr.result;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file3=null
		   }
        };
        fr.readAsDataURL(file);

	}
	onGridImgUrl3Change(right:any){
            this.listOne[this.currentIndex].imgurl3=this.rightPan.imgurl3;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file3=null
		   }
	}
	onGridVideoUrl3Change(right:any){
            this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=this.rightPan.videourl2;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file3=null
		   }
	}
	onGridAudioUrl3Change(right:any){
            this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl2=this.rightPan.audiourl2;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file3=null
		   }
	}
	onGridDocumentUrl3Change(right:any){
            this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=this.rightPan.documenturl2;
			if (this.gridFileData.length>0) {
	  	    let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
	  	    this.gridFileData[index].file3=null
		   }
	}
	removeCallButton(i){

            this.callToActionButton.splice(i,1)
	}
    removeUerButton(i){
            this.userEngaButton.splice(i,1)
    }
   onOutLine(){
     this.listOne[this.currentIndex].outline=true
   }
   onFilled(){
     this.listOne[this.currentIndex].outline=false
   }
   onOutLine1(){
     this.listOne[this.currentIndex].outline1=true
   }
   onFilled1(){
     this.listOne[this.currentIndex].outline1=false
   }
   onTopChange1(){
     this.listOne[this.currentIndex].top1=this.rightPan.top1
  }
  onRigthChange1(){
     this.listOne[this.currentIndex].right1=this.rightPan.right1
  }
  onBottonChange1(){
      this.listOne[this.currentIndex].bottom1=this.rightPan.bottom1
  }
  onLeftChange1(){
       this.listOne[this.currentIndex].left1=this.rightPan.left1
  }
   onOutLine2(){
     this.listOne[this.currentIndex].outline2=true
   }
   onFilled2(){
     this.listOne[this.currentIndex].outline2=false
   }
   onTopChange2(){
     this.listOne[this.currentIndex].top2=this.rightPan.top2
  }
  onRigthChange2(){
     this.listOne[this.currentIndex].right2=this.rightPan.right2
  }
  onBottonChange2(){
      this.listOne[this.currentIndex].bottom2=this.rightPan.bottom2
  }
  onLeftChange2(){
       this.listOne[this.currentIndex].left2=this.rightPan.left2
  }

   onOutLine3(){
     this.listOne[this.currentIndex].outline3=true
   }
   onFilled3(){
     this.listOne[this.currentIndex].outline3=false
   }
   onTopChange3(){
     this.listOne[this.currentIndex].top3=this.rightPan.top3
  }
  onRigthChange3(){
     this.listOne[this.currentIndex].right3=this.rightPan.right3
  }
  onBottonChange3(){
      this.listOne[this.currentIndex].bottom3=this.rightPan.bottom3
  }
  onLeftChange3(){
       this.listOne[this.currentIndex].left3=this.rightPan.left3
  }




  /////////////////////////////margin///////////
   monTopChange1(){
     this.listOne[this.currentIndex].mtop1=this.rightPan.mtop1
  }
  monRigthChange1(){
     this.listOne[this.currentIndex].mright1=this.rightPan.mright1
  }
  monBottonChange1(){
      this.listOne[this.currentIndex].mbottom1=this.rightPan.mbottom1
  }
  monLeftChange1(){
       this.listOne[this.currentIndex].mleft1=this.rightPan.mleft1
  }
   
   monTopChange2(){
     this.listOne[this.currentIndex].mtop2=this.rightPan.mtop2
  }
  monRigthChange2(){
     this.listOne[this.currentIndex].mright2=this.rightPan.mright2
  }
  monBottonChange2(){
      this.listOne[this.currentIndex].mbottom2=this.rightPan.mbottom2
  }
  monLeftChange2(){
       this.listOne[this.currentIndex].mleft2=this.rightPan.mleft2
  }
   monTopChange3(){
     this.listOne[this.currentIndex].mtop3=this.rightPan.mtop3
  }
  monRigthChange3(){
     this.listOne[this.currentIndex].mright3=this.rightPan.mright3
  }
  monBottonChange3(){
      this.listOne[this.currentIndex].mbottom3=this.rightPan.mbottom3
  }
  monLeftChange3(){
       this.listOne[this.currentIndex].mleft3=this.rightPan.mleft3
  }
	video(video1){
		//console.log(video1)
	}
  onPhoneChange3(){
  this.listOne[this.currentIndex].phone3=this.rightPan.phone3
  }
  onPhoneChange2(){
  this.listOne[this.currentIndex].phone2=this.rightPan.phone2
  }
  onPhoneChange1(){
  this.listOne[this.currentIndex].phone1=this.rightPan.phone1
  }
  onPhoneChange(){
     this.listOne[this.currentIndex].phone=this.rightPan.phone
  }
onDeleteBody(){
  //alert('hy')
  this.listOne=[]
  this.showRightpan=false
}
 
	/*demo:any
  	
	transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];

    htmlStr: string = '<input  placeholder="Add tagline" type="text">';
    items = [
            {name:'Textbox'},
            {name:'Textarea'},
            
			{name:'File_Upload'},
			{name:'Video'},
			{name:'Audio'},
			{name:'Document'}
	     ];

	 listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    listTeamOne: Array<string> = [];
	
	transferDataSuccess($event: any) {
        this.receivedData.push($event);
        //console.log(JSON.stringify(this.receivedData))
    }*/
  	

	
	/*imagChange(){

	    $('.file-type').on('change',function(e){
	    	let tmppath = URL.createObjectURL(e.target.files[0]);
	    	
		    //console.log($(this));
		    $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
	    	$(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});
 	}*/
 	
 	formimage(){
 		$('.file-type').on('change',function(e){
		    let tmppath = URL.createObjectURL(e.target.files[0]);
		    //console.log($(this));
		    $(this).closest('.btn-file').hide();
		    $(this).closest('.file_upload').find('img').attr('src',tmppath);
	    	$(this).closest('.file_upload').find('.file_img').show();
		});	
 	}

 	close_img(){
 		$('.file_img .close').click(function() {
	 		//console.log('s');
		    $(this).closest('.file_img').hide();
			$(this).closest('.file_img').find('img').attr('src','./assets/img/placeholder5.png');
	    	$(this).closest('.file_upload').find('.btn-file').show();
 		})
 	}
    imageUploadEvent(evt: any) {
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
            this.rightPan.url = fr.result;
            this.rightPan.placeHolder=fr.result;
            this.listOne[this.currentIndex].url=fr.result
        };
        fr.readAsDataURL(file);
    }

    newImageResultFromCroppieHorigontal(img: string) {
        this.croppieImageHorigontal = img;
        //console.log(this.croppieImageHorigontal)
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
        //console.log(this.croppieImageThumbnail)
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

	 getSectionList(){
	 	    this.waitLoader = true;
	 	    this.categories=[]
	 	    this.subCategory=[]
	              this.sectionService.onGetSection()
	            .subscribe(data => {
	                this.waitLoader = false;
	                this.sectionsData=data.filter(arg=>arg.deleteStatus!=true);;
	                if (this.addContentRequest.language) {
	                     this.sections=data.filter(arg=>arg.language==this.addContentRequest.language);;
	                }
	            },error=>{
	            	 this.waitLoader = false;
	                alert(error)
	                this.waitLoader = false;
	            })
	}
	getCategory(){
		 this.waitLoader = true;
		 this.subCategory=[]
         this.sectionService.onGetCategory(this.addContentRequest.sectionId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.categoriesData=data.response.filter(arg=>arg.deleteStatus!=true);
                     if (this.addContentRequest.language) {
	                     this.categories=data.response.filter(arg=>arg.language==this.addContentRequest.language && arg.deleteStatus!=true);;
	                }
                    //console.log(JSON.stringify(data))
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
                    this.waitLoader = false;
                }) 
    }
   getsubCategory(){
   	this.waitLoader = true;
   	this.sectionService.onGetSubCategory(this.addContentRequest.sectionId,this.addContentRequest.categoryId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.subCategoryData=data.response.filter(arg=>arg.deleteStatus!=true);
                     if (this.addContentRequest.language) {
	                     this.subCategory=data.response.filter(arg=>arg.language==this.addContentRequest.language && arg.deleteStatus!=true);;
	                }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
                    this.waitLoader = false;
                }) 
   }

   onselectLang(lang){
   	// let selectedLang
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
    //     control.makeTransliteratable(['headline','tagline','tags']);
    this.appProvider.current.currentLanguage=lang;
   	if (this.sectionsData && this.sectionsData.length>0) {
         //this.subCategory=this.subCategoryData.filter(arg=>arg.language==this.addContentRequest.language);;
          this.sections=this.sectionsData.filter(arg=>arg.language==lang);
    }
     if (this.categoriesData && this.categoriesData.length>0) {
         this.categories=this.categoriesData.filter(arg=>arg.language==lang);;
    }
    if (this.subCategoryData && this.subCategoryData.length>0) {
         this.subCategory=this.subCategoryData.filter(arg=>arg.language==lang);;
    }
    if (this.localAdminList && this.localAdminList.length>0 && this.addContentRequest.typeOfUser!='platformUser') {
                            for (let i=0;i<this.localAdminList.length;i++) {
                                let obj=this.localAdminList[i]
                                if (lang=='English') {
                                    console.log('langif',lang)
                                    console.log('langif',this.localAdminListData[i].firstName)
                                   obj.firstName=this.localAdminListData[i].firstName
                                   obj.lastName=this.localAdminListData[i].lastName
                                }else{
                                  console.log('langelseif',lang)
                                  if (obj.langDetails ) {
                                        let resionalLanguageList=obj.langDetails.filter(arg=>arg.language==lang)
                                        if (resionalLanguageList.length>0) {
                                          obj.firstName=resionalLanguageList[0].firstName
                                          obj.lastName=resionalLanguageList[0].lastName
                                        }
                                 }
                                }
                                
                            }
        }
   }
     getUserList(role:any){
     	 this.waitLoader = true;
         this.adminService.onGetUserOnBasisOfROle(role)
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.adminList=data.response.slice(0)
                        this.localAdminList=data.response.slice(0);
                        this.localAdminListData=data.response.slice(0);
                        if (this.appProvider.current.actionFlag=="editContent") {
                           for (let i=0;i<this.localAdminList.length;i++) {
                           	     if (this.appProvider.current.currentContentData.userList.map(function (img) { return img._id; }).indexOf(this.localAdminList[i]._id)!=-1) {
                           	        	this.localAdminList[i].check="active"
                           	        }   
                                                                          
                               	}
                        }
                        if (this.addContentRequest.language && role!='platformUser') {
                            for (let i=0;i<this.localAdminList.length;i++) {
                                let obj=this.localAdminList[i]
                                if (obj.langDetails ) {
                                        let resionalLanguageList=obj.langDetails.filter(arg=>arg.language==this.addContentRequest.language)
                                        if (resionalLanguageList.length>0) {
                                          obj.firstName=resionalLanguageList[0].firstName
                                          obj.lastName=resionalLanguageList[0].lastName
                                        }
                                }
                            }
                        }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
                }) 
   }
  
  onsearchuser(searchUser){
      // alert(searchUser)
      let searchData=searchUser.trim()
      let searchArray=searchData.split(' ')
      console.log(searchArray)
      if (searchArray.legth==1) {
         if (searchData == '') {
              this.localAdminList = this.adminList;
              return;
         }
         let ev= searchData
         if (ev && ev.trim() != '') {
          this.localAdminList = this.adminList.filter((value) => {
              return (value.firstName.toUpperCase().indexOf(ev.toUpperCase()) > -1 || value.lastName.toUpperCase().indexOf(ev.toUpperCase()) > -1);
            
         })
        }
      }else{
           if (searchData == '') {
              this.localAdminList = this.adminList;
              return;
         }
         let ev  = searchArray[0]
         let ev2 = searchArray[1]
         if (ev && ev.trim() != '' || ev2 && ev2.trim() != '') {
          this.localAdminList = this.adminList.filter((value) => {
              return (value.firstName.toUpperCase().indexOf(ev.toUpperCase()) > -1 || value.lastName.toUpperCase().indexOf(ev2.toUpperCase()) > -1);
            
         })
        }
      }
     
     

  }
  toggleHighlight(j){
  	for (let  i = 0; i<this.localAdminList.length; i++) {
  		this.localAdminList[i].check='inactive'
  	}
  	this.localAdminList[j].check='active'
  }
  openDialog(flag): void {
        let dialogRef = this.dialog.open(DragDropComponent, {
            width: '400px',
            data:{flag:flag}
        });
        dialogRef.afterClosed().subscribe(result => {
        	alert(JSON.stringify(result))
        	if (result) {
	        	 if (result.flag=='Publishlater') {
	        		this.publishLater(result)
	        	}
        	}
      
        });
    }

    openDialog2(): void {
        let dialogRef = this.dialog.open(SuggestArticleDialogComponent, {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
        	if (result) {
        		// code...
        	  this.suggestedArticleList=result
        	}
        	
      
        });
    }
    
   contentView(): void {
   	       this.forContent=this.addContentRequest
            if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.forContent.callToActionButton=this.callToActionButton;
           this.forContent.userEngagementButton=this.userEngaButton;
           this.forContent.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=this.addContentRequest.dateOfCreation;
           if (this.googleFromatata.tag=="form") {
             this.forContent.googleForm=true;
             this.forContent.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.forContent.googleForm=false;
           }
        let dialogRef = this.dialog.open(ContentViewComponent, {
            width: '400px',
            data:{forContent:this.forContent}

        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }
    listView(): void {
        let ListViewFormat:any;
    	  this.forContent=this.addContentRequest
           if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
            if (localcategory[0].listViewFormat) {
                 ListViewFormat=localcategory[0].listViewFormat;
            }else{
                 ListViewFormat='Not Applicable';
            }
         }else{
                ListViewFormat='Not Applicable';
         }
       }else{
             ListViewFormat='Not Applicable';
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }    
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=this.addContentRequest.dateOfCreation;
            this.forContent=this.addContentRequest
           this.forContent.callToActionButton=this.callToActionButton;
           this.forContent.userEngagementButton=this.userEngaButton;
           this.forContent.suggestedArticleList=this.suggestedArticleList
           if (this.googleFromatata.tag=="form") {
             this.forContent.googleForm=true;
             this.forContent.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.forContent.googleForm=false;
           }
        let dialogRef = this.dialog.open(ListingViewComponent, {
            width: '400px',
             data:{forContent:this.forContent,layout:ListViewFormat}
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }

    saveAsDraft(){
    	this.waitLoader = true;
        if (this.appProvider.current.actionFlag=="editContent") {
             if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
		   	 let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
		        this.addContentRequest.sectionName=localsection[0].sectionName;
          }
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
		        this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
		     
		  } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=true;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
            this.contentService.onEditContent(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;

                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	this.addServiceStatus=true
                               this.contentId=this.addContentRequest._id
                               this.onupload()
                                 //this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })     
		}else{
		   if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		 if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=true;
           this.addContentRequest.startDateForDraft=null;
           this.addContentRequest.endDateForDraft=null;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.startDateOfPublish=null;
           this.addContentRequest.endDateOfpublish=null;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.startDateForPublishLater=null;
           this.addContentRequest.endDateForPublish=null;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.likeCount=0;
           this.addContentRequest.shareCount=0;
           this.addContentRequest.commentCount=0;
           this.addContentRequest.saveCount=0;
           this.addContentRequest.downloadCount=0;
           this.addContentRequest.applyCount=0;
           this.addContentRequest.callCount=0;
           this.addContentRequest.callMeBackCount=0;
           this.addContentRequest.pageView=0;
           this.addContentRequest.imIntrestedCount=0;
           this.addContentRequest.deleteStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=null;
		  this.addContentRequest.rejectDate=null;
		  this.addContentRequest.submitforrevisionDate=null;
		  this.addContentRequest.submitforreviewDate=null;
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
            this.contentService.onAddSection(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                                  this.contentId=data.response._id
                                  this.addServiceStatus=true
                                  this.onupload()
                                // this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	this.waitLoader = false;
                    alert(error)
           })
        }
    }
    publish(){
    	this.waitLoader = true;
    	if (this.appProvider.current.actionFlag=="editContent") {
              if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=true;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=this.todaydate.split('T')[0];
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onEditContent(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	this.addServiceStatus=true
                                this.contentId=this.addContentRequest._id
                                this.onupload()
                                // this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	  this.waitLoader = false;
                    alert(error)
           })
		}else{
    	if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.startDateForDraft=null;
           this.addContentRequest.endDateForDraft=null;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=true;
           this.addContentRequest.startDateOfPublish=null;
           this.addContentRequest.endDateOfpublish=null;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.startDateForPublishLater=null;
           this.addContentRequest.endDateForPublish=null;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.likeCount=0;
           this.addContentRequest.shareCount=0;
           this.addContentRequest.commentCount=0;
           this.addContentRequest.saveCount=0;
           this.addContentRequest.downloadCount=0;
           this.addContentRequest.applyCount=0;
           this.addContentRequest.callCount=0;
           this.addContentRequest.callMeBackCount=0;
           this.addContentRequest.pageView=0;
           this.addContentRequest.imIntrestedCount=0;
           this.addContentRequest.deleteStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=this.todaydate.split('T')[0];
		  this.addContentRequest.rejectDate=null;
		  this.addContentRequest.submitforrevisionDate=null;
		  this.addContentRequest.submitforreviewDate=null;
		  this.addContentRequest.saveAsDraftDate=null;
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onAddSection(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	 this.addServiceStatus=true
                                 this.contentId=data.response._id
                                 this.onupload()
                                 //this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })
         }
    }
    publishLater(result){
    	this.waitLoader = true;
    	if (this.appProvider.current.actionFlag=="editContent") {
              if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.publishLaterStatus=true;
           this.addContentRequest.startDateForPublishLater=result.startDate;
           this.addContentRequest.endDateForPublishLater=result.endDate;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onEditContent(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	  this.addServiceStatus=true
                                  this.contentId=this.addContentRequest._id
                                  this.onupload()
                                // this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })
		}else{
    	if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.startDateForDraft=null;
           this.addContentRequest.endDateForDraft=null;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.startDateOfPublish=null;
           this.addContentRequest.endDateOfpublish=null;
           this.addContentRequest.publishLaterStatus=true;
           this.addContentRequest.startDateForPublishLater=result.startDate;
           this.addContentRequest.endDateForPublish=result.endDate;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.likeCount=0;
           this.addContentRequest.shareCount=0;
           this.addContentRequest.commentCount=0;
           this.addContentRequest.saveCount=0;
           this.addContentRequest.downloadCount=0;
           this.addContentRequest.applyCount=0;
           this.addContentRequest.callCount=0;
           this.addContentRequest.callMeBackCount=0;
           this.addContentRequest.pageView=0;
           this.addContentRequest.imIntrestedCount=0;
           this.addContentRequest.deleteStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
            this.addContentRequest.publishDate=null;
		  this.addContentRequest.rejectDate=null;
		  this.addContentRequest.submitforrevisionDate=null;
		  this.addContentRequest.submitforreviewDate=null;
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onAddSection(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	   this.addServiceStatus=true
                                   this.contentId=data.response._id
                                   this.onupload()
                                 //this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })
        }

    }
    submitForReview(){
    	this.waitLoader = true;
    	if (this.appProvider.current.actionFlag=="editContent") {
             if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.submitForreview=true;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
		   this.addContentRequest.submitforreviewDate=this.todaydate.split('T')[0];
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onEditContent(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	  this.addServiceStatus=true
                                  this.contentId=this.addContentRequest._id
                                  this.onupload()
                                 //this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })
		}else{
    	if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;

		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.startDateForDraft=null;
           this.addContentRequest.endDateForDraft=null;
           this.addContentRequest.submitForreview=true;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.startDateOfPublish=null;
           this.addContentRequest.endDateOfpublish=null;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.startDateForPublishLater=null;
           this.addContentRequest.endDateForPublish=null;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.likeCount=0;
           this.addContentRequest.shareCount=0;
           this.addContentRequest.commentCount=0;
           this.addContentRequest.saveCount=0;
           this.addContentRequest.downloadCount=0;
           this.addContentRequest.applyCount=0;
           this.addContentRequest.callCount=0;
           this.addContentRequest.callMeBackCount=0;
           this.addContentRequest.pageView=0;
           this.addContentRequest.imIntrestedCount=0;
           this.addContentRequest.deleteStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=null;
		   this.addContentRequest.rejectDate=null;
		   this.addContentRequest.submitforrevisionDate=null;
		   this.addContentRequest.submitforreviewDate=this.todaydate.split('T')[0];
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onAddSection(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	   this.addServiceStatus=true
                                   this.contentId=data.response._id
                                   this.onupload()
                                 //this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })
        }

    }
	submitForRevision(){
		this.waitLoader = true;
		if (this.appProvider.current.actionFlag=="editContent") {
             if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.sendForRevisionStatus=true;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
		   this.addContentRequest.submitforrevisionDate=this.todaydate.split('T')[0];
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onEditContent(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	  this.addServiceStatus=true
                                  this.contentId=this.addContentRequest._id
                                  this.onupload()
                                 ///this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })
		}else{
		    if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.startDateForDraft=null;
           this.addContentRequest.endDateForDraft=null;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.startDateOfPublish=null;
           this.addContentRequest.endDateOfpublish=null;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.startDateForPublishLater=null;
           this.addContentRequest.endDateForPublish=null;
           this.addContentRequest.sendForRevisionStatus=true;
           this.addContentRequest.rejectStatus=false;
           this.addContentRequest.likeCount=0;
           this.addContentRequest.shareCount=0;
           this.addContentRequest.commentCount=0;
           this.addContentRequest.saveCount=0;
           this.addContentRequest.downloadCount=0;
           this.addContentRequest.applyCount=0;
           this.addContentRequest.callCount=0;
           this.addContentRequest.callMeBackCount=0;
           this.addContentRequest.pageView=0;
           this.addContentRequest.imIntrestedCount=0;
           this.addContentRequest.deleteStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=null;
		   this.addContentRequest.rejectDate=null;
		   this.addContentRequest.submitforrevisionDate=this.todaydate.split('T')[0];
		   this.addContentRequest.submitforreviewDate=null;
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onAddSection(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	   this.addServiceStatus=true
                                   this.contentId=data.response._id
                                   this.onupload()
                                 //this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })	
		}
		

	}
	reject(){
		this.waitLoader = true;
		if (this.appProvider.current.actionFlag=="editContent") {
           if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=true;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
		   this.addContentRequest.rejectDate=this.todaydate.split('T')[0];
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onEditContent(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Edit Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                            	   this.addServiceStatus=true
                                   this.contentId=this.addContentRequest._id
                                   this.onupload()
                                 //this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })
		}else{
		 if (this.listOne.length>0) {
		   	 for (let i=0;i<this.listOne.length;i++) {
		   	 	  this.listOne[i].orderNo=i;
		   	 	  this.listOne[i].index=i;
		      //console.log(JSON.stringify(this.listOne))
		   	 }
		   }
		   if (this.sections.length>0) {
          let localsection=this.sections.filter(arg=>arg._id==this.addContentRequest.sectionId)
          if (localsection.length>0) {
            this.addContentRequest.sectionName=localsection[0].sectionName;
          }
       }
       if (this.categories.length>0) {
         let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
         if (localcategory.length>0) {
           // code...
            this.addContentRequest.categoryName=localcategory[0].categoryName;
         }
       }
      if (this.subCategory.length>0) {
         let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
         if (localsubcategory.length>0) {
           // code...
            this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
         }
         
      } 
		   this.addContentRequest.contentBody=this.listOne;
		   if (this.localAdminList) {
		   	// code...
		   	this.addContentRequest.userList=this.localAdminList.filter(arg=>arg.check=='active')
		   }else{
		   	this.addContentRequest.userList=[];
		   }
           this.addContentRequest.callToActionButton=this.callToActionButton;
           this.addContentRequest.userEngagementButton=this.userEngaButton;
           this.addContentRequest.suggestedArticleList=this.suggestedArticleList
           this.addContentRequest.saveAsDraftStatus=false;
           this.addContentRequest.startDateForDraft=null;
           this.addContentRequest.endDateForDraft=null;
           this.addContentRequest.submitForreview=false;
           this.addContentRequest.publishStatus=false;
           this.addContentRequest.startDateOfPublish=null;
           this.addContentRequest.endDateOfpublish=null;
           this.addContentRequest.publishLaterStatus=false;
           this.addContentRequest.startDateForPublishLater=null;
           this.addContentRequest.endDateForPublish=null;
           this.addContentRequest.sendForRevisionStatus=false;
           this.addContentRequest.rejectStatus=true;
           this.addContentRequest.likeCount=0;
           this.addContentRequest.shareCount=0;
           this.addContentRequest.commentCount=0;
           this.addContentRequest.saveCount=0;
           this.addContentRequest.downloadCount=0;
           this.addContentRequest.applyCount=0;
           this.addContentRequest.callCount=0;
           this.addContentRequest.callMeBackCount=0;
           this.addContentRequest.pageView=0;
           this.addContentRequest.imIntrestedCount=0;
           this.addContentRequest.deleteStatus=false;
           this.addContentRequest.thumbnailPicture=this.currentImageThumbnail;
           this.addContentRequest.horizontalPicture=this.currentImageHorigontal;
           this.addContentRequest.publishDate=null;
		   this.addContentRequest.rejectDate=this.todaydate.split('T')[0];
		   this.addContentRequest.submitforrevisionDate=null;
		   this.addContentRequest.submitforreviewDate=null;
           if (this.googleFromatata.tag=="form") {
             this.addContentRequest.googleForm=true;
             this.addContentRequest.googleFormUrl=this.googleFromatata.url;
           }else{
           	this.addContentRequest.googleForm=false;
           }
           this.contentService.onAddSection(this.addContentRequest)
            .subscribe(data =>{
                        this.waitLoader = false;
                        if (data.success == false) {

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                               this.addServiceStatus=true
                               this.contentId=data.response._id
                               this.onupload()
                                // this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                	 this.waitLoader = false;
                    alert(error)
           })	
		}

		

	}
	deletesuggestedArticle(i){
		this.suggestedArticleList.splice(i,1)
	}
	keyupHandlerFunction(e,i){
	   console.log('hy+'+e+i)
	   this.showTinymcIndex=i;
	   if (e=="onBlur") {
	    this.showTinymcFlag=false
	    this.showTinymcIndex=-1;
	   }else{
       this.showTinymcIndex=i;
	   this.listOne[i].text=e;
	   }
	}
	tinymcIndex(i){
		this.showTinymcIndex=i;
	}
	onBlur(){
	console.log('blur')	
	}
	add(event: MatChipInputEvent){
		console.log(event)
	    let input = event.input;
	    let value = event.value;
        let lang
	    if (this.appProvider.current.currentLanguage=="Hindi") {
           lang='hindi'
        }else if (this.appProvider.current.currentLanguage=="Bengali") {
           lang='bengali'
        }else if (this.appProvider.current.currentLanguage=="Gujarati") {
            lang='gujarati'
        }else if (this.appProvider.current.currentLanguage=="Kannada") {
            lang='kannada'
        }else if (this.appProvider.current.currentLanguage=="Marathi") {
            lang='marathi'
        }else if (this.appProvider.current.currentLanguage=="Malayalam") {
            lang='malayalam'
        }else if (this.appProvider.current.currentLanguage=="Telugu") {
            lang='telugu'
        }else if (this.appProvider.current.currentLanguage=="Tamil") {
            lang='tamil'
        }else if (this.appProvider.current.currentLanguage=="Punjabi") {
            lang='punjabi'
        }else {
            lang='marathi'
        }
	    let a=[]
        a[0]=value
        let b={
            data:a
        }
	    if ((value || '').trim()) {
	    let api =  "https://api-gw.revup.reverieinc.com/apiman-gateway/PROMATICS/transliteration/1.0?source_lang=english&target_lang="+lang+"&content_lang=&abbreviate=&noOfsuggestions=10&domain=1";
         let params: URLSearchParams = new URLSearchParams();
         params.set('source_lang','english'); 
         params.set('target_lang','hindi'); 
         params.set('domain','3'); 
         params.set('mt_context','generic_english_proper'); 
         let options = new RequestOptions({
                    headers: new Headers({
                       "rev-api-key": "5c3a548b01cce02490127a5f50c3fb47",
                       "rev-app-id": "NETPAR_APP",
                       "content-type": "application/json"
                    }),
                  //  search:params
         });
        return this.http.post(api,JSON.stringify(b),options).subscribe(response => {
            console.log("customer Info datais " + response);
            let responsee=response.json();
            this.addContentRequest.tags.push({ name: responsee.responseList[0].outString[0] });
			if (input) {
			input.value = '';
			}
            // this.ngControl.valueAccessor.writeValue(responsee.responseList[0].outString);
            // this.ngControl.viewToModelUpdate(responsee.responseList[0].outString);

        },error => {
            let errorr=error;
       });
	    // this.addContentRequest.tags.push({ name: value.trim() });
	    }

	    // Reset the input value
	    if (input) {
	      input.value = '';
	    }
	  }

	  remove(fruit: any): void {
	    let index =this.addContentRequest.tags.indexOf(fruit);

	    if (index >= 0) {
	     this.addContentRequest.tags.splice(index, 1);
	    }
	  }

	  getClass(title){

	      if (title=='Apply') {
	      	 return 'icon-check';
	      }

	      if (title=='Call') {
	      	 return 'icon-call';
	      }

	      if (title=='Call me back') {
	      	 return 'icon-callme';
	      }
	      if (title=='Im Interested') {
	      	 return 'icon-click';
	      }
	      if (title=='Kadak') {
	      	 return 'icon-okay';
	      }
	      if (title=='Share') {
	      	 return 'fa fa-share-alt';
	      }
	      if (title=='Comment') {
	      	 return 'icon-msg';
	      }
	      if (title=='Save') {
	      	 return 'icon-badge';
	      }
	      if (title=='Download') {
	      	 return 'icon-donload';
	      }	
	  }

	  onText(i,item){
         this.currentIndex=i;
         this.rightPan=item
         let dialogRef = this.dialog.open(EditorComponent, {
            width: '400px',
            data:{text:item.text,lang:this.addContentRequest.language,editedStatus:item.editedStatus}
        });
        dialogRef.afterClosed().subscribe(result => {
        	//alert(JSON.stringify(result))
        	if (result) {
        		 this.listOne[i].text=result.text;
             this.listOne[i].editedStatus=true
        	}
      
        });
	  }

    format(rightPan,text,flag,index){
      if (index) {
        this.currentIndex=index
      }
      let dialogRef = this.dialog.open(EditorComponent, {
            width: '400px',
            data:{text:text,lang:this.addContentRequest.language,editedStatus:rightPan.editedStatus}
        });
        dialogRef.afterClosed().subscribe(result => {
          //alert(JSON.stringify(result))
          if (result) {
               if (flag=='right') {
                if (this.listOne[this.currentIndex].text=='Dummy Text') {
                this.listOne[this.currentIndex].text=result.text;
                this.listOne[this.currentIndex].editedStatus=true
                this.ckeditorContent=null
                }else{
                this.listOne[this.currentIndex].text=result.text
                this.listOne[this.currentIndex].editedStatus=true
                this.ckeditorContent=null
                }
               }else if (flag=='center') {
                this.listOne[this.currentIndex].text=result.text;
               }
               
             // this.listOne[this.currentIndex].text=result.text;
             // this.listOne[this.currentIndex].editedStatus=true
          }
      
        });
    }
    onTextEdit(rightPan,text,flag,index){
      if (index) {
        this.currentIndex=index
      }
      this.rightPan=rightPan
      this.ckeditorContent=text.replace(/<{1}[^<>]{1,}>{1}/g," ")
    }
    saveText(rightPan,text){
      if (this.listOne[this.currentIndex].text=='Dummy Text') {
          this.listOne[this.currentIndex].text=text
          this.listOne[this.currentIndex].editedStatus=true
          this.ckeditorContent=null
      }else{
        this.listOne[this.currentIndex].text=text
        this.listOne[this.currentIndex].editedStatus=true
        this.ckeditorContent=null
      }
    }
    onImage(i,item){
         this.currentIndex=i;
         this.rightPan=item
        let dialogRef = this.dialog.open(ImageResizerComponent, {
            width: '400px',
            data:{item:item,lang:this.addContentRequest.language}
        });
        dialogRef.afterClosed().subscribe(result => {
         // alert(JSON.stringify(result))
          if (result) {
          this.listOne[i].x = result.x
          this.listOne[i].y = result.y
          this.listOne[i].px = result.px
          this.listOne[i].py = result.py
          this.listOne[i].widthImg = result.width
          this.listOne[i].heightImg = result.height 
          this.listOne[i].draggingCorner = result.draggingCorner
          this.listOne[i].draggingWindow = result.draggingWindow
          this.listOne[i].minArea=result.minArea
            // this.listOne[i].text=result.text;
          }
      
        });
    }
	  getHtml(value){
        return this.sanitizer.bypassSecurityTrustHtml(value);
	  }
  onAudioChange(event: any, right: any) {
        let files = [].slice.call(event.target.files);
        let tmppath = URL.createObjectURL(event.target.files[0]);
       // alert(tmppath)
        this.listOne[this.currentIndex].url=tmppath
       // this.rightPan.url=tmppath
        this.ref.load();
       // this.ref.play();
        this.newUploadFiles=files;
        console.log(this.newUploadFiles[0])
        this.length = this.newUploadFiles.length;

        this.makeAudioFile(right);
    }


    makeAudioFile(right:any) {
        let b=[]
        this.tempCustomerBase64 = [];
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            //formData.append('count', right.count);
            if (this.audioFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.audioFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.audioFileData[index].file=formData
            }else{
              this.audioFileData.push({tag:right.tag,count:right.count,file:formData,for:'url'})
            }
           
            // let headers = new Headers();

            // let options = new RequestOptions({
            //     headers: headers
            // });
            // this.http.post('http://52.15.178.19:3001/api/updateContentBody',this.audioFileData[0].file, options)
            //     .subscribe(
            //         data => {


            //             data = data.json().base64String;
            //             this.tempCustomerBase64.push(data);
            //             setTimeout(() => {

            //                 //this.patch_information = "Saved"

            //             }, 10000);
            //         },
            //         error => console.log(error))


        }
    }

    onVideoChange(event: any,right: any) {
    	if (!event.target) {
            return;
        }
        if (!event.target.files) {
            return;
        }
        if (event.target.files.length !== 1) {
            return;
        }
        const file = event.target.files[0];
        console.log(file)
        // if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
        //     return;
        // }
        let tmppath = URL.createObjectURL(event.target.files[0]);
        this.listOne[this.currentIndex].url=tmppath
       // const fr = new FileReader();
        // fr.onloadend = (loadEvent) => {
        //     this.rightPan.url = fr.result;
        //     this.rightPan.placeHolder=fr.result;
        //     this.listOne[this.currentIndex].url=fr.result
        // };
        // fr.readAsDataURL(file);
        this.ref.load();
    	//this.ref.play();
        let files = [].slice.call(event.target.files);
        this.newUploadFiles=files;
       // console.log(this.newUploadFiles[0])
        this.length = this.newUploadFiles.length;

        this.makeVideoFile(right);
    }


    makeVideoFile(right:any) {
        let b=[]
        this.tempCustomerBase64 = [];
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            let time=new Date()

           // console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            this.uploadFile.newname=time.getTime()
            //this.uploadFile.newName=
            console.log(this.uploadFile)
            formData.append('file', this.uploadFile);
            //formData.append('tag', right.tag);
           // formData.append('count', right.count);
            if (this.videoFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.videoFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.videoFileData[index].file=formData
            }else{
              this.videoFileData.push({tag:right.tag,count:right.count,file:formData,for:'url'})
            }
            
           
            // let headers = new Headers();

            // let options = new RequestOptions({
            //     headers: headers
            // });
            // this.http.post('http://52.15.178.19:3001/api/updateContentBody',this.audioFileData[0].file, options)
            //     .subscribe(
            //         data => {


            //             data = data.json().base64String;
            //             this.tempCustomerBase64.push(data);
            //             setTimeout(() => {

            //                 //this.patch_information = "Saved"

            //             }, 10000);
            //         },
            //         error => console.log(error))


        }
    }

    onDocumentChange(event: any, right: any) {
        let files = [].slice.call(event.target.files);
        this.newUploadFiles=files;
        console.log(this.newUploadFiles[0])
         let tmppath = URL.createObjectURL(event.target.files[0]);
        this.listOne[this.currentIndex].url=tmppath
        this.length = this.newUploadFiles.length;

        this.makeDocumentFile(right);
    }


    makeDocumentFile(right:any) {
      console.log(right)
        let b=[]
        this.tempCustomerBase64 = [];
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            //formData.append('tag', right.tag);
            //formData.append('count', right.count);
            if (this.documentFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.documentFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.documentFileData[index].file=formData
            }else{
              this.documentFileData.push({tag:right.tag,count:right.count,file:formData,for:'url'})
            }
           
        }
    }
    onGridVideoData1Change(event: any, right: any){

       this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
			let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].videourl1=tmppath;
			this.listOne[this.currentIndex].documenturl1=null;
			let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeVideoForGrid1File(right);
	}

    makeVideoForGrid1File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'videourl1');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file1=formData
                this.gridFileData[index].for1="videourl1"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for1:"videourl1",file1:formData,file2:null,file3:null})
            }
            


        }
       }
	onGridAudioData1Change(event: any, right: any){
		    this.listOne[this.currentIndex].imgurl1=null;
		    let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].audiourl1=tmppath;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=null;
	        let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeAudioForGrid1File(right);
	}

    makeAudioForGrid1File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'audiourl1');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file1=formData
                this.gridFileData[index].for1="audiourl1"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for1:"audiourl1",file1:formData,file2:null,file3:null})
            }
            

        }
       }
	onGridDocumentData1Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=null;
			let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].documenturl1=tmppath;
			let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeDocumentForGrid1File(right);
	}

    makeDocumentForGrid1File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            //formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'documenturl1');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file1=formData
                this.gridFileData[index].for1="documenturl1"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for1:"documenturl1",file1:formData,file2:null,file3:null})
            }
            

        }
       }
	
	onGridVideoData2Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].videourl2=tmppath;
			this.listOne[this.currentIndex].documenturl2=null;
	        let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeVideoForGrid2File(right);
	}

    makeVideoForGrid2File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'videourl2');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file2=formData
                this.gridFileData[index].for2="videourl2"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for2:"videourl2",file1:null,file2:formData,file3:null})
            }

            
        }
       }
	onGridAudioData2Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl2=null;
            let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].audiourl2=tmppath;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
            let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeAudioForGrid2File(right);
	}

    makeAudioForGrid2File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'audiourl2');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file2=formData
                this.gridFileData[index].for2="audiourl2"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for2:"audiourl2",file1:null,file2:formData,file3:null})
            }
             

        }
       }
	onGridDocumentData2Change(event: any, right: any){
             this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].documenturl2=tmppath;
			let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeDocumentForGrid2File(right);
	}

    makeDocumentForGrid2File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'documenturl2');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file2=formData
                this.gridFileData[index].for2="documenturl2"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for2:"documenturl2",file1:null,file2:formData,file3:null})
            }
             

        }
       }
   	onGridVideoData3Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl3=null;
			let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].videourl3=tmppath;
			this.listOne[this.currentIndex].documenturl3=null;
	        let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeVideoForGrid3File(right);
	}

    makeVideoForGrid3File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'videourl3');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file3=formData
                this.gridFileData[index].for3="videourl3"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for3:"videourl3",file1:null,file2:null,file3:formData})
            }
             

        }
       }
	onGridAudioData3Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl3=null;
            let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].audiourl3=tmppath;
			this.listOne[this.currentIndex].videourl3=null;
			this.listOne[this.currentIndex].documenturl3=null;
            let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeAudioForGrid3File(right);
	}

    makeAudioForGrid3File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'audiourl3');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file3=formData
                this.gridFileData[index].for3="audiourl3"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for3:"audiourl3",file1:null,file2:null,file3:formData})
            }
             

        }
       }
	onGridDocumentData3Change(event: any, right: any){
             this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl3=null;
			this.listOne[this.currentIndex].videourl3=null;
			let tmppath = URL.createObjectURL(event.target.files[0]);
			this.listOne[this.currentIndex].documenturl3=tmppath;
			let files = [].slice.call(event.target.files);
	        this.newUploadFiles=files;
	        console.log(this.newUploadFiles[0])
	        this.length = this.newUploadFiles.length;
	        this.makeDocumentForGrid3File(right);
	}

    makeDocumentForGrid3File(right:any) {
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            // formData.append('tag', right.tag);
            // formData.append('count', right.count);
            // formData.append('for', 'documenturl3');
            if (this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)!=-1) {
            	let index=this.gridFileData.map(function (arg) { return arg.count; }).indexOf(right.count)
                this.gridFileData[index].file3=formData
                this.gridFileData[index].for3="documenturl3"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for3:"documenturl3",file1:null,file2:null,file3:formData})
            }
             

        }
       }
    onupload(){

    	if (this.audioFileData.length==0 && this.videoFileData.length==0 && this.documentFileData.length==0 && this.gridFileData.length==0) {
    		this.router.navigate(['/view-content'],{ skipLocationChange: true });
    	}else{
    		for (var i = 0; i < this.audioFileData.length; i++) {
              this.audioFileDataLength=i+1
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.audioFileData[i].file!=null) {
              this.waitLoader = true;
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.audioFileData[i].tag+'/'+this.audioFileData[i].count+'/'+this.audioFileData[i].for,this.audioFileData[i].file, options)
                .subscribe(
                    data => {
                    	 this.waitLoader = false;
                    	let demo=data.json()
                        if (demo.success==true) {
                        	if (this.audioFileData.length==this.audioFileDataLength && this.videoFileData.length==this.videoFileDataLength && this.documentFileData.length==this.documentFileDataLength && this.gridFileData.length==this.gridFileDataLength) {
                        		this.router.navigate(['/view-content'],{ skipLocationChange: true });
                        	}
                        }
                    },
                    error => {
                    	 this.waitLoader = false;
                    	console.log(error)

                    })
            }
            
        }
    
    for (var i = 0; i < this.videoFileData.length; i++) {
            this.videoFileDataLength=i+1
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.videoFileData[i].file!=null) {
            	 this.waitLoader = true;
            	console.log(JSON.stringify(this.videoFileData[i]))
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.videoFileData[i].tag+'/'+this.videoFileData[i].count+'/'+this.videoFileData[i].for,this.videoFileData[i].file, options)
                .subscribe(
                    data => {
                        let demo=data.json()
                        if (demo.success==true) {
                        	 this.waitLoader = false;
                        	if (this.audioFileData.length==this.audioFileDataLength && this.videoFileData.length==this.videoFileDataLength && this.documentFileData.length==this.documentFileDataLength && this.gridFileData.length==this.gridFileDataLength) {
                        		this.router.navigate(['/view-content'],{ skipLocationChange: true });
                        	}
                        }
                    },
                    error => {
                         this.waitLoader = false;
                    	console.log(error)
                    })
            }
            
        }
    
    for (var i = 0; i < this.documentFileData.length; i++) {
             this.documentFileDataLength=i+1
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.documentFileData[i].file!=null) {
            	 this.waitLoader = true;
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.documentFileData[i].tag+'/'+this.documentFileData[i].count+'/'+this.documentFileData[i].for,this.documentFileData[i].file, options)
                .subscribe(
                    data => {
                        let demo=data.json()
                        if (demo.success==true) {
                        	 this.waitLoader = false;
                        	if (this.audioFileData.length==this.audioFileDataLength && this.videoFileData.length==this.videoFileDataLength && this.documentFileData.length==this.documentFileDataLength && this.gridFileData.length==this.gridFileDataLength) {
                        		this.router.navigate(['/view-content'],{ skipLocationChange: true });
                        	}
                        } 
                    },
                    error => {
                    	 this.waitLoader = false;
                    	console.log(error)})
            }
            
        }
    for (var i = 0; i < this.gridFileData.length; i++) {
            this.gridFileDataLength=i+1
            console.log(JSON.stringify(this.gridFileData))
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.gridFileData[i].file1!=null) {
            	 this.waitLoader = true;
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.gridFileData[i].tag+'/'+this.gridFileData[i].count+'/'+this.gridFileData[i].for1,this.gridFileData[i].file1, options)
                .subscribe(
                    data => {
                         let demo=data.json()
                        if (demo.success==true) {
                        	 this.waitLoader = false;
                        	if (this.audioFileData.length==this.audioFileDataLength && this.videoFileData.length==this.videoFileDataLength && this.documentFileData.length==this.documentFileDataLength && this.gridFileData.length==this.gridFileDataLength) {
                        		this.router.navigate(['/view-content'],{ skipLocationChange: true });
                        	}
                        }
                    },
                    error => { 
                    	 this.waitLoader = false;
                    	console.log(error)
                    })
            }
            if (this.gridFileData[i].file2!=null) {
            	 this.waitLoader = true;
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.gridFileData[i].tag+'/'+this.gridFileData[i].count+'/'+this.gridFileData[i].for2,this.gridFileData[i].file2, options)
                .subscribe(
                    data => {
                         let demo=data.json()
                        if (demo.success==true) {
                        	 this.waitLoader = false;
                        	if (this.audioFileData.length==this.audioFileDataLength && this.videoFileData.length==this.videoFileDataLength && this.documentFileData.length==this.documentFileDataLength && this.gridFileData.length==this.gridFileDataLength) {
                        		// code...
                        	}
                        }
                    },
                    error => {
                    	 this.waitLoader = false;
                    	console.log(error)
                    })
            }
            if (this.gridFileData[i].file3!=null) {
            	 this.waitLoader = true;
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.gridFileData[i].tag+'/'+this.gridFileData[i].count+'/'+this.gridFileData[i].for3,this.gridFileData[i].file3, options)
                .subscribe(
                    data => {
                         let demo=data.json()
                        if (demo.success==true) {
                        	 this.waitLoader = false;
                        	if (this.audioFileData.length==this.audioFileDataLength && this.videoFileData.length==this.videoFileDataLength && this.documentFileData.length==this.documentFileDataLength && this.gridFileData.length==this.gridFileDataLength) {
                        		// code...
                        	}
                        }
                    },
                    error => { 
                    	 this.waitLoader = false;
                    	console.log(error)})
            }
            
        }
    	}
    	
    
  }
 //  onTransliteration(value,tag){
 //     if (value==' ') {
 //       return 
 //     }
 //    this.currentInputTag=tag
 //   this.currentString=value
 //   let localValue=value.split(' ')
 //   let length=localValue.length
 //   let stringForSend=localValue[length-1]
 //   if (stringForSend=='') {
 //       return 
 //     }
 //   this.sendString=stringForSend.toString()

 //        this.translationService.onGetSuggetiion(stringForSend)
 //        .subscribe(data => {     
 //            this.appProvider.current.suggestedString=data                    
 //                },error=>{
                  
 //                })
 // }
 // selectString(state){
 //   this.currentString=this.currentString.toString()
 //   let output=this.currentString.replace(this.sendString ,state)
 //   if ( this.currentInputTag=='headline') {
 //     this.addContentRequest.headline=output+' '
 //   }else if(this.currentInputTag=='tagline'){
 //     this.addContentRequest.tagline=output+' '
 //   }else if (this.currentInputTag=='tag') {
 //     this.addContentRequest.tag=output+' '
 //   }else if (this.currentInputTag=='searchUser') {
 //     this.searchUser=output+' '
 //   }else if (this.currentInputTag=='title') {
 //     this.rightPan.title=output+' '
 //     this.onTitleChange()
 //   }else if (this.currentInputTag=='altTag') {
 //     this.rightPan.altTag=output+' '
 //     this.onaltTagChange()
 //   }else if (this.currentInputTag=='caption') {
 //     this.rightPan.caption=output+' '
 //     this.onCaptionChange()
 //   }

 // //  this.addSubCategoryRequest.subCategoryName=output+' '
 //   this.appProvider.current.suggestedString=[]
 //  console.log(output)
 // }


   onTransliteration(value,event,tag){
   var myEl=event.target
    this.currentInputTag=tag
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
   if ( this.currentInputTag=='headline') {
     this.addContentRequest.headline=output
   }else if(this.currentInputTag=='tagline'){
     this.addContentRequest.tagline=output
   }else if (this.currentInputTag=='tag') {
     this.addContentRequest.tag=output
   }else if (this.currentInputTag=='searchUser') {
     this.searchUser=output
   }else if (this.currentInputTag=='title') {
     this.rightPan.title=output
     this.onTitleChange()
   }else if (this.currentInputTag=='altTag') {
     this.rightPan.altTag=output
     this.onaltTagChange()
   }else if (this.currentInputTag=='caption') {
     this.rightPan.caption=output
     this.onCaptionChange()
   }
    else if (this.currentInputTag=='textInput') {
       this.ckeditorContent=output
       //this.onTextChange()
         }
   //this.addCategoryRequest.categoryName=output
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
             if ( this.currentInputTag=='headline') {
               this.addContentRequest.headline=output
             }else if(this.currentInputTag=='tagline'){
               this.addContentRequest.tagline=output
             }else if (this.currentInputTag=='tag') {
               this.addContentRequest.tag=output
             }else if (this.currentInputTag=='searchUser') {
               this.searchUser=output
             }else if (this.currentInputTag=='title') {
               this.rightPan.title=output
               this.onTitleChange()
             }else if (this.currentInputTag=='altTag') {
               this.rightPan.altTag=output
               this.onaltTagChange()
             }else if (this.currentInputTag=='caption') {
               this.rightPan.caption=output
               this.onCaptionChange()
             }else if (this.currentInputTag=='textInput') {
                   this.ckeditorContent=output
                   //this.onTextChange()
             }
        //this.addCategoryRequest.categoryName=output
        this.appProvider.current.suggestedString=[]
        }else{
         let replaceWith=this.appProvider.current.suggestedString[this.currentActiveIndex]
         let output=this.currentString.replace(this.sendString ,replaceWith)
         if ( this.currentInputTag=='headline') {
           this.addContentRequest.headline=output
         }else if(this.currentInputTag=='tagline'){
           this.addContentRequest.tagline=output
         }else if (this.currentInputTag=='tag') {
           this.addContentRequest.tag=output
         }else if (this.currentInputTag=='searchUser') {
           this.searchUser=output
         }else if (this.currentInputTag=='title') {
           this.rightPan.title=output
           this.onTitleChange()
         }else if (this.currentInputTag=='altTag') {
           this.rightPan.altTag=output
           this.onaltTagChange()
         }else if (this.currentInputTag=='caption') {
           this.rightPan.caption=output
           this.onCaptionChange()
         }
         else if (this.currentInputTag=='textInput') {
           this.ckeditorContent=output
            //this.onTextChange()
         }
        //this.addCategoryRequest.categoryName=output
         this.appProvider.current.suggestedString=[]
        }
    }

  }else if (this.selectedValue && event.keyCode==13) {
   this.currentString=this.currentString.toString()
   if (this.outputStringArrayLength>0) {
        let replaceWith=this.selectedValue+' '
        let output=this.currentString.replace(this.sendString ,replaceWith)
        if ( this.currentInputTag=='headline') {
           this.addContentRequest.headline=output
         }else if(this.currentInputTag=='tagline'){
           this.addContentRequest.tagline=output
         }else if (this.currentInputTag=='tag') {
           this.addContentRequest.tag=output
         }else if (this.currentInputTag=='searchUser') {
           this.searchUser=output
         }else if (this.currentInputTag=='title') {
           this.rightPan.title=output
           this.onTitleChange()
         }else if (this.currentInputTag=='altTag') {
           this.rightPan.altTag=output
           this.onaltTagChange()
         }else if (this.currentInputTag=='caption') {
           this.rightPan.caption=output
           this.onCaptionChange()
         }
          else if (this.currentInputTag=='textInput') {
           this.ckeditorContent=output
            //this.onTextChange()
         }
        //this.addCategoryRequest.categoryName=output
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