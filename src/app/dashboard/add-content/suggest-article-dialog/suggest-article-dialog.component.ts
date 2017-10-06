import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdListModule} from '@angular/material';

@Component({
  selector: 'app-suggest-article-dialog',
  templateUrl: './suggest-article-dialog.component.html',
  styleUrls: ['./suggest-article-dialog.component.scss']
})
export class SuggestArticleDialogComponent implements OnInit {

  constructor(private dialog: MdDialog, public dialogRef: MdDialogRef<SuggestArticleDialogComponent>,
  @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	
  }

  onClosed(){
  	this.dialogRef.close();
  }


}
