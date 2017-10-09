import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import {DndModule} from 'ng2-dnd';
import {ColorPickerService} from 'angular4-color-picker';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { SuggestArticleDialogComponent } from './suggest-article-dialog/suggest-article-dialog.component';

declare var jQuery:any;
declare var $ :any;


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})

export class AddContentComponent implements OnInit {
	listOne= [ ];
	currentIndex:any;
	rightPan:any;
	showRightpan:boolean=false;
	googleFromdata:any
	mouseDownIndex:number;
	afterDragIndex:number;
	gridAudioRef:any;
	gridVideoRef:any;
	userEngaButton=[];
	callToActionButton=[];
	ref
	private color: string = "#FFFFFF";
	constructor(private dialog: MdDialog, private cpService: ColorPickerService,private sanitizer: DomSanitizer) { 
		this.rightPan={ }
		this.googleFromdata={ }

	}
    openDialog(): void {
        let dialogRef = this.dialog.open(DragDropComponent, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }

    openDialog2(): void {
        let dialogRef = this.dialog.open(SuggestArticleDialogComponent, {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
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
		this.googleFromdata.tag="form"; 
		// this.googleFromdata.url='null';
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
  	  console.log(this.ref);
      if ((this.listOne[this.currentIndex].tag=='video' || this.listOne[this.currentIndex].tag=='audio' ) && this.ref) {
      	console.log(this.ref);
      	this.ref.load();
    	this.ref.play();
      }
	}
	onFormUrlChange(url){
      this.googleFromdata.formURL=this.sanitizer.bypassSecurityTrustResourceUrl(url)
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
		console.log(JSON.stringify(a))
	}
    OnFirstGrid(audio,video){
      console.log(audio)
      console.log(video)
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
    	console.log(audio)
      console.log(video)
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
    	console.log(audio)
      console.log(video)
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
    console.log('mousedown',i)
   }
	itemSwapped(i){
	 this.afterDragIndex=i;
	 console.log('mouseUp',i)
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
		console.log(video1)
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
        console.log(JSON.stringify(this.receivedData))
    }*/
  	ngOnInit() {
  		
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
	}

	
	/*imagChange(){

	    $('.file-type').on('change',function(e){
	    	var tmppath = URL.createObjectURL(e.target.files[0]);
	    	
		    console.log($(this));
		    $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
	    	$(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});
 	}*/
 	
 	formimage(){
 		$('.file-type').on('change',function(e){
		    var tmppath = URL.createObjectURL(e.target.files[0]);
		    console.log($(this));
		    $(this).closest('.btn-file').hide();
		    $(this).closest('.file_upload').find('img').attr('src',tmppath);
	    	$(this).closest('.file_upload').find('.file_img').show();
		});	
 	}

 	close_img(){
 		$('.file_img .close').click(function() {
	 		console.log('s');
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
}
