import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.scss']
})
export class ListingViewComponent implements OnInit {
    forContent
    layout
  	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ListingViewComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any) {
	this.forContent=this.data.forContent 
	this.layout=this.data.layout
	console.log(this.forContent)
}

	ngOnInit() {
		
	}

	onClosed(){
		this.dialogRef.close();
	}

}
