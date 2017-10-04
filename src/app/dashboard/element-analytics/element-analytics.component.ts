import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-element-analytics',
  templateUrl: './element-analytics.component.html',
  styleUrls: ['./element-analytics.component.scss']
})
export class ElementAnalyticsComponent implements OnInit {

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
