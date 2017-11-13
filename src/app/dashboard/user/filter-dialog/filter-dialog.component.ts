import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import {StateResource} from '../../../models/stateResources'
import {StateService} from '../../../providers/state.service'

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
  providers:[StateService]
})
export class FilterDialogComponent implements OnInit {
	stateResource:StateResource=new StateResource()
	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<FilterDialogComponent>,
  	@Inject(MAT_DIALOG_DATA) public data: any,private stateService:StateService) { }

  	ngOnInit() {
  	
  	}

  	onClosed(){
  		this.dialogRef.close();
  	}
   getState(){
     
   }
}
