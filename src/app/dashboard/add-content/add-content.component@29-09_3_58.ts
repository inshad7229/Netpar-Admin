import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {DndModule} from 'ng2-dnd';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {ColorPickerService} from 'angular4-color-picker';

declare var jQuery:any;
declare var $ :any;


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})

export class AddContentComponent implements OnInit {
	listOne= [ ];
	private color: string = "#127bdc";
	constructor(private dialog: MdDialog,private cpService: ColorPickerService) { }
    openDialog(): void {
        let dialogRef = this.dialog.open(DragDropComponent, {
            width: '80%',
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }
    addText(){
    	 
    }
	addImage(){
        this.listOne.push({tag:"image",top:null,bottom:null,right:null,left:null})
	}
	addAudio(){
        this.listOne.push({tag:"audio",top:null,bottom:null,right:null,left:null})
	}
	addVideo(){
		this.listOne.push({tag:"video",top:null,bottom:null,right:null,left:null})
	}
	addFile(){
		this.listOne.push({tag:"document",top:null,bottom:null,right:null,left:null})
	}
	addGrid(){
		this.listOne.push({tag:"grid",top:null,bottom:null,right:null,left:null})
	}
	addApply(){
        this.listOne.push({tag:"button",top:null,bottom:null,right:null,left:null})
	}
	addCall(){

	}
	addCallMe(){

	}
	addIntrested(){

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

	
	imagChange(){
	    $('.file-type').on('change',function(e){
		    var tmppath = URL.createObjectURL(e.target.files[0]);
		    console.log($(this));
		    $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
	    	$(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});
 	}
 	
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

}
