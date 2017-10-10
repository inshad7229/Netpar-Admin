import { Component, OnInit,Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  date:any;
  showMessage:boolean=false;
  constructor(private dialog: MdDialog, public dialogRef: MdDialogRef<DragDropComponent>,
  @Inject(MD_DIALOG_DATA) public data: any) { 
  	this.date={}
  }

  ngOnInit() {
  	alert(JSON.stringify(this.data))
  }
 checkStartDate(){

 }
 checkEndDate(){
 	
 }
  submit(){
  	var d = new Date(this.date.start);
    var n = d.toUTCString();
    var tzoffset = (new Date(this.date.start)).getTimezoneOffset() * 60000;
    var localISOTimeStart = (new Date(this.date.start - tzoffset)).toISOString().slice(0,-1)
    var localISOTimeEnd = (new Date(this.date.end - tzoffset)).toISOString().slice(0,-1)
  	alert(JSON.stringify(localISOTimeStart))
    if (localISOTimeStart==localISOTimeEnd ) {
    	alert('hi')

    	return this.showMessage=true
    }
  }
}
