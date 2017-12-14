import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import {UserService} from '../../../providers/user.service';
import { DomSanitizer } from '@angular/platform-browser';
import {AppProvider} from '../../../providers/app.provider'

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.scss'],
  providers:[UserService]
})
export class MediaDialogComponent implements OnInit {
  media
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<MediaDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,private sanitizer: DomSanitizer,private userProvider:UserService,private appProvider:AppProvider) {
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
 ondownload(){
   this.userProvider.download(this.media.url,this.media.type)
 }
}
