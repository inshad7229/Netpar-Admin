import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-view-dialog',
  templateUrl: './content-view-dialog.component.html',
  styleUrls: ['./content-view-dialog.component.scss']
})
export class ContentViewDialogComponent implements OnInit {
     forContent
  	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ContentViewDialogComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any,private sanitizer: DomSanitizer) {
		this.forContent=this.data.forContent
		console.log(JSON.stringify(this.forContent))
	 }

	ngOnInit() {
		
	}
	onClosed(){
		this.dialogRef.close();
	}
    googleFormUrl(url){
      let urlsantizer=this.sanitizer.bypassSecurityTrustResourceUrl(url);
      return urlsantizer;
    }
}
