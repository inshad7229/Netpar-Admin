import { Component, OnInit,Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdListModule} from '@angular/material';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
	
	constructor(private dialog: MdDialog, public dialogRef: MdDialogRef<FilterDialogComponent>,
  	@Inject(MD_DIALOG_DATA) public data: any) { }

  	ngOnInit() {
  	
  	}

  	onClosed(){
  		this.dialogRef.close();
  	}
 
}
