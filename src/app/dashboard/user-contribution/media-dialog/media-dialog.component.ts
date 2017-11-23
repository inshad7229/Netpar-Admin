import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.scss']
})
export class MediaDialogComponent implements OnInit {
  media
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<MediaDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,private sanitizer: DomSanitizer,) {
    this.media=data
   }

  ngOnInit() {
  	
  }
safeURL(url){
     return this.sanitizer.bypassSecurityTrustResourceUrl(url); 
    }
  onClosed(){
  	this.dialogRef.close();
  }
 
}
