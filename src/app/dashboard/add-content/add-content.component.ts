import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {DndModule} from 'ng2-dnd';
import {ColorPickerService} from 'angular4-color-picker';
import { DragDropComponent } from './drag-drop/drag-drop.component';
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
import {ContentService} from '../../providers/content.service'

declare var jQuery:any;
declare var $ :any;


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss'], 
  providers:[FormControlDirective,SectionService,AdminService,ContentService]
})

export class AddContentComponent implements OnInit {
	@ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
	listOne= [ ];
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
    categories:any;
    subCategory:any;
    adminList:any;
    localAdminList:any;
    searchUser:any;
    addedresponse:any;
    suggestedArticleList:any;
    forContent;
    todaydate
    stringResource:StringResource=new  StringResource()
    public get imageToDisplayHorigontal() {
        if (this.currentImageHorigontal) {
            return this.currentImageHorigontal;
        }
        if (this.imageUrl) {
            return this.imageUrl;
        }
        return `http://placehold.it/${this.widthPx}x${this.heightPx}`;
    }

    public get croppieOptionsHorigontal(): CroppieOptions {
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
	



    addText(){
    	 this.listOne.push({tag:"text",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',url:'./assets/img/cover.jpeg',altTag:'file not found',title:'Title', caption:'Image',aligment:'center', display:'inline-block',text:'Dummy Text'}) 
    }
	addImage(){
        this.listOne.push({tag:"image",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',url:'./assets/img/cover.jpeg',altTag:'file not found',title:'Title', caption:'Image',aligment:'center', display:'inline-block'})
	}
	addAudio(){
        this.listOne.push({tag:"audio",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',url:'./assets/img/cover.jpeg',altTag:'file not found',title:'Title', caption:'Audio',aligment:'center', display:'inline-block'})
	}
	addVideo(){
		this.listOne.push({tag:"video",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',url:'./assets/videos/SampleVideo.mp4',altTag:'file not found',title:'Title', caption:'Video',aligment:'center', display:'inline-block'})
	}
	addFile(){
		this.listOne.push({tag:"document",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'110px',url:'./assets/img/JAVA.png',altTag:'file not found',title:'Title', caption:'File',aligment:'center', display:'inline-block'})
	}
	addGrid(){
		   this.listOne.push({tag:"grid",tags:'grid, grid',top:null,bottom:null,right:null,left:null,aligment:'center',title:'Title',caption:'File',activeIndex:null,
		    placeholder1:'./assets/img/placeholder5.png' ,audiourl1:null,videourl1:null,imgurl1:'./assets/img/placeholder5.png',documenturl1:null,
			placeholder2:'./assets/img/placeholder5.png' ,audiourl2:null,videourl2:null,imgurl2:'./assets/img/placeholder5.png',documenturl2:null,
			placeholder3:'./assets/img/placeholder5.png' ,audiourl3:null,videourl3:null,imgurl3:'./assets/img/placeholder5.png',documenturl3:null,
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
         this.userEngaButton.push({tag:'button',title:"'Download",status:true})
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
	onUrlChange(ref?:any){
      this.listOne[this.currentIndex].url=this.rightPan.url
      this.listOne[this.currentIndex].placeHolder=this.rightPan.url
  	  //console.log(this.ref);
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
	imageUploadForGridOneIndexEvent(evt: any) {
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
        };
        fr.readAsDataURL(file);
	}
	onGridImgUrl1Change(){
            this.listOne[this.currentIndex].imgurl1=this.rightPan.imgurl1;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=null;
	}
	onGridVideoUrl1Change(){

            this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=this.rightPan.videourl1;
			this.listOne[this.currentIndex].documenturl1=null;
			// this.gridVideoRef.load();
			// this.gridVideoRef.play();
	}
	onGridAudioUrl1Change(){
		    this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=this.rightPan.audiourl1;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=null;
			// this.gridAudioRef.load();
			// this.gridAudioRef.play();

	}
	onGridDocumentUrl1Change(){
            this.listOne[this.currentIndex].imgurl1=null;
			this.listOne[this.currentIndex].audiourl1=null;
			this.listOne[this.currentIndex].videourl1=null;
			this.listOne[this.currentIndex].documenturl1=this.rightPan.documenturl1;
	}
	imageUploadForGridTwoIndexEvent(evt: any) {
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
        };
        fr.readAsDataURL(file);

	}
	onGridImgUrl2Change(){
            this.listOne[this.currentIndex].imgurl2=this.rightPan.imgurl2;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
	}
	onGridVideoUrl2Change(){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=this.rightPan.videourl2;
			this.listOne[this.currentIndex].documenturl2=null;
			// this.gridVideoRef.load();
			// this.gridVideoRef.play();
	}
	onGridAudioUrl2Change(){
            this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=this.rightPan.audiourl2;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			// this.gridAudioRef.load();
			// this.gridAudioRef.play();
	}
	onGridDocumentUrl2Change(){
             this.listOne[this.currentIndex].imgurl2=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=this.rightPan.documenturl2;
	}
	imageUploadForGridThirdIndexEvent(evt: any) {
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
        };
        fr.readAsDataURL(file);

	}
	onGridImgUrl3Change(){
            this.listOne[this.currentIndex].imgurl3=this.rightPan.imgurl3;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
	}
	onGridVideoUrl3Change(){
            this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=this.rightPan.videourl2;
			this.listOne[this.currentIndex].documenturl2=null;
			// this.gridVideoRef.load();
			// this.gridVideoRef.play();
	}
	onGridAudioUrl3Change(){
            this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl2=this.rightPan.audiourl2;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=null;
			// this.gridAudioRef.load();
			// this.gridAudioRef.play();
	}
	onGridDocumentUrl3Change(){
            this.listOne[this.currentIndex].imgurl3=null;
			this.listOne[this.currentIndex].audiourl2=null;
			this.listOne[this.currentIndex].videourl2=null;
			this.listOne[this.currentIndex].documenturl2=this.rightPan.documenturl2;
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
	                this.sections=data;
	            },error=>{
	                alert(error)
	            })
	}
	getCategory(){
		 this.waitLoader = true;
		 this.subCategory=[]
         this.sectionService.onGetCategory(this.addContentRequest.sectionId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.categories=data.response;
                    //console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                }) 
    }
   getsubCategory(){
   	this.waitLoader = true;
   	this.sectionService.onGetSubCategory(this.addContentRequest.sectionId,this.addContentRequest.categoryId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.subCategory=data.response;
                    //console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                }) 
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
                                                                          
                               	}                        	// code...
                        }
                    //console.log(JSON.stringify(data))
                },error=>{
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
  toggleHighlight(i){
  	if (this.localAdminList[i].check=='active') {
  		this.localAdminList[i].check='inactive';
  	}else{

  	  this.localAdminList[i].check='active';
  	}
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
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
                              
                                 this.router.navigate(['/view-content'],{ skipLocationChange: true });
                            }
                },error=>{
                    alert(error)
           })	
		}

		

	}
	deletesuggestedArticle(i){
		this.suggestedArticleList.splice(i,1)
	}
}
