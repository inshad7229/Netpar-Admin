import { Component, OnInit } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-article-analytics',
  templateUrl: './article-analytics.component.html',
  styleUrls: ['./article-analytics.component.scss']
})
export class ArticleAnalyticsComponent implements OnInit {

  constructor() { }

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
