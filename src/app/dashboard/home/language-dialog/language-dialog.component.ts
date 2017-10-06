import { Component, OnInit, Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdListModule} from '@angular/material';

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.scss']
})
export class LanguageDialogComponent implements OnInit {
  language:any;
  constructor(private dialog: MdDialog, public dialogRef: MdDialogRef<LanguageDialogComponent>,
  @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.language=this.data.lang;
  	alert(JSON.stringify( this.language))
  }

  onClosed(){
  	this.dialogRef.close();
  }

}
