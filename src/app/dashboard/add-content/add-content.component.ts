import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
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
	private color: string = "#FFFFFF";
	constructor(private dialog: MdDialog, private cpService: ColorPickerService) { 
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
		this.listOne.push({tag:"grid",top:null,bottom:null,right:null,left:null})
	}
	addApply(){
        this.listOne.push({tag:"button",backgroundColor:'#FFFFFF',top:'10px',bottom:'10px',right:'10px',left:'10px',buttonText:'button',width:'75%',url:'',altTag:'file not found',title:'Title', caption:'Image',aligment:'center', display:'inline-block'})
	}
	addForm(){
		this.googleFromdata.tag="form"; 
		// this.googleFromdata.url='null';
	}
	addCall(){

	}
	addCallMe(){

	}
	addIntrested(){

	}
    hello(){
    	alert('her')
    }
	onClickOnDragItem(index,item){
      //alert(index)
      this.showRightpan=true;
      this.currentIndex=index;
      this.rightPan=item
      this.rightPan.placeHolder=item.url;
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
	onUrlChange(){
      this.listOne[this.currentIndex].url=this.rightPan.url
      this.listOne[this.currentIndex].placeHolder=this.rightPan.url
	}
	onFormChange(){
      this.listOne[this.currentIndex].formURL=this.rightPan.formURL
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

	 itemDragged(i){
    console.log('mousedown',i)
   }
itemSwapped(i){
 console.log('mouseUp',i)
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
