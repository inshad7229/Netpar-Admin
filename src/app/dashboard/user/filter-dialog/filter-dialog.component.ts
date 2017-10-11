import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
	
	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<FilterDialogComponent>,
  	@Inject(MAT_DIALOG_DATA) public data: any) { }

  	ngOnInit() {
  	
  	}

  	onClosed(){
  		this.dialogRef.close();
  	}
 
}
