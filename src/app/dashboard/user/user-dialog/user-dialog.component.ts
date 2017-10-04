import { Component, OnInit,Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdListModule} from '@angular/material';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

  constructor(private dialog: MdDialog, public dialogRef: MdDialogRef<UserDialogComponent>,
  @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	
  }

  onClosed(){
  	this.dialogRef.close();
  }
 
}
