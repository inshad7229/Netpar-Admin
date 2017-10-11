import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.scss']
})
export class LanguageDialogComponent implements OnInit {
  language:any;
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<LanguageDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.language=this.data.lang;
  	//alert(JSON.stringify( this.language))
  }

  onClosed(){
  	this.dialogRef.close();
  }

}
