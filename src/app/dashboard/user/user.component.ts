import { Component, OnInit } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    constructor(private dialog: MatDialog) { }
    openDialog(): void {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            width: '400px',
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }

    openDialog2(): void {
        let dialogRef = this.dialog.open(FilterDialogComponent, {
            width: '800px',
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


		$('.cusdropdown-toggle').on('click',function(){
            /*$('.cusdropdown-toggle').closest('.dropdown').removeClass('open');*/
            $(this).closest('.dropdown').toggleClass('open');
        })
        $(window).on('click',function(e){
            e.stopPropagation();
            var $trigger = $(".cusdropdown-toggle").closest('.dropdown');
            console.log($trigger);
            if($trigger !== e.target && !$trigger.has(e.target).length){
                $('.cusdropdown-toggle').closest('.dropdown').removeClass('open');
            }
        });
    }

}
