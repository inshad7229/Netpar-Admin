import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-view-home-dialog',
  templateUrl: './content-view-home-dialog.component.html',
  styleUrls: ['./content-view-home-dialog.component.scss']
})
export class ContentViewHomeDialogComponent implements OnInit {
     forContent
  	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ContentViewHomeDialogComponent>,
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
     getClass1(item){
      if (item.btn1=='Kadak' || item.btn1=='Share') {
       return 'active'
      }

    }
    getClass2(item){
       if (item.btn2=='Kadak' || item.btn2=='Share') {
       return 'active'
      }
    }
    getClass3(item){
      if (item.btn3=='Kadak' || item.btn3=='Share') {
       return 'active'
      } 
    }
    getClass4(item){
       if (item.btn4=='Kadak' || item.btn4=='Share') {
       return 'active'
      }
    }
    getClass5(item){
      if (item.btn5=='Kadak' || item.btn5=='Share') {
       return 'active'
      } 
    }
    getClass6(item){
      if (item.btn1=='ImInterested' || item.btn1=='Call') {
       return 'active'
      }
    }
    getClass7(item){
     if (item.btn2=='ImInterested' || item.btn2=='Call') {
       return 'active'
      }
    }
    getClass8(item){
      if (item.btn3=='ImInterested' || item.btn3=='Call') {
       return 'active'
      }
    }
    getClass9(item){
      if (item.btn4=='ImInterested' || item.btn4=='Call') {
       return 'active'
      }
    }
      getTypeFile(url){
   if (url.indexOf('<iframe')==-1) {
     return true
   }else{
     return false
   }
  }
}
