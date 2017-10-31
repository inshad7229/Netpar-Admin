import { Component, OnInit,ViewContainerRef,ViewChild, Input, Output, EventEmitter,HostListener,ElementRef } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {DndModule} from 'ng2-dnd';
import {ColorPickerService} from 'angular4-color-picker';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { EditorComponent } from './editor/editor.component';
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
import {ENTER} from '@angular/cdk/keycodes';
import {SPACE} from '@angular/cdk/keycodes';

const COMMA = 188;

declare var jQuery:any;
declare var $ :any;
declare var tinymce: any;
declare var  google:any;


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss'], 
  providers:[FormControlDirective,SectionService,AdminService,ContentService]
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
	addOnBlur: boolean = true;

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
    
    stringResource:StringResource=new  StringResource()
    contentId
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
	constructor(private dialog: MatDialog, private cpService: ColorPickerService,
		        private sanitizer: DomSanitizer,private fb: FormBuilder, private router: Router,
		        vcr: ViewContainerRef,
		        public toastr: ToastsManager,
		        private http: Http,
		        private sectionService:SectionService,
		        private appProvider: AppProvider,
		        private adminService:AdminService,

		        private contentService:ContentService) {
		this.ckeditorContent = `<p>My HTML</p>`;
				this.addContentRequest.tags=[]
				/*tinymce.init({
				  skin_url: 'assets/skins/lightgray'
				  // other settings
				});*/

 
		this.appProvider.current.loginData={
			role:'sectionAdministrator'
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
                 
          }
		
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
		$('.selectize').selectize({
		    plugins: ['remove_button'],
		    persist: false,
		    createOnBlur: true,
		    create: true
		});

		$(document).on('click','.for_edit',function(){
			$(this).closest('.li').find('.to_edit').toggle('100');
		})
		$(document).on('click','.for_delete',function(){
			$(this).closest('.li').remove();
		});
		 $('.file-type').on('change',function(e){
		    // var tmppath = URL.createObjectURL(e.target.files[0]);
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
             this.croppieImageHorigontal=this.appProvider.current.currentContentData.horizontalPicture;
             this.croppieImageThumbnail=this.appProvider.current.currentContentData.thumbnailPicture;
             this.currentImageHorigontal=this.appProvider.current.currentContentData.horizontalPicture;
             this.currentImageThumbnail=this.appProvider.current.currentContentData.thumbnailPicture;
             this.suggestedArticleList=this.appProvider.current.currentContentData.suggestedArticleList
           if (this.appProvider.current.currentContentData.googleForm==true || this.appProvider.current.currentContentData.googleForm=='true') {
           	    this.googleFromatata.tag="form";
           	    this.googleFromatata.url=this.appProvider.current.currentContentData.googleFormUrl;
           	    this.googleFromatata.formURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.appProvider.current.currentContentData.googleFormUrl);
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
	


     onAddTags(event){
        console.log('add'+event)
     }
    addText(){
    	 this.listOne.push({tag:"text",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',url:'./assets/img/cover.jpeg',altTag:'file not found',title:'Title', caption:'Image',aligment:'center', display:'inline-block',text:'Dummy Text'}) 
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
        this.listOne.push({tag:"image",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',tempUrl:'./assets/img/cover.jpeg',url:null,altTag:'file not found',title:'Title', caption:'Image',aligment:'center', display:'inline-block',downloadable:true})
	}
	addAudio(){
		 this.audioCount=this.audioCount+1;
		 console.log(this.audioCount)
        this.listOne.push({tag:"audio",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',tempUrl:'./assets/img/cover.jpeg',url:null,altTag:'file not found',title:'Title', caption:'Audio',aligment:'center', display:'inline-block',count:this.audioCount,downloadable:true})
	}
	addVideo(){
		this.videoCount=this.videoCount+1;
		this.listOne.push({tag:"video",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',tempUrl:'./assets/videos/SampleVideo.mp4',url:null,altTag:'file not found',title:'Title', caption:'Video',aligment:'center', display:'inline-block',count:this.videoCount,downloadable:true})
	}
	addFile(){
		this.documentCount=this.documentCount+1;
		this.listOne.push({tag:"document",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'110px',tempUrl:'./assets/img/JAVA.png',url:null,altTag:'file not found',title:'Title', caption:'File',aligment:'center', display:'inline-block',count:this.documentCount,downloadable:true})
	}
	addGrid(){
		   this.gridCount=this.gridCount+1;
		   this.listOne.push({tag:"grid",tags:'grid, grid',top:null,bottom:null,right:null,left:null,aligment:'center',title:'Title',caption:'File',activeIndex:null,
		    placeholder1:'./assets/img/placeholder5.png' ,audiourl1:null,videourl1:null,imgurl1:'./assets/img/placeholder5.png',documenturl1:null,
			placeholder2:'./assets/img/placeholder5.png' ,audiourl2:null,videourl2:null,imgurl2:'./assets/img/placeholder5.png',documenturl2:null,
			placeholder3:'./assets/img/placeholder5.png' ,audiourl3:null,videourl3:null,imgurl3:'./assets/img/placeholder5.png',documenturl3:null,
			count:this.gridCount,
			data1:"fromUrl",
			data2:"fromUrl",
			data3:"fromUrl",
			downloadable:true

	})
	}
	addForm(){
		this.googleFromatata.tag="form"; 
		// this.googleFromatata.url='null';
	}



	addApply(flag){
	
		
		if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
          this.callToActionButton.push({tag:'button',title:'Apply',status:true})
		}
	}
	addCall(flag){
	   
		if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
           this.callToActionButton.push({tag:'button',title:'Call',status:true})
       }
	}
	addCallMe(flag){
		
		if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
            this.callToActionButton.push({tag:'button',title:'Call me back',status:true})
           }
	}
	addIntrested(flag){
      
		if (this.callToActionButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
        this.callToActionButton.push({tag:'button',title:"Im Interested",status:true})
       }
	}
	addlike(flag){
		
		if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
           this.userEngaButton.push({tag:'button',title:"Kadak",status:true})
       }
	}
	addshare(flag){
		
		if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
          this.userEngaButton.push({tag:'button',title:"Share",status:true})
        }
	}
	addcomment(flag){
		
		if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
           this.userEngaButton.push({tag:'button',title:"Comment",status:true})
       } 
	}
	addsave(flag){
		
		if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
         this.userEngaButton.push({tag:'button',title:"Save",status:true})
       }
	}
	addownload(flag){
		
		if (this.userEngaButton.map(function (img) { return img.title; }).indexOf(flag)==-1) {
         this.userEngaButton.push({tag:'button',title:"Download",status:true})
      }
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
	  this.listOne[this.currentIndex].tempUrl=this.rightPan.url
      this.listOne[this.currentIndex].url=this.rightPan.url
      this.listOne[this.currentIndex].placeHolder=this.rightPan.url
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
    OnFirstGrid(audio,video){
      if ( this.listOne[this.currentIndex]) {
      	 this.listOne[this.currentIndex].activeIndex=1;
      	if (this.listOne[this.currentIndex].imgurl1==null &&  this.listOne[this.currentIndex].audiourl1==null && this.listOne[this.currentIndex].videourl1==null && this.listOne[this.currentIndex].documenturl1==null) {
	      	// code...
	     
	      this.listOne[this.currentIndex].placeholder1='./assets/img/placeholder5.png' ;
	      this.listOne[this.currentIndex].imgurl1='./assets/img/placeholder5.png' ;
	      this.listOne[this.currentIndex].audiourl1=null;
	      this.listOne[this.currentIndex].videourl1=null;
	      this.listOne[this.currentIndex].documenturl1=null;
	      this.rightPan=this.listOne[this.currentIndex];
	  }else{
	  	 this.rightPan=this.listOne[this.currentIndex];
	  }
      }
    }
    OnSecondGrid(audio,video){
     if ( this.listOne[this.currentIndex]) {
	      this.listOne[this.currentIndex].activeIndex=2;
	      if (this.listOne[this.currentIndex].imgurl2==null &&  this.listOne[this.currentIndex].audiourl2==null && this.listOne[this.currentIndex].videourl2==null && this.listOne[this.currentIndex].documenturl2==null) {
	      	// code...
		      this.listOne[this.currentIndex].placeholder2='./assets/img/placeholder5.png' ;
		      this.listOne[this.currentIndex].imgurl2='./assets/img/placeholder5.png' ;
		      this.listOne[this.currentIndex].audiourl2=null;
		      this.listOne[this.currentIndex].videourl2=null;
		      this.listOne[this.currentIndex].documenturl2=null;
		      this.rightPan=this.listOne[this.currentIndex];
	      }else{
	      	 this.rightPan=this.listOne[this.currentIndex];
	      }
      }
    }
    OnThirdGrid(audio,video){
      if (this.listOne[this.currentIndex]) {

	      this.listOne[this.currentIndex].activeIndex=3;
	       if (this.listOne[this.currentIndex].imgurl3==null &&  this.listOne[this.currentIndex].audiourl3==null && this.listOne[this.currentIndex].videourl3==null && this.listOne[this.currentIndex].documenturl3==null) {
	      	// code...
	      this.listOne[this.currentIndex].placeholder3='./assets/img/placeholder5.png' ;
	      this.listOne[this.currentIndex].imgurl3='./assets/img/placeholder5.png' ;
	      this.listOne[this.currentIndex].audiourl3=null;
	      this.listOne[this.currentIndex].videourl3=null;
	      this.listOne[this.currentIndex].documenturl3=null;
	      this.rightPan=this.listOne[this.currentIndex];
	  }else{
	  	this.rightPan=this.listOne[this.currentIndex];
	  }
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
	// itemSwapped(i){
	//  this.afterDragIndex=i;
	//  //console.log('mouseUp',i)
	// }
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
            this.rightPan.placeholder1=fr.result;
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
            this.rightPan.placeholder2=fr.result;
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
            this.rightPan.placeholder3=fr.result;
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
	video(video1){
		//console.log(video1)
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
	    	var tmppath = URL.createObjectURL(e.target.files[0]);
	    	
		    //console.log($(this));
		    $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
	    	$(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});
 	}*/
 	
 	formimage(){
 		$('.file-type').on('change',function(e){
		    var tmppath = URL.createObjectURL(e.target.files[0]);
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
    }

    cancelCroppieEditHorigontal() {
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
    }

    cancelCroppieEditThumbnail() {
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
	                this.sectionsData=data;
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
                    this.categoriesData=data.response;
                     if (this.addContentRequest.language) {
	                     this.categories=data.response.filter(arg=>arg.language==this.addContentRequest.language);;
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
                    this.subCategoryData=data.response;
                     if (this.addContentRequest.language) {
	                     this.subCategory=data.response.filter(arg=>arg.language==this.addContentRequest.language);;
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
   }
     getUserList(role:any){
     	 this.waitLoader = true;
         this.adminService.onGetUserOnBasisOfROle(role)
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.adminList=data.response
                        this.localAdminList=data.response;
                        if (this.appProvider.current.actionFlag=="editContent") {
                           for (let i=0;i<this.localAdminList.length;i++) {
                           	     if (this.appProvider.current.currentContentData.userList.map(function (img) { return img._id; }).indexOf(this.localAdminList[i]._id)!=-1) {
                           	        	this.localAdminList[i].check="active"
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
      if (searchUser == '') {
            this.localAdminList = this.adminList;
            return;
       }
       let ev= searchUser
       if (ev && ev.trim() != '') {
        this.localAdminList = this.adminList.filter((value) => {
            return (value.firstName.toUpperCase().indexOf(ev.toUpperCase()) > -1 || value.lastName.toUpperCase().indexOf(ev.toUpperCase()) > -1);
          
       })
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
        let dialogRef = this.dialog.open(ListingViewComponent, {
            width: '400px',
             data:{forContent:this.forContent}
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
                               this.contentId=data.response._id
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                                this.contentId=data.response._id
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
           this.addContentRequest.endDateForPublish=result.endDate;
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
                                  this.contentId=data.response._id
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                                  this.contentId=data.response._id
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                                  this.contentId=data.response._id
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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

                                this.toastr.error(data.msg, 'Add Content  Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                                   this.contentId=data.response._id
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
		   this.addContentRequest.sectionName=localsection[0].sectionName;
		   }
		   if (this.categories.length>0) {
		   	let localcategory=this.categories.filter(arg=>arg._id==this.addContentRequest.categoryId)
		   this.addContentRequest.categoryName=localcategory[0].categoryName;
		   }
		  if (this.subCategory.length>0) {
		  	 let localsubcategory=this.subCategory.filter(arg=>arg._id==this.addContentRequest.subCategoryId)
		     this.addContentRequest.subCategoryName=localsubcategory[0].subCategoryName;
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
	    let api =  "https://api-gw.revup.reverieinc.com/apiman-gateway/PROMATICS/transliteration/1.0?source_lang=english&target_lang="+lang+"&content_lang=&abbreviate=&noOfsuggestions=1&domain=1";
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

	  onText(i,text){
         let dialogRef = this.dialog.open(EditorComponent, {
            width: '400px',
            data:{text:text,lang:this.addContentRequest.language}
        });
        dialogRef.afterClosed().subscribe(result => {
        	//alert(JSON.stringify(result))
        	if (result) {
        		 this.listOne[i].text=result.text;
        	}
      
        });
	  }

	  getHtml(value){
        return this.sanitizer.bypassSecurityTrustHtml(value);
	  }
  onAudioChange(event: any, right: any) {
        let files = [].slice.call(event.target.files);
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
            this.listOne[this.currentIndex].url=formData.get('file')
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
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            this.rightPan.url = fr.result;
            this.rightPan.placeHolder=fr.result;
            this.listOne[this.currentIndex].url=fr.result
        };
        fr.readAsDataURL(file);
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
            formData.append('tag', right.tag);
            formData.append('count', right.count);
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
        this.length = this.newUploadFiles.length;

        this.makeVideoFile(right);
    }


    makeDocumentFile(right:any) {
        let b=[]
        this.tempCustomerBase64 = [];
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            console.log(this.newUploadFiles[i])
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            formData.append('tag', right.tag);
            formData.append('count', right.count);
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
			this.listOne[this.currentIndex].videourl1=null;
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
                this.gridFileData[index].for="videourl1"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"videourl1",file1:formData,file2:null,file3:null})
            }


        }
       }
	onGridAudioData1Change(event: any, right: any){
		    this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
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
                this.gridFileData[index].for="audiourl1"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"audiourl1",file1:formData,file2:null,file3:null})
            }


        }
       }
	onGridDocumentData1Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=null;
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
                this.gridFileData[index].for="documenturl1"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"documenturl1",file1:formData,file2:null,file3:null})
            }


        }
       }
	
	onGridVideoData2Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
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
                this.gridFileData[index].for="videourl2"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"videourl2",file1:null,file2:formData,file3:null})
            }


        }
       }
	onGridAudioData2Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
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
                this.gridFileData[index].for="audiourl2"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"audiourl2",file1:null,file2:formData,file3:null})
            }


        }
       }
	onGridDocumentData2Change(event: any, right: any){
             this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
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
                this.gridFileData[index].for="documenturl2"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"documenturl2",file1:null,file2:formData,file3:null})
            }


        }
       }
   	onGridVideoData3Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
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
                this.gridFileData[index].for="videourl3"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"videourl3",file1:null,file2:null,file3:formData})
            }


        }
       }
	onGridAudioData3Change(event: any, right: any){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
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
                this.gridFileData[index].for="audiourl3"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"audiourl3",file1:null,file2:null,file3:formData})
            }


        }
       }
	onGridDocumentData3Change(event: any, right: any){
             this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
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
                this.gridFileData[index].for="documenturl3"
            }else{
              this.gridFileData.push({tag:right.tag,count:right.count,for:"documenturl3",file1:null,file2:null,file3:formData})
            }


        }
       }
    onupload(){
    	for (var i = 0; i < this.audioFileData.length; i++) {
           
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.audioFileData[i].file!=null) {

            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.audioFileData[i].tag+'/'+this.audioFileData[i].count+'/'+this.audioFileData[i].for,this.audioFileData[i].file, options)
                .subscribe(
                    data => {
                        data = data.json().base64String;
                        this.tempCustomerBase64.push(data);
                        setTimeout(() => {

                        }, 10000);
                    },
                    error => console.log(error))
            }
            
        }
    
    for (var i = 0; i < this.videoFileData.length; i++) {
           
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.videoFileData[i].file!=null) {
            	console.log(JSON.stringify(this.videoFileData[i]))
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.videoFileData[i].tag+'/'+this.videoFileData[i].count+'/'+this.videoFileData[i].for,this.videoFileData[i].file, options)
                .subscribe(
                    data => {
                        data = data.json().base64String;
                        this.tempCustomerBase64.push(data);
                        setTimeout(() => {

                        }, 10000);
                    },
                    error => console.log(error))
            }
            
        }
    
    for (var i = 0; i < this.documentFileData.length; i++) {
           
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.documentFileData[i].file!=null) {
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.documentFileData[i].tag+'/'+this.documentFileData[i].count+'/'+this.documentFileData[i].for,this.documentFileData[i].file, options)
                .subscribe(
                    data => {
                        data = data.json().base64String;
                        this.tempCustomerBase64.push(data);
                        setTimeout(() => {

                        }, 10000);
                    },
                    error => console.log(error))
            }
            
        }
    for (var i = 0; i < this.gridFileData.length; i++) {
           
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            if (this.gridFileData[i].file1!=null) {
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.gridFileData[i].tag+'/'+this.gridFileData[i].count+'/'+this.gridFileData[i].for,this.gridFileData[i].file1, options)
                .subscribe(
                    data => {
                        data = data.json().base64String;
                        this.tempCustomerBase64.push(data);
                        setTimeout(() => {

                        }, 10000);
                    },
                    error => console.log(error))
            }
            if (this.gridFileData[i].file2!=null) {
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.gridFileData[i].tag+'/'+this.gridFileData[i].count+'/'+this.gridFileData[i].for,this.gridFileData[i].file2, options)
                .subscribe(
                    data => {
                        data = data.json().base64String;
                        this.tempCustomerBase64.push(data);
                        setTimeout(() => {

                        }, 10000);
                    },
                    error => console.log(error))
            }
            if (this.gridFileData[i].file3!=null) {
            	this.http.post('http://52.15.178.19:3001/api/uploadContentMeida/'+this.contentId+'/'+this.gridFileData[i].tag+'/'+this.gridFileData[i].count+'/'+this.gridFileData[i].for,this.gridFileData[i].file3, options)
                .subscribe(
                    data => {
                        data = data.json().base64String;
                        this.tempCustomerBase64.push(data);
                        setTimeout(() => {

                        }, 10000);
                    },
                    error => console.log(error))
            }
            
        }
    
  }
}