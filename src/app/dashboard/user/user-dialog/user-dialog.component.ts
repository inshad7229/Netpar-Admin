import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  user
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<UserDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.user=data.user
   }

  ngOnInit() {
  	
  }

  onClosed(){
  	this.dialogRef.close();
  }
 
}
