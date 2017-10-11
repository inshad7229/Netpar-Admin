import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  constructor(private dialog: MatDialog) { }
  openDialog(): void {
    let dialogRef = this.dialog.open(HomeDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

	ngOnInit() {

		$('.filter-plugin > a').on('click',function(){
        $(this).closest('.filter-plugin').addClass('open');
        console.log($(this));
    });
    $('.close-filter').on('click',function(){
        $(this).closest('.filter-plugin').removeClass('open');
    });
	}

}
