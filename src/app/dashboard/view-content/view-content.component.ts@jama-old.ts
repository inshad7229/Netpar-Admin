import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ViewDialogComponent} from './view-dialog/view-dialog.component';
import { ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss']
})
export class ViewContentComponent implements OnInit {

  	constructor(private dialog: MatDialog) { }
    
    ngOnInit() {
      /*$(window).on('click',function(e){
            e.stopPropagation();
            var $trigger = $(".filter-plugin");
            if($trigger !== e.target && !$trigger.has(e.target).length){
                $('.filter-plugin').removeClass('open');
            }
        });*/
        $('.filter-plugin > a').on('click',function(){
        	$(this).closest('.filter-plugin').addClass('open');
        	console.log($(this));
        });
        $('.close-filter').on('click',function(){
        	$(this).closest('.filter-plugin').removeClass('open');
        });
  	}

    openDialog(): void {
        let dialogRef = this.dialog.open(ViewDialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
        
        });
    }
}
