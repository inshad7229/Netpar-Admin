import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-view-priority-dialog',
  templateUrl: './content-view-priority-dialog.component.html',
  styleUrls: ['./content-view-priority-dialog.component.scss']
})
export class ContentViewPriorityDialogComponent implements OnInit {
     forContent
  	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ContentViewPriorityDialogComponent>,
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
    getHtml(code){
    	let codesantizer=this.sanitizer.bypassSecurityTrustHtml(code);
      return codesantizer;
    }
}
