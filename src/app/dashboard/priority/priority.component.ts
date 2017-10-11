import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PriorityDialogComponent } from './priority-dialog/priority-dialog.component';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

    ngOnInit() {
      $('.filter-plugin > a').on('click',function(){
          $(this).closest('.filter-plugin').addClass('open');
          console.log($(this));
      });
      $('.close-filter').on('click',function(){
          $(this).closest('.filter-plugin').removeClass('open');
      });
    }
    openDialog(): void {
        let dialogRef = this.dialog.open(PriorityDialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          
        });
    }
}
