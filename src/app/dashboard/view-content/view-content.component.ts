import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

import {MatSort} from '@angular/material';
import {DataTableModule} from "angular2-datatable";

import { ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import {ContentService} from '../../providers/content.service'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss'],
  providers:[ContentService]
})
export class ViewContentComponent implements OnInit {
    waitLoader
    contentList
    filterValue:any;
  	constructor(private dialog: MatDialog,
                private contentService:ContentService ) {
                this.filterValue={} }
    displayedColumns = ['userId', 'userName', 'progress', 'color'];
    exampleDatabase = new ExampleDatabase();
    dataSource:  ExampleDataSourceSort | null;
    dataSourceSort: ExampleDataSourceSort | null;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        $('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });
        //this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
        this.dataSource = new ExampleDataSourceSort(this.exampleDatabase, this.sort);
        this.getList()
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(ViewDialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          
        });
    }
    getList(){
     this.contentService.ongetContentList()
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.contentList=data.response
                        // this.localAdminList=data.response;
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
           })
  }
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with 100 users.
    for (let i = 0; i < 100; i++) { this.addUser(); }
  }

  /** Adds a new user to the database. */
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  /** Builds and returns a new User. */
  private createNewUser() {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: (this.data.length + 1).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
    super();
  }

  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._exampleDatabase.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}

export class ExampleDataSourceSort extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _sort: MatSort) {
    super();
  }

  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.getSortedData();
    });
  }

  disconnect() {}
  getSortedData(): UserData[] {
    const data = this._exampleDatabase.data.slice();
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';

      switch (this._sort.active) {
        case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;
        case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;
        case 'color': [propertyA, propertyB] = [a.color, b.color]; break;
      }

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }

}