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
    image=[]
  	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ListingViewComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any) {
	this.forContent=this.data.forContent 
	this.layout=this.data.layout
	console.log(this.layout)
	console.log(this.forContent)
	for (let  i =0;i<this.forContent.contentBody.length;i++ ) {
		if (this.image.length<6) {
			 if (this.forContent.contentBody[i].tag=='image' || this.forContent.contentBody[i].tag=='grid') {
		 	// code...
		 	if (this.forContent.contentBody[i].tag=='image') {
		 		this.image.push({url:this.forContent.contentBody[i].url})
		 	}
		 	if (this.forContent.contentBody[i].tag=='grid') {
		 		if (this.forContent.contentBody[i].imgurl1!=null && this.forContent.contentBody[i].imgurl1!='./assets/img/placeholder5.png') {
		 			this.image.push({url:this.forContent.contentBody[i].imgurl1})
		 			// code...
		 		}
		 		if (this.forContent.contentBody[i].imgurl2!=null && this.forContent.contentBody[i].imgurl2!='./assets/img/placeholder5.png') {
		 			this.image.push({url:this.forContent.contentBody[i].imgurl2})
		 			// code...
		 		}
		 		if (this.forContent.contentBody[i].imgurl3!=null && this.forContent.contentBody[i].imgurl3!='./assets/img/placeholder5.png') {
		 			this.image.push({url:this.forContent.contentBody[i].imgurl3})
		 			// code...
		 		}
		 	}
		 }
		}
		
	}
}

	ngOnInit() {
		
	}

	onClosed(){
		this.dialogRef.close();
	}

}
